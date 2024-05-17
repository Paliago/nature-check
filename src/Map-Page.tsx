import { Map, Marker, Point } from "pigeon-maps";
import { useState } from "react";
import johnny from "./assets/johnny.svg";

const things = [
  {
    image: "https://picsum.photos/200",
    name: "Björk",
  },
  {
    image: "https://picsum.photos/200",
    name: "Gran",
  },
  {
    image: "https://picsum.photos/200",
    name: "Ek",
  },
];

export default function MapPage() {
  const [center, setCenter] = useState<Point>([59.213177, 14.521051]);
  const [zoom, setZoom] = useState(12);

  return (
    <>
      <h1>Vart är du?</h1>
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
          <Marker anchor={center}>
            <img width={20} src={johnny} alt="Johnny" />
          </Marker>
        </Map>
        <div className="info-box">
          <p>Information</p>
          <p>Våtmark</p>
          <p>Mer info</p>
          <p>Absolut</p>
          <p>Vad vill du veta</p>
        </div>
      </div>

      <div className="info-grid">
        {things.map((thing) => (
          <div key={thing.name} className="info-card">
            <img src={thing.image} className="info-image" alt={thing.name} />
            <p className="info-card-title">{thing.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
