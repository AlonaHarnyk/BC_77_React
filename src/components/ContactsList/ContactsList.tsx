import type { Contact } from "../types/contact";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import css from "../ContactsList/ContactsList.module.css";
import { useState } from "react";
import { deleteContact } from "../../services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  contacts: Contact[];
}

const ContactsList = ({ contacts }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
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

  return (
    <div className={css.listWrapper}>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>Name: {name}</p>
              <button onClick={() => setPhoneNumber(number)}>
                Get phone number
              </button>
              <button onClick={() => handleDeleteContact(id)}>
                Delete Contact
              </button>
            </li>
          );
        })}
      </ul>
      {phoneNumber !== "" && <PhoneNumber phoneNumber={phoneNumber} />}
    </div>
  );
};

export default ContactsList;
