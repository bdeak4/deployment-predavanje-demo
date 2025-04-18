import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export const useQuestionAnswers = (questionId: string) => {
  return useQuery({
    queryKey: ["quiz", questionId],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(
          `/answer/question/${questionId}`
        );
        return response;
      } catch (error) {
        throw error;
      }
    },
  });
};
