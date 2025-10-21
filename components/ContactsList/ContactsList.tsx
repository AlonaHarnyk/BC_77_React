import { Contact } from "@/libs/contact";

interface Props {
  contacts: Contact[];
}
export default function ContactsList({ contacts }: Props) {
  return (
    <ul>
      {contacts.map((contact) => (
          <li key={contact.id}>{contact.name }</li>
      ))}
    </ul>
  );
}
