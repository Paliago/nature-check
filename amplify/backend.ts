import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { fetchData } from "./functions/fetch-data/resource";
import { BillingMode } from "aws-cdk-lib/aws-dynamodb";

const backend = defineBackend({
  auth,
  data,
  fetchData,
});

const dataResources = backend.data.resources;

Object.values(dataResources.cfnResources.amplifyDynamoDbTables).forEach(
  (table) => {
    table.billingMode = BillingMode.PAY_PER_REQUEST;
  }
);
