import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "../context/useAuthContext";

type LoginData = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const { setAccessToken } = useAuthContext();

  return useMutation({
    mutationFn: async (data: LoginData) => {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });

      return res.json();
    },
    onSuccess: ({ access_token }) => {
      setAccessToken(access_token);
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });
};
