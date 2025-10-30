import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "../../types";
import { api } from "../../api";

interface ParamsProp {
  params: Promise<{ contactId: string }>;
}

export async function GET(request: NextRequest, { params }: ParamsProp) {
  try {
    const { contactId } = await params;
    const { data } = await api.get(`/contacts/${contactId}`);

    return NextResponse.json(data);
  } catch (error) {
    const resError = error as ApiError;
    return NextResponse.json({ status: resError.response?.data.status });
  }
}
