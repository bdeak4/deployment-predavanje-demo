import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export type UserType = {
  id: string;
  name: string;
  role: string;
  email: string;
  password: string;
};

export const useUserQuery = () => {
  return useQuery<UserType>({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`/user/profile`);
        return response as unknown as UserType;
      } catch (error) {
        throw error;
      }
    },
  });
};
