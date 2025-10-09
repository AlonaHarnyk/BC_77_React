import { useState } from "react";
import ContactsList from "../ContactsList/ContactsList";
import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../../services/api";
const App = () => {
  const [isListVisible, setIsVisisble] = useState(true);
  const [curentPage, setCurentPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["contacts", isListVisible, curentPage],
    queryFn: () => getContacts(curentPage),
    enabled: isListVisible === true,
  });

  const handleLoadMore = () => {
    setCurentPage(curentPage + 1);
  };

  const toggleVisibility = () => {
    if (isListVisible === false) {
      setCurentPage(1);
    }
    setIsVisisble(!isListVisible);
  };

  return (
    <>
      <button onClick={toggleVisibility}>
        {isListVisible ? "Hide users" : "Show users"}
      </button>
      {isLoading && <p>Loading...</p>}
      {isListVisible && data && data.length > 0 && (
        <div>
          <ContactsList contacts={data} />
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      )}
    </>
  );
};

export default App;
