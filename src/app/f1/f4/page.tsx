import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h3>F4 Page</h3>
      <Link href="/f1/f3">F3</Link>
      <br />
      <Link href="/about">About</Link>
    </div>
  );
}
