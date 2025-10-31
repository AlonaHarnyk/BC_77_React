import { NextResponse } from "next/server";
import { authApi } from "../../api";
import { AuthApiError } from "../../types";
import { cookies } from "next/headers";

export async function POST() {
  try {
    // Передаємо поточні cookie до API
    const cookieStore = await cookies();
    await authApi.post(
      "auth/logout",
      {},
      {
        headers: {
          Cookie: cookieStore.toString(),
        },
      }
    );

    // Очищаємо токени після запиту
    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");

    return NextResponse.json({ message: "Logged out successfully" });
  } catch (error) {
    const resError = error as AuthApiError;
    return NextResponse.json({ message: resError.response?.data.message });
  }
}
