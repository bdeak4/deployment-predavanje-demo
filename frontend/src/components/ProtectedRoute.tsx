import { Navigate } from "react-router";
import { useAuthContext } from "../context/useAuthContext";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useAuthContext();

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
