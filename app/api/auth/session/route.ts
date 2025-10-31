import { NextResponse } from "next/server";
import { AuthApiError } from "../../types";
import { authApi } from "../../api";
import { cookies } from "next/headers";
import { parse } from "cookie";

export async function GET() {
  try {
    // const { data } = await authApi.get("/auth/session");
    // return NextResponse.json(data);
    const cookieStore = await cookies();

    // Дістаємо токени
    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;

    // Якщо accessToken є — сесія валідна
    if (accessToken) {
      return NextResponse.json({ success: true });
    }

    // Якщо accessToken немає — перевіряємо refreshToken
    if (refreshToken) {
      // Виконуємо запит до API, передаючи всі cookie у заголовку
      const apiRes = await authApi.get("auth/session", {
        headers: {
          Cookie: cookieStore.toString(), // перетворюємо cookie у рядок
        },
      });

      // Якщо бекенд повернув нові токени — встановлюємо їх
      const setCookie = apiRes.headers["set-cookie"];
      if (setCookie) {
        const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
        for (const cookieStr of cookieArray) {
          const parsed = parse(cookieStr);
          const options = {
            expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
            path: parsed.Path,
            maxAge: Number(parsed["Max-Age"]),
          };
          if (parsed.accessToken)
            cookieStore.set("accessToken", parsed.accessToken, options);
          if (parsed.refreshToken)
            cookieStore.set("refreshToken", parsed.refreshToken, options);
        }
        return NextResponse.json({ success: true });
      }
    }

    // Якщо немає refreshToken або API повернув пустий setCookie — сесія невалідна
    return NextResponse.json({ success: false });
  } catch (error) {
    const resError = error as AuthApiError;
    return NextResponse.json({ message: resError.response?.data.message });
  }
}
