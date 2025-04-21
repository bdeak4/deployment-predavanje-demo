import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./base";

export type UserStatsType = {
  id: string;
  name: string;
  totalScore: number;
  quizCount: number;
};

export const useLeaderboardQuery = () => {
  return useQuery<UserStatsType[]>({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`/result/leaderboard`);
        return response as unknown as UserStatsType[];
      } catch (error) {
        throw error;
      }
    },
  });
};
