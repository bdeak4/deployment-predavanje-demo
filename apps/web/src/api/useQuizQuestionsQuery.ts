import { useQuery } from "@tanstack/react-query";
import { useFetchWithAuth } from "./useFetchWithAuth";

export const useQuizQuestionsQuery = (quizId: string) => {
  const fetchWithAuth = useFetchWithAuth();

  return useQuery({
    queryKey: ["quizQuestions", quizId],
    queryFn: async () => {
      const res = await fetchWithAuth(`/question/quiz/${quizId}`);

      if (!res.ok) {
        throw new Error("Failed to fetch quizzes");
      }

      return res.json();
    },
  });
};
