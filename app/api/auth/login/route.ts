import { NextRequest, NextResponse } from "next/server";
import { authApi } from "../../api";
import { AuthApiError } from "../../types";
import { cookies } from "next/headers";
import { parse } from "cookie";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const res = await authApi.post("/auth/login", body);

    const cookieStore = await cookies();
    // Дістаємо set-cookie з хедерів відповіді
    const setCookie = res.headers["set-cookie"];
    if (setCookie) {
      // Якщо set-cookie — масив, беремо як є, інакше примусово робимо масив
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
      // Проходимо по кожному cookie
      for (const cookieStr of cookieArray) {
        const parsed = parse(cookieStr);
        // Створюємо опції для cookie
        const options = {
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
          path: parsed.Path,
          maxAge: Number(parsed["Max-Age"]),
        };
        // Встановлюємо токени
        if (parsed.accessToken) {
          cookieStore.set("accessToken", parsed.accessToken, options);
        }
        if (parsed.refreshToken) {
          cookieStore.set("refreshToken", parsed.refreshToken, options);
        }
      }
      return NextResponse.json(res.data);
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  } catch (error) {
    const resError = error as AuthApiError;
    return NextResponse.json({ message: resError.response?.data.message });
  }
}
