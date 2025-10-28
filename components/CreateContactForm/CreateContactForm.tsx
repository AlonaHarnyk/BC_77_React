"use client";

import { addContact, ContactData } from "@/libs/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function CreateContactForm({}) {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: addContact,
    onSuccess: () => {
      router.push("/contacts/search/all");
    },
  });

  function handleSubmit(formData: FormData) {
    const data = Object.fromEntries(formData) as unknown as ContactData;
    mutate(data);
  }

  return (
    <form action={handleSubmit}>
      <label>
        Name*:
        <input type="text" name="name" />
      </label>

      <label>
        Email*:
        <input type="email" name="email" />
      </label>

      <label>
        Phone*:
        <input type="text" name="number" />
      </label>

      <label>
        City:
        <input type="text" name="city" />
      </label>

      <label>
        Job:
        <input type="text" name="job" />
      </label>

      <label>
        Birth Date*:
        <input type="date" name="birthDay" />
      </label>

      <fieldset>
        <legend>Contact has a job?</legend>
        <label>
          <input type="radio" name="hasJob" value="yes" />
          Yes
        </label>
        <label>
          <input type="radio" name="hasJob" value="no" />
          No
        </label>
      </fieldset>

      <label>
        <select name="sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <fieldset>
        <legend>Hobbies</legend>
        <label>
          <input type="checkbox" name="hobbies" value="hiking" />
          Hiking
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="fishing" />
          Fishing
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="travel" />
          Travel
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="rest" />
          Active rest
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="sport" />
          Sport
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="learning" />
          Learn in GoIT
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="sing" />
          Singing
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="dance" />
          Dancing
        </label>
        <label>
          <input type="checkbox" name="hobbies" value="shopping" />
          Shopping
        </label>
      </fieldset>

      <label htmlFor="description">
        Description
        <textarea name="description"></textarea>
      </label>

      <button>Add</button>
    </form>
  );
}
