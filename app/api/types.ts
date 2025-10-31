import { AxiosError } from "axios";

export type ApiError = AxiosError<{ status: number }>;

export type AuthApiError = AxiosError<{ message: string }>;
