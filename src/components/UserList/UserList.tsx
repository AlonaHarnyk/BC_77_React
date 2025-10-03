import User from "../User/User";
import type { UserType } from '../types/user'

interface Props {
  users: UserType[];
  deleteUser: (id: string) => void;
  changeUserStatus: (id: string) => void;
}

const UserList = ({ users, deleteUser, changeUserStatus }: Props) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <User user={user} deleteUser={deleteUser} changeUserStatus={changeUserStatus} />
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
