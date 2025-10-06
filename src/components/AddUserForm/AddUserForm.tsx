import { useId } from "react";

export function AddUserForm() {
  const id = useId();
  return (
    <form action="">
      <label htmlFor={`${id}-name`}>Name:</label>
      <input type="text" id={`${id}-name`} name="name" />
      <label htmlFor={`${id}-email`}>Email:</label>
      <input type="text" id={`${id}-email`} name="email" />

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
