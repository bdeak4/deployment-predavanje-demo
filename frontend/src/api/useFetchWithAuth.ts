import { useAuthContext } from "../context";
import { useNavigate } from "react-router-dom";

export const useFetchWithAuth = () => {
  const { accessToken, setAccessToken } = useAuthContext();
  const navigate = useNavigate();

  const fetchWithAuth = async (
    url: string,
    options?: RequestInit
  ): Promise<Response> => {
    const res = await fetch(`http://localhost:3000/api${url}`, {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (res.status === 401) {
      localStorage.removeItem("accessToken");
      setAccessToken("");
      navigate("/login");

      throw new Error("Unauthorized");
    }

    return res;
  };

  return fetchWithAuth;
};
