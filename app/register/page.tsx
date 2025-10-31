"use client";

import { registerUser } from "@/libs/api";
import { useAuthStore } from "@/libs/store/authStore";
import React from "react";

export default function RegisterPage() {
  const setUser = useAuthStore((state) => state.setUser);
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const userData = { email, password };
    const user = await registerUser(userData);
    if (user) {
      setUser(user);
    }
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input type="text" name="email" />
        <input type="text" name="password" placeholder="password" />
        <button> Register</button>
      </form>
    </div>
  );
}
