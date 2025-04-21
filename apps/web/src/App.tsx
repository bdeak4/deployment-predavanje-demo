import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { routes } from "./constants/routes";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { QuizzesPage } from "./pages/QuizzesPage";
import { QuizPage } from "./pages/QuizPage";
import { PageNotFound } from "./pages/404Page";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedAdminRoute, ProtectedRoute } from "./components";
import { HomePage } from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AdminDashboardPage from "./pages/AdminDashboardPage/AdminDashboardPage";
import AdminCreateQuizPage from "./pages/AdminCreateQuizPage/AdminCreateQuizPage";
import RatingPage from "./pages/RatingPage/RatingPage";
import AdminLeaderboardPage from "./pages/AdminLeaderboardPage/AdminLeaderboardPage";

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
            <Route path={routes.RATING} element={<RatingPage />} />

            <Route
              path={routes.ADMIN_DASHBOARD}
              element={
                <ProtectedAdminRoute>
                  <AdminDashboardPage />
                </ProtectedAdminRoute>
              }
            />
            <Route
              path={routes.ADMIN_LEADERBOARD}
              element={
                <ProtectedAdminRoute>
                  <AdminLeaderboardPage />
                </ProtectedAdminRoute>
              }
            />
            <Route
              path={routes.ADMIN_CREATE_QUIZ}
              element={
                <ProtectedAdminRoute>
                  <AdminCreateQuizPage />
                </ProtectedAdminRoute>
              }
            />
          </Route>

          <Route path={routes.PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
