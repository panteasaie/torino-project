import api from "../config";

export const updateProfile = async (data) => {
  const response = await api.put("/user/profile", data);

  return response.data;
};