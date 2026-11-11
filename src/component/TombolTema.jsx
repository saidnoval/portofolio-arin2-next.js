"use client";

import { useState } from "react";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  function gantiTema() {
    const temaBaru = !gelap;

    document.documentElement.classList.toggle("dark", temaBaru);
    setGelap(temaBaru);
  }

  return (
    <button
      type="button"
      onClick={gantiTema}
      className="rounded-lg bg-aksen px-4 py-2 text-sm font-semibold text-white transition hover:opacity-80"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </button>
  );
}