import { getContacts } from "@/libs/api";
import Link from "next/link";
import React from "react";

export default async function Filters() {
  const contacts = await getContacts();

  const filters = Array.from(
    new Set(contacts.map((contact) => contact.hasWork))
  );

  // console.log(contacts.map((contact) => contact.hasWork));
  return (
    <div>
      <ul>
        <li>
          <Link href="/contacts/search/all">All</Link>
        </li>
        {filters.map((el) => (
          <li key={String(el)}>
            <Link href={`/contacts/search/${el}`}>Has job: {String(el)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
