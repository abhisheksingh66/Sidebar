export interface Asset {
  assetId: string;
  type: string;
  model: string;
  homeAirport: string;
  serviceCategory: string;
  manufacturer: string;
  serialNumber: string;
  status: "ACTIVE" | "INACTIVE";
}
