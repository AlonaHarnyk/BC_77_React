import axios from "axios";
import { Contact, HobbiesValues } from "./contact";

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

export async function getContacts() {
  const res = await axios.get<Contact[]>(
    "https://6240d2109b450ae274385b44.mockapi.io/api/contacts",
   
  );
  return res.data;
}

// export async function addContact(contactData: ContactData): Promise<Contact> {
//   const res = await axios.post<Contact>(
//     "https://6240d2109b450ae274385b44.mockapi.io/api/contacts",
//     contactData
//   );
//   return res.data;
// }

// export async function deleteContact(id: string): Promise<void> {
//   await axios.delete<Contact>(
//     `https://6240d2109b450ae274385b44.mockapi.io/api/contacts/${id}`
//   );
// }