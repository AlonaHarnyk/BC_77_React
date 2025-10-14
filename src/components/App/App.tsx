import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedCallback } from "use-debounce";

import ContactsList from "../ContactsList/ContactsList";
import { getContacts } from "../../services/api";
import SearchForm from "../SearchForm/SearchForm";
import { AddContactForm } from "../AddContactForm/AddContactForm";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};

const App = () => {
  const [isListVisible, setIsVisisble] = useState(true);
  const [isFormVisible, setIsFormVisisble] = useState(false);
  const [curentPage, setCurentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const { isOpen, open, close } = useToggle();

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

  // const handleSearch = (search: string) => {
  //   // setCurentPage(1);
  //   setSearchQuery(search);
  // };

  // const handleSearch = useDebouncedCallback(setSearchQuery, 500)

  const handleSearch = useDebouncedCallback((search: string) => {
    setCurentPage(1);
    setSearchQuery(search);
  }, 500);

  const handleFormVisibility = () => {
    setIsFormVisisble(true);
  };

  const handleCloseForm = () => {
    setIsFormVisisble(false);
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
          {isFormVisible && (
            <button onClick={handleCloseForm}> Close Form</button>
          )}
          {isFormVisible && <AddContactForm />}

          <SearchForm onSearch={handleSearch} searchQuery={searchQuery} />
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
