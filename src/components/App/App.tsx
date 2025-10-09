import { useState } from "react";
import ContactsList from "../ContactsList/ContactsList";
import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../../services/api";
const App = () => {
  const [isListVisible, setIsVisisble] = useState(true);

  const { data, isLoading } = useQuery({
    queryKey: ["contacts", isListVisible],
    queryFn: getContacts,
    enabled: isListVisible === true,
  });

  const toggleVisibility = () => {
    setIsVisisble(!isListVisible);
  };

  return (
    <>
      <button onClick={toggleVisibility}>
        {isListVisible ? "Hide users" : "Show users"}
      </button>
      {isLoading && <p>Loading...</p>}
      {isListVisible && data && data.length > 0 && (
        <ContactsList contacts={data} />
      )}
    </>
  );
};

export default App;
