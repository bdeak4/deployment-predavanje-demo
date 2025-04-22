import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export type QuizType = {
  categoryId: string;
  createdAt: string;
  id: string;
  img: string;
  title: string;
};

export const useQuizzesQuery = (title: string, categoryId: string) => {
  return useQuery<QuizType[]>({
    queryKey: ["quizzes", title, categoryId],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(
          `/quiz?title=${title}&categoryId=${categoryId}`
        );
        return response as unknown as QuizType[];
      } catch (error) {
        throw error;
      }
    },
  });
};
