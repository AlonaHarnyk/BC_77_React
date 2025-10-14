import axios from "axios";
import type { Contact, HobbiesValues } from "../components/types/contact";
export interface ContactData {
  birthDay: Date;
  city: string;
  name: string;
  email: string;
  hasJob: boolean;
  number: string;
  job: string;
  hobbies: HobbiesValues[];
  description: string;
  sex: "male" | "female";
}

export async function getContacts(page: number, search: string) {
  const res = await axios.get<Contact[]>(
    "https://6240d2109b450ae274385b44.mockapi.io/api/contacts",
    {
      params: {
        page,
        limit: 10,
        search,
      },
    }
  );
  return res.data;
}

export async function addContact(contactData: ContactData): Promise<Contact> {
  const res = await axios.post<Contact>(
    "https://6240d2109b450ae274385b44.mockapi.io/api/contacts",
    contactData
  );
  return res.data;
}

export async function deleteContact(id: string): Promise<void> {
  await axios.delete<Contact>(
    `https://6240d2109b450ae274385b44.mockapi.io/api/contacts/${id}`
  );
}
