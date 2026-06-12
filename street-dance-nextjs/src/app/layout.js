"use client";

import "./globals.css";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const metadata = {
  title: "Street Dance",
  description: "Street Dance Website",
};

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            <Link href="/" className="text-yellow-400 text-2xl font-bold">
              Street Dance
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 items-center">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/events">Events</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/login">Login</Link>

              <Link
                href="/register"
                className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold"
              >
                Register
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden bg-gray-800 flex flex-col px-6 py-4 space-y-4">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/events">Events</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/login">Login</Link>

              <Link
                href="/register"
                className="bg-yellow-400 text-center text-black py-2 rounded-full font-bold"
              >
                Register
              </Link>
            </div>
          )}
        </nav>

        {children}
      </body>
    </html>
  );
}