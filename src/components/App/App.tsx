import axios from "axios";
import { useEffect, useState } from "react";
import type { Contact } from "../types/contact";
import ContactsList from "../ContactsList/ContactsList";

const App = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isListVisible, setIsVisisble] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isListVisible) {
      setContacts([]);
    } else {
      setIsLoading(true)
      axios("https://6240d2109b450ae274385b44.mockapi.io/api/contacts").then(
        ({ data }) => setContacts(data)
      ).finally(() => setIsLoading(false));
    }
    // return () => console.log(123)
  }, [isListVisible]);

  const toggleVisibility = () => {
    setIsVisisble(!isListVisible);
  };

  return (
    <>
      <button onClick={toggleVisibility}>
        {isListVisible ? "Hide users" : "Show users"}
      </button>
      {isLoading && <p>Loading...</p>}
      {contacts.length > 0 && <ContactsList contacts={contacts} />}
    </>
  );
};

export default App;
