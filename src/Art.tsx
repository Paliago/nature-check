import { useState, useRef, useEffect } from "react";
import { Schema } from "../amplify/data/resource";

export default function Art({ art }: { art: Schema["Art"]["type"] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div
      ref={cardRef}
      className={`info-card ${isExpanded ? "expanded" : ""}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <img
        src={"https://picsum.photos/200"}
        className="info-image"
        alt={art.name}
      />
      {isExpanded && (
        <div className="info-card-content">
          <h2>{art.name.charAt(0).toUpperCase() + art.name.slice(1)}</h2>
          <p>Latin: {art.scientificName}</p>
          <p>Familj: {art.family}</p>
          <p>Ordning: {art.order}</p>
          <p>Klass: {art.class}</p>
          <p>Fylum: {art.phylum}</p>
          <p>Rike: {art.kingdom}</p>
          <p>Grupp: {art.organismGroup}</p>
          <p>
            Invasiv i EU: {art.isInvasiveAccordingToEuRegulation ? "Ja" : "Nej"}
          </p>
          <p>Invasiv i Sverige: {art.isInvasiveInSweden ? "Ja" : "Nej"}</p>
          <p>Fridlyst: {art.protectedByLaw ? "Ja" : "Nej"}</p>
          <p>Rödlistad: {art.isRedlisted ? "Ja" : "Nej"}</p>
        </div>
      )}
      {!isExpanded && <p className="info-card-title">{art.name}</p>}
    </div>
  );
}
