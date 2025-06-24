"use client";
import { Menu } from "./Menu";

export const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <h1 className="font-[var(--font-mono)] text-2xl mt-4 mb-2 text-center">
        ResumeCreator
      </h1>
      <nav className="bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-xl shadow-md px-6 py-3 mb-8 mx-auto max-w-2xl w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Menu />
        </div>
      </nav>
    </header>
  );
};
