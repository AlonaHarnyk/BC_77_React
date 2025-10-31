import { NextResponse } from "next/server";
import { AuthApiError } from "../../types";
import { cookies } from "next/headers";
import { authApi } from "../../api";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const { data } = await authApi.get("/users/me", {
      headers: { Cookie: cookieStore.toString() },
    });
    return NextResponse.json(data);
  } catch (error) {
    const resError = error as AuthApiError;
    return NextResponse.json({ message: resError.response?.data.message });
  }
}
