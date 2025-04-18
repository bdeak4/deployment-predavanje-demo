import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export type QuizType = {
  categoryId: string;
  createdAt: string;
  id: string;
  img: string;
  title: string;
};

export const useQuizQuery = (quizId: string) => {
  return useQuery({
    queryKey: ["quiz", quizId],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`/quiz/${quizId}`);
        return response;
      } catch (error) {
        throw error;
      }
    },
  });
};
