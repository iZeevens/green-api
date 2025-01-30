import { useState, useEffect } from "react"

function useAuth() {
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    return Boolean(localStorage.getItem("idInstance") && localStorage.getItem("apiTokenInstance"));
  });

  useEffect(() => {
    const checkAuth = () => {
      setIsAuth(Boolean(localStorage.getItem("idInstance") && localStorage.getItem("apiTokenInstance")));
    };

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return isAuth;
}

export default useAuth