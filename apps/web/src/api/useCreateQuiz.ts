import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./base";

type CreateQuizType = {
  title: string;
  img: string;
  categoryId: string;
};

export const useCreateQuiz = () => {
  return useMutation({
    mutationFn: async (data: CreateQuizType) => {
      try {
        return await axiosInstance.post("/quiz", data);
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log("Quiz created successfully:", data);
    },
  });
};
