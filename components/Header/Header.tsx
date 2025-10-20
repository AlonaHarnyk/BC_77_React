import css from "./header.module.css";
import Link from "next/link";

export default function Header() {
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
            <Link className={css.link} href="/contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
