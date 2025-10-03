import { useState } from "react";
import { data } from "../../data/users.ts";
import UserList from "../UserList/UserList.tsx";

const App = () => {
  const [isListVisible, setIsListVisible] = useState(false)

  const toggleUsers = () => {
    setIsListVisible(!isListVisible)
  }


  return (
    <>
      <button onClick={toggleUsers}>{`${isListVisible ? 'Hide' : 'Show'} users`}</button>
      {isListVisible && <UserList users={data} />}
    </>
  );
};

export default App;
