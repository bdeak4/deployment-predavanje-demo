import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export const useQuizzesQuery = (title: string, categoryId: string) => {
  return useQuery({
    queryKey: ["quizzes", title, categoryId],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(
          `/quiz?title=${title}&categoryId=${categoryId}`
        );
        return response;
      } catch (error) {
        throw error;
      }
    },
  });
};
