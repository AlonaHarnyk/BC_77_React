import React from "react";
import type { DebouncedState } from "use-debounce";

interface Props {
  onSearch: DebouncedState<(search: string) => void>;
  searchQuery: string;
}

export default function SearchForm({ onSearch, searchQuery }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <label>
        Search query:
        <input type="text" name="search" onChange={handleChange} defaultValue={searchQuery} />
      </label>
    </div>
  );
}
