"use client";

import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <Link href={`/contacts/search/${value}`}>Search</Link>
    </div>
  );
}
