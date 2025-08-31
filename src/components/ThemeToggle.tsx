

"use client";
import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    // On mount, set theme from localStorage or system preference
    const theme = localStorage.getItem("theme");
    if (theme) {
      setEnabled(theme === "dark");
      document.documentElement.classList.toggle("dark", theme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setEnabled(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", enabled);
    localStorage.setItem("theme", enabled ? "dark" : "light");
  }, [enabled]);

  return (
    <div className="fixed top-4 right-6 z-50">
      <button
        onClick={() => setEnabled(!enabled)}
        className={`p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          enabled 
            ? "bg-gray-800 text-yellow-400 hover:bg-gray-700 focus:ring-yellow-400" 
            : "bg-white text-gray-800 hover:bg-gray-50 focus:ring-blue-500 shadow-md"
        }`}
        aria-label="Toggle theme"
      >
        {enabled ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
