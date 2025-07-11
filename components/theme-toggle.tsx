"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem("theme");
    const initial = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(initial);
    root.classList.toggle("dark", initial);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const nextTheme = isDark ? "light" : "dark";
    root.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-sm px-3 py-1 border rounded hover:bg-accent transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDark ? "light" : "dark"}
    </button>
  );
}
