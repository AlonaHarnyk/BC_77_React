import axios from "axios";
import type { Contact } from "../components/types/contact";

export async function getContacts(page: number, search:string) {
  const res = await axios.get<Contact[]>(
    "https://6240d2109b450ae274385b44.mockapi.io/api/contacts",
    {
      params: {
        page,
        limit: 5,
        search,
      },
    }
  );
  return res.data;
}
