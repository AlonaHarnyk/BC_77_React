import { useState } from "react";
import ContactsList from "../ContactsList/ContactsList";
import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../../services/api";
import SearchForm from "../SearchForm/SearchForm";
import { AddContactForm } from "../AddContactForm/AddContactForm";
const App = () => {
  const [isListVisible, setIsVisisble] = useState(true);
  const [isFormVisible, setIsFormVisisble] = useState(false);
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

  const handleFormVisibility = () => {
    setIsFormVisisble(true);
  };

  return (
    <>
      <button onClick={toggleVisibility}>
        {isListVisible ? "Hide users" : "Show users"}
      </button>

      {isLoading && <p>Loading...</p>}
      {isListVisible && data && data.length > 0 && (
        <div>
          <button onClick={handleFormVisibility}> Add contact</button>
          {isFormVisible && <AddContactForm />}

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
