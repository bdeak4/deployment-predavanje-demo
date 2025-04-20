import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { routes } from "./constants/routes";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { QuizzesPage } from "./pages/QuizzesPage";
import { QuizPage } from "./pages/QuizPage";
import { PageNotFound } from "./pages/404Page";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components";
import { HomePage } from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LeaderboardPage from "./pages/LeaderboardPage/LeaderboardPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.REGISTER} element={<RegisterPage />} />

          <Route
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route path={routes.HOME} element={<HomePage />}></Route>
            <Route path={routes.QUIZZES} element={<QuizzesPage />} />
            <Route path={routes.QUIZ} element={<QuizPage />} />
            <Route path={routes.PROFILE} element={<ProfilePage />} />
            <Route path={routes.LEADERBOARD} element={<LeaderboardPage />} />
          </Route>

          <Route path={routes.PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
