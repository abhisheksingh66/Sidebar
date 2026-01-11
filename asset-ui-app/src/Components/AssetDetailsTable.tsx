import "../styles/AssetDetailsTable.css";

const assetDetails = [
  { label: "Type", value: "AIRCRAFT" },
  { label: "Model", value: "TEST BENCH" },
  { label: "Home Airport ICAO Code", value: "KTEB" },
  { label: "Service Category", value: "BGA" },
  { label: "Serial Number", value: "999" },
];

export default function AssetDetailsTable() {
  return (
    <div className="asset-card">
      <h3>SHJX2P</h3>

      <table>
        <tbody>
          {assetDetails.map((item, i) => (
            <tr key={i}>
              <td className="label">{item.label}</td>
              <td className="value">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="status">
        <span className="dot" /> Active
      </div>
    </div>
  );
}
