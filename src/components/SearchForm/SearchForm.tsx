import React from "react";

interface Props {
  onSubmit: (search: string) => void;
}

export default function SearchForm({ onSubmit }: Props) {
  const handleOnSubmit = (formData: FormData) => {
    const result = formData.get("search") as string;
    onSubmit(result);
  };

  return (
    <div>
      <form action={handleOnSubmit}>
        <label>
          Search query:
          <input type="text" name="search" />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
}
