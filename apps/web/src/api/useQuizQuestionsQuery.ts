import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export const useQuizQuestionsQuery = (quizId: string) => {
  return useQuery({
    queryKey: ["quizQuestions", quizId],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`/question/quiz/${quizId}`);
        return response;
      } catch (error) {
        throw error;
      }
    },
  });
};
