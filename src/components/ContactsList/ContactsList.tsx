import type { Contact } from "../types/contact";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import css from "../ContactsList/ContactsList.module.css";
import { useState } from "react";

interface Props {
  contacts: Contact[];
}

const ContactsList = ({ contacts }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState("");

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
            </li>
          );
        })}
      </ul>
      {phoneNumber !== "" && <PhoneNumber phoneNumber={phoneNumber} />}
    </div>
  );
};

export default ContactsList;
