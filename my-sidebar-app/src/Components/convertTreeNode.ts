import { LocationRow } from "../components/AllLocationsTable";

export const createLocationRows = (nodes: any[]): LocationRow[] => {
  return nodes.map((node) => {
    const row: LocationRow = { location: node.label };

    const extractServices = (child: any) => {
      const lbl = child.label.toUpperCase();

      if (lbl.includes("VIASAT KA")) row.JX = true;
      if (lbl.includes("GX")) row.GX = true;
      if (lbl.includes("G2X")) row.G2X = true;
      if (lbl.includes("SBB")) row.SBB = true;
      if (lbl.includes("SWIFT64")) row.Swift64 = true;
      if (lbl.includes("IRIDIUM")) row.Iridium = true;

      if (child.children) child.children.forEach(extractServices);
    };

    if (node.children) node.children.forEach(extractServices);

    return row;
  });
};
