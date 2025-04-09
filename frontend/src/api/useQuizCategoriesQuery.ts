import { useQuery } from "@tanstack/react-query";
import { useFetchWithAuth } from "./useFetchWithAuth";

export const useQuizCategoriesQuery = () => {
  const fetchWithAuth = useFetchWithAuth();

  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetchWithAuth("/category");

      if (!res.ok) {
        throw new Error("Failed to fetch quiz categories");
      }

      return res.json();
    },
  });
};
