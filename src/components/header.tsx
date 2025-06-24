"use client";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <h1 className="font-[var(--font-mono)] text-2xl mt-4 mb-2 text-center">
        ResumeCreator
      </h1>
      <nav className="bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-xl shadow-md px-6 py-3 mb-8 mx-auto max-w-2xl w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <ul className="flex gap-6 justify-center items-center text-base font-medium font-[var(--font-mono)]">
            <li>
              <Link
                href="/"
                className="transition-colors px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Home Page
              </Link>
            </li>
            <li>
              <Link
                href="/create"
                className="transition-colors px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Create Resume
              </Link>
            </li>
            <li>
              <Link
                href="/me"
                className="transition-colors px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
