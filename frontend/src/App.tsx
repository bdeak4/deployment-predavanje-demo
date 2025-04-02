import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { routes } from "./constants/routes";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { QuizzesPage } from "./pages/QuizzesPage";
import { QuizPage } from "./pages/QuizPage";
import { PageNotFound } from "./pages/404Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.REGISTER} element={<RegisterPage />} />

        <Route element={<MainLayout />}>
          <Route path={routes.QUIZZES} element={<QuizzesPage />} />
          <Route path={routes.QUIZ} element={<QuizPage />} />
        </Route>

        <Route path={routes.PAGE_NOT_FOUND} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
