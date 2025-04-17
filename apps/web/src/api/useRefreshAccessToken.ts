import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../context/useAuthContext";

export const useRefreshAccessToken = () => {
  const { setAccessToken } = useAuthContext();

  return useMutation({
    mutationFn: async () => {
      const res = await fetch("http://localhost:3000/api/auth/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      return res.json();
    },
    onSuccess: ({ access_token }) => {
      setAccessToken(access_token);
    },
    onError: (error) => {
      console.error("Failed to refresh access token", error);
    },
  });
};
