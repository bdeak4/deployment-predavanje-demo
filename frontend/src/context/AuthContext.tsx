import { createContext, useEffect, useState } from "react";

type AuthContextType = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
};

const isTokenExpired = (token: string) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 < Date.now();
  } catch (error) {
    return true;
  }
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem("access_token");
    return storedToken && !isTokenExpired(storedToken) ? storedToken : null;
  });

  useEffect(() => {
    if (accessToken) {
      if (isTokenExpired(accessToken)) {
        setAccessToken(null);
      } else {
        localStorage.setItem("access_token", accessToken);
      }
    } else {
      localStorage.removeItem("access_token");
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
