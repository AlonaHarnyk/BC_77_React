
import type { Contact } from "../types/contact";

interface Props {
  contacts: Contact[];
}

const ContactsList = ({ contacts }: Props) => {
  return (
    <ul>
      {contacts.map(({id, name, number}) => {
        return (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Phone: {number}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
