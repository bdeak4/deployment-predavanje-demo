import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export type UserRatingType = {
  rating: number;
};

export const useUserRankingQuery = (userId: string) => {
  return useQuery<UserRatingType>({
    queryKey: ["userRanking", userId],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(
          `/result/leaderboard/${userId}`
        );
        return response as unknown as UserRatingType;
      } catch (error) {
        throw error;
      }
    },
  });
};
