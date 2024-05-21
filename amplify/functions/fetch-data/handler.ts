import { Handler } from "aws-lambda";
import { env } from "$amplify/env/fetch-data";
import { generateClient } from "aws-amplify/api";
import { Schema } from "../../data/resource";

// const client = generateClient<Schema>();

// interface SpeciesReport {}

export const handler: Handler = async (event) => {
  console.log("Running function", event);
  // const body = {
  //   geographics: {
  //     boundingBox: {
  //       bottomRight: {
  //         latitude: 59.213177,
  //         longitude: 14.521051,
  //       },
  //       topLeft: {
  //         latitude: 59.213177,
  //         longitude: 14.521051,
  //       },
  //     },
  //   },
  // };

  // const request = new Request(
  //   "https://api.artdatabanken.se/species-observation-system/v1/Observations/Search",
  //   {
  //     method: "post",
  //     headers: {
  //       // this is the value of secret named "MY_API_KEY"
  //       Authorization: `Bearer ${env.SLU_API_KEY}`,
  //     },
  //     body: JSON.stringify(body),
  //   }
  // );

  // add exponential backoff
  // const res = await fetch(request);
  // const items = (await res.json()) as SpeciesReport[];

  // await client.models.Art.create({});

  // return res;
};
