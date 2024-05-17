import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import MapPage from "./Map-Page";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [page, setPage] = useState<"map" | "todo">("map");

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div className="header">
            <button
              className={`header-button ${page === "map" ? "active" : ""}`}
              onClick={() => setPage("map")}
            >
              Karta
            </button>
            <button
              className={`header-button ${page === "todo" ? "active" : ""}`}
              onClick={() => setPage("todo")}
            >
              Todo
            </button>
            <button className="header-button" onClick={signOut}>
              Sign out
            </button>
          </div>

          {page === "todo" && (
            <>
              <h1>{user?.signInDetails?.loginId}'s todos</h1>
              <h1>My todos</h1>
              <button onClick={createTodo}>+ new</button>
              <ul>
                {todos.map((todo) => (
                  <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
                    {todo.content}
                  </li>
                ))}
              </ul>
            </>
          )}

          {page === "map" && <MapPage />}
        </main>
      )}
    </Authenticator>
  );
}

export default App;
