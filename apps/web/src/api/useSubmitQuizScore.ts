import { useMutation } from "@tanstack/react-query";
import { useFetchWithAuth } from "./useFetchWithAuth";

interface UserQuizResult {
  score: number;
  quizId: string;
}

export const useSubmitQuizScore = () => {
  const fetchWithAuth = useFetchWithAuth();

  return useMutation({
    mutationFn: async (data: UserQuizResult) => {
      const res = await fetchWithAuth("/result", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error occurred");
      }

      return res.json();
    },
    onSuccess: (data) => {
      console.log("Quiz result submited successfully:", data);
    },
  });
};
