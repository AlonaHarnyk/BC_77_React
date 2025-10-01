import User from "../User/User";
import type { UserType } from '../types/user'

interface Props {
    users: UserType[]
}

const UserList = ({ users }: Props) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
                <User user={user} />
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
