import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export function Menu() {
  return (
    <ul className="flex gap-6 justify-center items-center text-base font-medium font-[var(--font-mono)]">
      <li>
        <Link
          href={ROUTES.HOME}
          className="transition-colors px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Home Page
        </Link>
      </li>
      <li>
        <Link
          href={ROUTES.CREATE}
          className="transition-colors px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Create Resume
        </Link>
      </li>
      <li>
        <Link
          href={ROUTES.ME}
          className="transition-colors px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Me
        </Link>
      </li>
    </ul>
  );
}
