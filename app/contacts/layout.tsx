import { Metadata } from "next";
import css from "./Contacts.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacts page",
  description: "Contacts page",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={css.container}>
      <Link href="/contacts/actions/create">Create contact</Link>
      <hr />
      {children}
    </div>
  );
}
