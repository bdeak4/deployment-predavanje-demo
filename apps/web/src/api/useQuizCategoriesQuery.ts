import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export const useQuizCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/category");
        return response;
      } catch (error) {
        throw error;
      }
    },
  });
};
