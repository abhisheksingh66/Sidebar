import type { Asset } from "../types/asset.types";

const mockAsset: Asset = {
  assetId: "SHJX2P",
  type: "AIRCRAFT",
  model: "TEST BENCH",
  homeAirport: "KTEB",
  serviceCategory: "BGA",
  manufacturer: "TEST BENCH",
  serialNumber: "999",
  status: "ACTIVE",
};

const AssetDetails = () => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", width: "400px" }}>
      <p><b>Asset ID:</b> {mockAsset.assetId}</p>
      <p><b>Type:</b> {mockAsset.type}</p>
      <p><b>Model:</b> {mockAsset.model}</p>
      <p><b>Home Airport:</b> {mockAsset.homeAirport}</p>
      <p><b>Service Category:</b> {mockAsset.serviceCategory}</p>
      <p><b>Manufacturer:</b> {mockAsset.manufacturer}</p>
      <p><b>Serial Number:</b> {mockAsset.serialNumber}</p>
      <p>
        <b>Status:</b>{" "}
        <span style={{ color: "green" }}>{mockAsset.status}</span>
      </p>
    </div>
  );
};

export default AssetDetails;
