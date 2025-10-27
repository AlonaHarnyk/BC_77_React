import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>Welcome to our contacts application!</div>
      <Image src="/phone_book.jpg" alt="Phone boof" width={300} height={300} />
    </div>
  );
}
