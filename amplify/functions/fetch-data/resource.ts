import { defineFunction, secret } from "@aws-amplify/backend";

export const fetchData = defineFunction({
  timeoutSeconds: 60 * 15,
  runtime: 20,
  environment: {
    SLU_API_KEY: secret("SLU_API_KEY"),
  },
});
