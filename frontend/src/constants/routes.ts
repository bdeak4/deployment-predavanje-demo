type Routes = {
  [key: string]: string;
};

export const routes: Routes = {
  LOGIN: "/login",
  REGISTER: "/register",
  QUIZZES: "/",
  QUIZ: "/:id",
  PAGE_NOT_FOUND: "/*",
};
