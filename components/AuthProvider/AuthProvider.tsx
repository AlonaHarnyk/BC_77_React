"use client";

import { checkSession, getUser } from "@/libs/api";
import { useAuthStore } from "@/libs/store/authStore";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  useEffect(() => {
    const fetchUser = async () => {
      // Перевіряємо сесію
      const isAuthenticated = await checkSession();
      console.log("Check session: ", isAuthenticated);
      if (isAuthenticated.success) {
        // Якщо сесія валідна — отримуємо користувача
        const user = await getUser();
        console.log(user);
        if (user) setUser(user);
      } else {
        // Якщо сесія невалідна — чистимо стан
        clearIsAuthenticated();
      }
    };
    fetchUser();
  }, [setUser, clearIsAuthenticated]);

  return children;
};

export default AuthProvider;
