import { useQuery } from "@tanstack/react-query";
import { useFetchWithAuth } from "./useFetchWithAuth";

export const useQuestionAnswers = (questionId: string) => {
  const fetchWithAuth = useFetchWithAuth();

  return useQuery({
    queryKey: ["quiz", questionId],
    queryFn: async () => {
      const res = await fetchWithAuth(`/answer/question/${questionId}`);

      if (!res.ok) {
        throw new Error("Failed to fetch quizzes");
      }

      return res.json();
    },
  });
};
