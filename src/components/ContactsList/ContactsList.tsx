import type { Contact } from "../types/contact";

import css from "../ContactsList/ContactsList.module.css";

import { deleteContact } from "../../services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  contacts: Contact[];
  onModalOpen: (contact: Contact) => void;
}

const ContactsList = ({ contacts, onModalOpen }: Props) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: string) => deleteContact(id),

    onSuccess: () => {
      console.log("Contact deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });

  const handleDeleteContact = (id: string) => {
    mutate(id);
  };

  const handleGetDatails = (contact: Contact) => {
    onModalOpen(contact);
  };

  return (
    <div className={css.listWrapper}>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <p>Name: {contact.name}</p>
              <button onClick={() => handleGetDatails(contact)}>
                Get details
              </button>

              <button onClick={() => handleDeleteContact(contact.id)}>
                Delete Contact
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsList;
