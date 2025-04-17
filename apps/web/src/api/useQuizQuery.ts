import { useQuery } from "@tanstack/react-query";
import { useFetchWithAuth } from "./useFetchWithAuth";

export const useQuizQuery = (quizId: string) => {
  const fetchWithAuth = useFetchWithAuth();

  return useQuery({
    queryKey: ["quiz", quizId],
    queryFn: async () => {
      const res = await fetchWithAuth(`/quiz/${quizId}`);

      if (!res.ok) {
        throw new Error("Failed to fetch quizzes");
      }

      return res.json();
    },
  });
};
