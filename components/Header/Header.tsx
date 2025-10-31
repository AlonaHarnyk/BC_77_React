"use client";

import { logoutUser } from "@/libs/api";
import css from "./header.module.css";
import Link from "next/link";

export default function Header() {
  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <header>
      <nav>
        <ul className={css.list}>
          <li>
            <Link className={css.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css.link} href="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className={css.link} href="/contacts/search/all">
              Contacts
            </Link>
          </li>
          <li>
            <Link className={css.link} href="/register">
              Sign up
            </Link>
          </li>
          <li>
            <Link className={css.link} href="/login">
              Log in
            </Link>
          </li>
          <button onClick={handleLogout}>Logout</button>
        </ul>
      </nav>
    </header>
  );
}
