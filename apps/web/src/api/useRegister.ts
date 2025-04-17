import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

interface User {
  name: string;
  email: string;
  password: string;
}

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: User) => {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      console.log("User registered successfully:", data);
      navigate("/login");
    },
  });
};
