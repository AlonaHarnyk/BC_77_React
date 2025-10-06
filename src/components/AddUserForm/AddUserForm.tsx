import { useId } from "react";
import type { UserData } from "../types/user";
interface Props {
  addUser: (userData: UserData) => void;
}
export function AddUserForm({ addUser }: Props) {
  const id = useId();
  const onSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const isOnline = formData.get("isOnline") as string;

    const userData = { name, email, isOnline };
    addUser(userData)
  };

  return (
    <form action={onSubmit}>
      <label htmlFor={`${id}-name`}>Name:</label>
      <input type="text" id={`${id}-name`} name="name" required />
      <label htmlFor={`${id}-email`}>Email:</label>
      <input type="email" id={`${id}-email`} name="email" required />

      <fieldset>
        <legend>Is user online:</legend>
        <label>
          <input type="radio" name="isOnline" value="yes" />
          Yes
        </label>
        <label>
          <input type="radio" name="isOnline" value="no" />
          No
        </label>
      </fieldset>

      <button>Add</button>
    </form>
  );
}
