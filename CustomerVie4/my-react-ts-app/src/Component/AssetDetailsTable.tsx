import "./AssetDetailsTable.css";

type AssetDetails = {
  label: string;
  value: string;
};

const assetDetails: AssetDetails[] = [
  { label: "Type", value: "AIRCRAFT" },
  { label: "Model", value: "TEST BENCH" },
  { label: "Home Airport ICAO Code", value: "KTEB" },
  { label: "Type of Use", value: "-" },
  { label: "Service Category", value: "BGA" },
  { label: "Manufacturer", value: "TEST BENCH" },
  { label: "Serial Number", value: "999" },
  { label: "AESID (MODE-S)", value: "-" },
  { label: "Previous Provider", value: "-" },
];

export default function AssetDetailsTable() {
  return (
    <div className="asset-details-container">
      <h2 className="asset-title">SHJX2P</h2>

      <table className="asset-table">
        <tbody>
          {assetDetails.map((item, index) => (
            <tr key={index}>
              <td className="label">{item.label}</td>
              <td className="value">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="status">
        <span className="dot"></span>
        Active
      </div>
    </div>
  );
}
