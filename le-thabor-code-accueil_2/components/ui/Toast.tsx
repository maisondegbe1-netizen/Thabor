"use client";

import { useEffect, useState } from "react";

// Toast minimaliste piloté par un évènement custom `thabor:toast`.
// Utilisé par AddToCartButton pour confirmer chaque ajout sans avoir
// à faire remonter un state jusqu'à la racine de l'app.
export default function Toast() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    function onToast(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      setMessage(detail);
      const timer = setTimeout(() => setMessage(null), 2200);
      return () => clearTimeout(timer);
    }
    window.addEventListener("thabor:toast", onToast);
    return () => window.removeEventListener("thabor:toast", onToast);
  }, []);

  return (
    <div
      className={`glass fixed bottom-7 left-1/2 z-[60] -translate-x-1/2 rounded-full px-5 py-3 text-sm font-semibold text-ink shadow-soft-sm transition-all duration-300 ${
        message ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {message}
    </div>
  );
}

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent("thabor:toast", { detail: message }));
}
