import { useState } from "react";
import ContactsList from "../ContactsList/ContactsList";
import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../../services/api";
import SearchForm from "../SearchForm/SearchForm";
const App = () => {
  const [isListVisible, setIsVisisble] = useState(true);
  const [curentPage, setCurentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["contacts", isListVisible, curentPage, searchQuery],
    queryFn: () => getContacts(curentPage, searchQuery),
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

  const handleFormSubmit = (search: string) => {
    setCurentPage(1);
    setSearchQuery(search);
  };

  return (
    <>
      <button onClick={toggleVisibility}>
        {isListVisible ? "Hide users" : "Show users"}
      </button>
      {isLoading && <p>Loading...</p>}
      {isListVisible && data && data.length > 0 && (
        <div>
          <SearchForm onSubmit={handleFormSubmit} />
          <ContactsList contacts={data} />
          {data.length >= 5 && (
            <button onClick={handleLoadMore}>Load more</button>
          )}
        </div>
      )}
    </>
  );
};

export default App;
