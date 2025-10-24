// import Link from "next/link";

import { redirect } from "next/navigation";

export default function NotFoundPage() {
  redirect("/");
  // return (
  //   <div>
  //     {/* <h1>404 Not Found Page</h1>
  //     <Link href="/">Back to Home</Link> */}
  //   </div>
  // );
}
