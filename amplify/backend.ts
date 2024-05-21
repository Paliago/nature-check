import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { fetchData } from "./functions/fetch-data/resource";

defineBackend({
  auth,
  data,
  fetchData,
});
