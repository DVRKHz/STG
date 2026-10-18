import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const getInitialTheme = () => {
  let storedTheme: string | null = null;
  try {
    storedTheme = window.localStorage.getItem("theme");
  } catch (error) {
    console.error("No se pudo leer la preferencia de tema.", error);
  }

  const isDark = storedTheme
    ? storedTheme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;

  document.documentElement.classList.toggle("dark", isDark);
  return isDark;
};

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    setIsDark(nextIsDark);

    try {
      window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch (error) {
      console.error("No se pudo guardar la preferencia de tema.", error);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2.5 rounded-xl text-neutral-700 hover:bg-neutral-100 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
      aria-label={`Cambiar a tema ${isDark ? "claro" : "oscuro"}`}
      aria-pressed={isDark}
      title={`Cambiar a tema ${isDark ? "claro" : "oscuro"}`}
    >
      {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  );
};
