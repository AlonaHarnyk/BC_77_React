import { NextRequest, NextResponse } from "next/server";
import { api } from "../api";
import { ApiError } from "../types";

export async function GET(request: NextRequest) {
  const hasWork = request.nextUrl.searchParams.get("hasWork");
  const search = request.nextUrl.searchParams.get("search");

  try {
    const { data } = await api.get("/contacts", {
      params: { hasWork, search },
    });

    return NextResponse.json(data);
  } catch (error) {
    const resError = error as ApiError;
    return NextResponse.json({ status: resError.response?.data.status });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data } = await api.post("/contacts", body);
    return NextResponse.json(data);
  } catch (error) {
    const resError = error as ApiError;
    return NextResponse.json({ status: resError.response?.data.status });
  }
}

// export async function GET(request: NextRequest) {
//   const categoryId = request.nextUrl.searchParams.get("categoryId");
//   try {
//     const { data } = await api("/notes", {
//       params: { categoryId },
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json(
//       {
//         error:
//           (error as ApiError).response?.data?.error ??
//           (error as ApiError).message,
//       },
//       { status: (error as ApiError).status }
//     );
//   }
// }
