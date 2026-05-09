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
// export const useReserveTour = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (data) => {
//       const res = await api.post("/tour/reserve", data);

//       return res.data;
//     },

//     onSuccess: () => {

//       // رفرش تورهای من
//       queryClient.invalidateQueries({
//         queryKey: ["user-tours"],
//       });

//     },
//   });
// };
// export const useGetUserTransactions = () => {
//   return useQuery({
//     queryKey: ["user-transactions"],

//     queryFn: async () => {
//       const res = await api.get("/user/transactions");

//       return res.data;
//     },
//   });
// };




export const useGetUserTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const res = await api.get("/user/transactions");
      return res.data;
    },
  });
};