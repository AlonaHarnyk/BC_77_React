import axios from "axios";
import { Contact, HobbiesValues } from "./contact";

export interface ContactData {
  birthDay: Date;
  city: string;
  name: string;
  email: string;
  hasWork: boolean;
  number: string;
  job: string;
  hobbies: HobbiesValues[];
  description: string;
  sex: "male" | "female";
}

const nextServer = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export async function getContacts(hasWork?: string, search?: string) {
  const res = await nextServer.get<Contact[]>("/contacts", {
    params: {
      hasWork,
      search,
    },
  });

  return res.data;
}

export async function getContactById(id: string) {
  const res = await nextServer.get<Contact>(`/contacts/${id}`);
  return res.data;
}

export async function addContact(contactData: ContactData): Promise<Contact> {
  const res = await nextServer.post<Contact>("/contacts", contactData);
  return res.data;
}

interface UserData {
  email: string;
  password: string;
}

export interface User {
  username: string;
  email: string;
  avatar: string;
}

interface SessionResponse {
  success: boolean;
}

export async function registerUser(userData: UserData): Promise<User> {
  const res = await nextServer.post<User>("/auth/register", userData);
  return res.data;
}

export async function loginUser(userData: UserData): Promise<User> {
  const res = await nextServer.post<User>("/auth/login", userData);
  return res.data;
}

export async function logoutUser(): Promise<void> {
  await nextServer.post("/auth/logout");
}

export async function checkSession(): Promise<SessionResponse> {
  const res = await nextServer.get("/auth/session");
  if (res.status === 200) {
    return { success: true };
  }
  return { success: false };
}

export async function getUser(): Promise<User> {
  const res = await nextServer.get("/users/me");
  return res.data;
}

// export async function deleteContact(id: string): Promise<void> {
//   await axios.delete<Contact>(
//     `https://6240d2109b450ae274385b44.mockapi.io/api/contacts/${id}`
//   );
// }
