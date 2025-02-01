import { useState, useEffect } from "react";

interface IAuthConfig {
  isAuth: boolean;
  idInstance: string | null;
  apiTokenInstance: string | null;
  apiUrl: string | null;
}

function useAuth() {
  const [authConfig, setAuthConfig] = useState<IAuthConfig>(() => {
    const idInstance = localStorage.getItem("idInstance");
    const apiTokenInstance = localStorage.getItem("apiTokenInstance");
    const isAuth = Boolean(idInstance && apiTokenInstance);
    const apiUrl = idInstance
      ? `https://${idInstance.slice(0, 4)}.api.greenapi.com`
      : null;
    return { isAuth, idInstance, apiTokenInstance, apiUrl };
  });

  useEffect(() => {
    const checkAuth = () => {
      const idInstance = localStorage.getItem("idInstance");
      const apiTokenInstance = localStorage.getItem("apiTokenInstance");
      const isAuth = Boolean(idInstance && apiTokenInstance);
      const apiUrl = idInstance
        ? `https://${idInstance.slice(0, 4)}.api.greenapi.com`
        : null;
      setAuthConfig({ isAuth, idInstance, apiTokenInstance, apiUrl });
    };

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return {authConfig, setAuthConfig};
}

export default useAuth;
