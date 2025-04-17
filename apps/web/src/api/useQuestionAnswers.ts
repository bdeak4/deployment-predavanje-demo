import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export const useQuestionAnswers = (questionId: string) => {
  return useQuery({
    queryKey: ["quiz", questionId],
    queryFn: async () => {
      try {
        return await axiosInstance.get(`/answer/question/${questionId}`);
      } catch (error) {
        throw error;
      }
    },
  });
};
