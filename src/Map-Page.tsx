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
  return (
    <>
      <h1>Vart är du?</h1>
      <input type="search" placeholder="Plats" />

      <div className="map-container">
        <div style={{ flex: 2 }}>Karta</div>
        <div style={{ flex: 1 }}>
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
