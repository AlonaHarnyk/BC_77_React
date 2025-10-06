import { useState } from "react";
import { data } from "../../data/users.ts";
import UserList from "../UserList/UserList.tsx";
import type { UserData, UserType } from "../types/user.ts";
import { AddUserForm } from "../AddUserForm/AddUserForm.tsx";



const App = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [users, setUsers] = useState<UserType[]>(data);
  const [isAddUserFormVisible, setIsAddUserFormVisible] = useState(false);

  const toggleAddUserForm = () => {
    setIsAddUserFormVisible(!isAddUserFormVisible);
  };

  const toggleUsers = () => {
    setIsListVisible(!isListVisible);
  };
  const deleteUser = (id: string) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };

  const addUser = (userData: UserData) => {
    console.log(userData)
  }

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
        <>
          <UserList
            users={users}
            deleteUser={deleteUser}
            changeUserStatus={changeUserStatus}
          />
          {isAddUserFormVisible ? (
            <AddUserForm
            addUser={addUser}/>
          ) : (
            <button onClick={toggleAddUserForm} type="button">
              Add user
            </button>
          )}
        </>
      )}
    </>
  );
};

export default App;
