import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export const useQuizQuestionsQuery = (quizId: string) => {
  return useQuery({
    queryKey: ["quizQuestions", quizId],
    queryFn: async () => {
      try {
        return await axiosInstance.get(`/question/quiz/${quizId}`);
      } catch (error) {
        throw error;
      }
    },
  });
};
