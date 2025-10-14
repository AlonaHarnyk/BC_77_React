import React from "react";

interface Props {
  onSearch: (search: string) => void;
}

export default function SearchForm({ onSearch }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <label>
        Search query:
        <input type="text" name="search" onChange={handleChange} />
      </label>
    </div>
  );
}
