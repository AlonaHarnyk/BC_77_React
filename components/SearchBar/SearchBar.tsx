// "use client";

// import Link from "next/link";
// import { ChangeEvent, useState } from "react";

// export default function SearchBar() {
//   const [value, setValue] = useState("");

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={value} onChange={handleChange} />
//       <Link href={`/contacts/search/${value}`}>Search</Link>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    const search = formData.get("search" as string);
    router.push(`/contacts/search/${search}`);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="search" />
      <button>Search</button>
    </form>
  );
}
