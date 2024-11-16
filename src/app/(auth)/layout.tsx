"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import  './style.css'
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <>
      <div>
        {navLinks.map((link, i) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={i}
              className={
                isActive ? "font-extrabold mr-4 text-green-500" : "text-blue-500"
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
