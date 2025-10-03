import type { UserType } from "../types/user";
import styles from "./User.module.css";
import clsx from "clsx";

interface Props {
  user: UserType;
  deleteUser: (id: string) => void;
}

const User = ({ user: { name, email, isOnline, id }, deleteUser }: Props) => {
  const isOnlineStyles = clsx(
    styles.isOnline,
    isOnline === "yes" ? styles.online : styles.offline
  );

  return (
    <>
      <h3 className={styles.userName}>{name}</h3>
      <p>{email}</p>
      {/* {null}
          {undefined}
          {true}
          {false} */}
      {/* {isOnline && <p>Is online: {isOnline}</p>} */}
      {isOnline ? (
        <p className={isOnlineStyles}>Is online: {isOnline}</p>
      ) : (
        "No info"
      )}
      <button
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default User;
