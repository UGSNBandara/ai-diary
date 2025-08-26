

"use client";
import React from "react";
import { Switch } from "@headlessui/react";
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
    <div className="fixed top-4 right-4 z-50">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`relative inline-flex h-10 w-20 items-center rounded-full bg-gray-200 dark:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500 shadow`}
        aria-label="Toggle light/dark theme"
      >
        <span className="sr-only">Toggle Theme</span>
        <span className="absolute left-2">
          <SunIcon className={`h-6 w-6 text-yellow-500 ${enabled ? "opacity-40" : "opacity-100"}`} />
        </span>
        <span className="absolute right-2">
          <MoonIcon className={`h-6 w-6 text-blue-500 ${enabled ? "opacity-100" : "opacity-40"}`} />
        </span>
        <span
          className={`inline-block h-8 w-8 transform rounded-full bg-white dark:bg-gray-900 shadow transition-transform ${enabled ? "translate-x-10" : "translate-x-0"}`}
        />
      </Switch>
    </div>
  );
}
