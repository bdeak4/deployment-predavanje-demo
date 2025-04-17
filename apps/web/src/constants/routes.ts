type Routes = {
  [key: string]: string;
};

export const routes: Routes = {
  LOGIN: "/login",
  REGISTER: "/register",
  HOME: "/",
  QUIZZES: "/quiz",
  QUIZ: "/quiz/:id",
  PAGE_NOT_FOUND: "/*",
};
