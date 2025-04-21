import { jwtDecode } from "jwt-decode";
import { useAuthContext } from "../context";
import { Navigate } from "react-router";

const isAdmin = (token: string) => {
  const decoded: any = jwtDecode(token);
  return decoded.role === "ADMIN";
};

export const ProtectedAdminRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { accessToken } = useAuthContext();

  if (accessToken && !isAdmin(accessToken)) {
    return <Navigate to="/404" replace={true} />;
  }

  return <>{children}</>;
};
