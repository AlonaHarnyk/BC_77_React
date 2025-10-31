import { NextRequest, NextResponse } from "next/server";
import { authApi } from "../../api";
import { AuthApiError } from "../../types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data } = await authApi.post("/auth/register", body);
    return NextResponse.json(data);
  } catch (error) {
    const resError = error as AuthApiError;
    return NextResponse.json({ message: resError.response?.data.message });
  }
}
