import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div>Profile page</div>
      <Link href="/profile/edit">Go to edit</Link>
    </>
  );
}
