import { createContext, ReactNode, useState } from "react";
import useAuthInfo from "../hooks/useAuthInfo";

interface AuthContextType {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { authConfig } = useAuthInfo();
  const [isAuth, setIsAuth] = useState<boolean>(authConfig.isAuth);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
