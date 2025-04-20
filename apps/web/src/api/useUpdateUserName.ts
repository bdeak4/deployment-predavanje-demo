import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./base";

type UpdateNameType = {
  name: string;
};

export const useUpdateUserName = () => {
  return useMutation({
    mutationFn: async (data: UpdateNameType) => {
      try {
        return await axiosInstance.patch("/user/name", data);
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log("User name updated successfully:", data);
    },
  });
};
