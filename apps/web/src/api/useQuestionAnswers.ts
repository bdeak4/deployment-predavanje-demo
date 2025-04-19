import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

type QuestionAnswersType = {
  id: string;
  text: string;
  isCorrect: boolean;
  questionId: string;
};

export const useQuestionAnswers = (questionId: string) => {
  return useQuery<QuestionAnswersType[]>({
    queryKey: ["quiz", questionId],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(
          `/answer/question/${questionId}`
        );
        return response as unknown as QuestionAnswersType[];
      } catch (error) {
        throw error;
      }
    },
  });
};
