import { Map, Marker, Point } from "pigeon-maps";
import { useEffect, useState } from "react";
import johnny from "./assets/johnny.svg";
import { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import Art from "./Art";

const client = generateClient<Schema>();

// @ts-ignore
const exampleArt: Schema["Art"]["type"] = {
  artId: String(Math.floor(Math.random() * 1000)),
  isInvasiveAccordingToEuRegulation: false,
  isInvasiveInSweden: false,
  isRedlisted: false,
  protectedByLaw: false,
  organismGroup: "Kärlväxter",
  class: "Magnoliopsida",
  family: "Lamiaceae",
  genus: "Ajuga",
  kingdom: "Plantae",
  order: "Lamiales",
  phylum: "Tracheophyta",
  scientificName: "Ajuga pyramidalis",
  name: "blåsuga",
};

export default function MapPage() {
  const [center, setCenter] = useState<Point>([59.213177, 14.521051]);
  const [marker] = useState<Point>([59.213177, 14.521051]);
  const [zoom, setZoom] = useState(12);
  const [arts, setArts] = useState<Schema["Art"]["type"][]>([]);

  useEffect(() => {
    client.models.Art.observeQuery().subscribe({
      next: (data) => setArts([...data.items]),
    });
  }, []);

  return (
    <>
      <h1>Var är du?</h1>
      <input type="search" placeholder="Plats" />

      <div className="map-container">
        <Map
          height={300}
          center={center}
          defaultZoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}
        >
          <Marker anchor={marker}>
            <img width={20} src={johnny} alt="Johnny" />
          </Marker>
        </Map>
      </div>

      <div className="info-grid">
        {arts.map((art) => (
          <Art art={art} key={art.artId} />
        ))}
      </div>
    </>
  );
}
