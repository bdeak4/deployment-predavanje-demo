import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

type QuizQuestionsType = {
  id: string;
  quizId: string;
  text: string;
  type: string;
};

export const useQuizQuestionsQuery = (quizId: string) => {
  return useQuery<QuizQuestionsType[]>({
    queryKey: ["quizQuestions", quizId],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`/question/quiz/${quizId}`);
        return response as unknown as QuizQuestionsType[];
      } catch (error) {
        throw error;
      }
    },
  });
};
