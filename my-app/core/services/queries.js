
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../config/api";



export const useGetUserData = () => {
  return useQuery({
    queryKey: ["user-data"],

    queryFn: async () => {
      const res = await api.get("/user/profile");
      return res.data;
    },
  });
};



export const useUpdateUserData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const res = await api.put("/user/profile", data);

      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-data"],
      });
    },
  });
};
export const useGetUserTours = () => {
  return useQuery({
    queryKey: ["user-tours"],

    queryFn: async () => {
      const res = await api.get("/user/tours");

      return res.data;
    },
  });
};