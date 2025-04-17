import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export const useQuizCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        return await axiosInstance.get("/category");
      } catch (error) {
        throw error;
      }
    },
  });
};
