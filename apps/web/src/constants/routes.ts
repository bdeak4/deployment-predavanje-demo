type Routes = {
  [key: string]: string;
};

export const routes: Routes = {
  LOGIN: "/login",
  REGISTER: "/register",
  HOME: "/",
  QUIZZES: "/quiz",
  QUIZ: "/quiz/:id",
  PROFILE: "/profile",
  LEADERBOARD: "/leaderboard",
  PAGE_NOT_FOUND: "/*",
};
