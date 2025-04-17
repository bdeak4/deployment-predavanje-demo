import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export const useQuizzesQuery = (title: string, categoryId: string) => {
  return useQuery({
    queryKey: ["quizzes", title, categoryId],
    queryFn: async () => {
      try {
        return await axiosInstance.get(
          `/quiz?title=${title}&categoryId=${categoryId}`
        );
      } catch (error) {
        throw error;
      }
    },
  });
};
