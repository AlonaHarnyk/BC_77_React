"use client";

import { addContact, ContactData } from "@/libs/api";
import { useFormDataStore } from "@/store/formDataStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function CreateContactForm({}) {
  const { data, setData, clearData } = useFormDataStore();
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
    clearData();
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  return (
    <form action={handleSubmit}>
      <label>
        Name*:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          defaultValue={data.name}
        />
      </label>

      <label>
        Email*:
        <input
          type="email"
          name="email"
          onChange={handleChange}
          defaultValue={data.email}
        />
      </label>

      <label>
        Phone*:
        <input
          type="text"
          name="number"
          onChange={handleChange}
          defaultValue={data.number}
        />
      </label>

      <label>
        City:
        <input
          type="text"
          name="city"
          onChange={handleChange}
          defaultValue={data.city}
        />
      </label>

      <label>
        Job:
        <input
          type="text"
          name="job"
          onChange={handleChange}
          defaultValue={data.job}
        />
      </label>

      <label htmlFor="description">
        Description
        <textarea
          name="description"
          onChange={handleChange}
          defaultValue={data.description}
        ></textarea>
      </label>

      <button>Add</button>
    </form>
  );
}
