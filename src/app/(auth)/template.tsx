"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
import { useState } from "react";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
// change layout to template if you want to reset page or clear input  
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="write your name"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        {navLinks.map((link, i) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={i}
              className={
                isActive
                  ? "font-extrabold mr-4 text-green-500"
                  : "text-blue-500"
              }
            >
              {link.name}{" "}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
}
