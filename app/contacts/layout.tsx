import { Metadata } from "next";
import css from "./Contacts.module.css";

export const metadata: Metadata = {
  title: "Contacts page",
  description: "Contacts page",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={css.container}>{children}</div>;
}
