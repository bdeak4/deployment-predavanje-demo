import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./base";

interface UserQuizResult {
  score: number;
  quizId: string;
}

export const useSubmitQuizScore = () => {
  return useMutation({
    mutationFn: async (data: UserQuizResult) => {
      try {
        return await axiosInstance.post("/result", data);
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log("Quiz result submitted successfully:", data);
    },
  });
};
