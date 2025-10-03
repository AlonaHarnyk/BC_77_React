import { useState } from "react";
import { data } from "../../data/users.ts";
import UserList from "../UserList/UserList.tsx";
import type { UserType } from "../types/user.ts";

const App = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [users, setUsers] = useState<UserType[]>(data);

  const toggleUsers = () => {
    setIsListVisible(!isListVisible);
  };
  const deleteUser = (id: string) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };

  const changeUserStatus = (id: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === id) {
          return { ...user, isOnline: user.isOnline === "yes" ? "no" : "yes" };
        }
        return user;
      })
    );
  };

  return (
    <>
      <button onClick={toggleUsers}>{`${
        isListVisible ? "Hide" : "Show"
      } users`}</button>
      {isListVisible && (
        <UserList
          users={users}
          deleteUser={deleteUser}
          changeUserStatus={changeUserStatus}
        />
      )}
    </>
  );
};

export default App;
