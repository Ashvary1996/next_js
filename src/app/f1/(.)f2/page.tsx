import Link from "next/link";
import React from "react";

export default function F2() {
  return (
    <div>
      <h2>(.) Intercepted F2 page</h2>
      <br />
      <Link href="/f1">F2</Link>
    </div>
  );
}
