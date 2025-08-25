import React from "react";

export default function DarkModeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      aria-label="Toggle dark mode"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}