import axios from "axios";
import type { Contact }  from '../components/types/contact';

export  async function getContacts() {
    const res = await axios.get<Contact[]>("https://6240d2109b450ae274385b44.mockapi.io/api/contacts")
    return res.data
}