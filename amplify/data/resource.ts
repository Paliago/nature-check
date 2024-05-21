import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Favorites: a
    .model({
      artId: a.id().required(),
      name: a.string().required(),
    })
    .authorization((allow) => [allow.owner()]),

  Art: a
    .model({
      artId: a.id().required(),
      name: a.string().required(),
      isInvasiveAccordingToEuRegulation: a.boolean(),
      isInvasiveInSweden: a.boolean(),
      isRedlisted: a.boolean(),
      organismGroup: a.string(),
      protectedByLaw: a.boolean(),
      class: a.string(),
      family: a.string(),
      genus: a.string(),
      kingdom: a.string(),
      order: a.string(),
      phylum: a.string(),
      scientificName: a.string(),
    })
    .identifier(["artId"])
    .authorization((allow) => [allow.authenticated()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
