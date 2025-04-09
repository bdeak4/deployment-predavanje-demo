import { useQuery } from "@tanstack/react-query";
import { useFetchWithAuth } from "./useFetchWithAuth";

export const useQuizzesQuery = (title: string, categoryId: string) => {
  const fetchWithAuth = useFetchWithAuth();

  return useQuery({
    queryKey: ["quizzes", title, categoryId],
    queryFn: async () => {
      const res = await fetchWithAuth(
        `/quiz?title=${title}&categoryId=${categoryId}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch quizzes");
      }

      return res.json();
    },
  });
};
