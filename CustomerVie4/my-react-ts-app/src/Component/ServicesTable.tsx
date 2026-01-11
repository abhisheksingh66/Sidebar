import { useState } from "react";
import "./App.css";

/* ================= TYPES ================= */
type LocationRow = {
  location: string;
  aircraft: string;
  services: {
    jx: boolean;
    gx: boolean;
    g2x: boolean;
    sbb: boolean;
    swift64: boolean;
    iridium: boolean;
  };
};

/* ================= MOCK DATA ================= */
const locations: LocationRow[] = [
  {
    location: "N221NT",
    aircraft: "Beechcraft Denali",
    services: {
      jx: false,
      gx: false,
      g2x: false,
      sbb: false,
      swift64: false,
      iridium: true,
    },
  },
  {
    location: "N253PK",
    aircraft: "Cessna 680A",
    services: {
      jx: false,
      gx: false,
      g2x: false,
      sbb: false,
      swift64: false,
      iridium: true,
    },
  },
  {
    location: "N4TR",
    aircraft: "Cessna 700",
    services: {
      jx: false,
      gx: false,
      g2x: false,
      sbb: false,
      swift64: false,
      iridium: true,
    },
  },
];

/* ================= APP ================= */
export default function App() {
  const [showAll, setShowAll] = useState(true);

  return (
    <div className="page">
      {/* LEFT PANEL */}
      <div className="sidebar">
        <div className="all active" onClick={() => setShowAll(true)}>
          All
        </div>

        {locations.map((loc) => (
          <div key={loc.location} className="location-item">
            <span className="dot" />
            <div>
              <div className="loc-name">{loc.location}</div>
              <div className="loc-sub">{loc.aircraft}</div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div className="content">
        {showAll && (
          <table className="services-table">
            <thead>
              <tr>
                <th>Location</th>
                <th>JX</th>
                <th>GX</th>
                <th>G2X</th>
                <th>SBB</th>
                <th>Swift64</th>
                <th>Iridium</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((row) => (
                <tr key={row.location}>
                  <td className="link">{row.location}</td>
                  <td>{row.services.jx && "✔"}</td>
                  <td>{row.services.gx && "✔"}</td>
                  <td>{row.services.g2x && "✔"}</td>
                  <td>{row.services.sbb && "✔"}</td>
                  <td>{row.services.swift64 && "✔"}</td>
                  <td className="check">
                    {row.services.iridium && "✔"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
