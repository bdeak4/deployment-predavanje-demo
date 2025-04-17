import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export const useQuizQuery = (quizId: string) => {
  return useQuery({
    queryKey: ["quiz", quizId],
    queryFn: async () => {
      try {
        return await axiosInstance.get(`/quiz/${quizId}`);
      } catch (error) {
        throw error;
      }
    },
  });
};
