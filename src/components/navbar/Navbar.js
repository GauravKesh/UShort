"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          URL Shortener
        </Link>
        <div className="space-x-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
