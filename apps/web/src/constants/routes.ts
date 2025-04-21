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
  RATING: "/rating",
  ADMIN_DASHBOARD: "/admin",
  ADMIN_LEADERBOARD: "/admin/leaderboard",
  ADMIN_CREATE_QUIZ: "/admin/create-quiz",
  PAGE_NOT_FOUND: "/*",
};
