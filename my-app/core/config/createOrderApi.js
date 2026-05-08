
import api from "./api";


export const createOrderApi = (data) => {
  return api.post("/order", data);
};
