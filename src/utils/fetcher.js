import axios from "axios";

export const getShipments = async () => {
  return axios.get("/api/shipments.json");
};
