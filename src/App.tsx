import { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import MapPage from "./Map-Page";

function App() {
  const [page, setPage] = useState<"map" | "favorite" | "common">("map");

  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <div className="header">
            <button
              className={`header-button ${page === "map" ? "active" : ""}`}
              onClick={() => setPage("map")}
            >
              Karta
            </button>
            <button
              className={`header-button ${page === "favorite" ? "active" : ""}`}
              onClick={() => setPage("favorite")}
            >
              Favoriter
            </button>
            <button
              className={`header-button ${page === "common" ? "active" : ""}`}
              onClick={() => setPage("common")}
            >
              Vanliga Arter
            </button>
            <button className="header-button" onClick={signOut}>
              Logga ut
            </button>
          </div>
          {page === "map" && <MapPage />}
        </main>
      )}
    </Authenticator>
  );
}

export default App;
