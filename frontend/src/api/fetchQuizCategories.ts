import { useMutation } from "@tanstack/react-query";

export const fetchQuizCategories = (token: string) => {
  return useMutation({
    mutationFn: async () => {
      const res = await fetch("http://localhost:3000/api/category", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      return res.json();
    },
    onSuccess: (response) => {
      return response;
    },
    onError: (error) => {
      console.error("Failed to fetch quiz categories", error);
    },
  });
};
