import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./base";

type UpdatePasswordType = {
  password: string;
  currentPassword: string;
};

export const useUpdateUserPassword = () => {
  return useMutation({
    mutationFn: async (data: UpdatePasswordType) => {
      try {
        return await axiosInstance.patch("/user/password", data);
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log("User password updated successfully:", data);
    },
  });
};
