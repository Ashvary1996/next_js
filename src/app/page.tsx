import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <nav>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </nav>
    </div>
  );
}
