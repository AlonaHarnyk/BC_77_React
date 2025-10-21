import { Contact } from "@/libs/contact";
import Link from "next/link";

interface Props {
  contacts: Contact[];
}
export default function ContactsList({ contacts }: Props) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
        </li>
      ))}
    </ul>
  );
}
