import { data } from "../../data/users.ts";
import User from "../User/User.tsx";
import UserList from "../UserList/UserList.tsx";

const App = () => {
  return (
    <>
      <h2>User</h2>
      <UserList users={data} />
      <User user={data[0]} />
      <User user={data[1]} />
      <User user={data[2]} />
    </>
  );
};

export default App;
