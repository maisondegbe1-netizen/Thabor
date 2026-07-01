"use client";

import { useEffect, useState } from "react";

// Affiche une estimation de temps d'attente qui se met à jour périodiquement.
// En production, remplacer par un vrai calcul basé sur les commandes en cours
// (voir lib/data.ts et le modèle Order dans l'architecture technique).
export default function WaitTimeBadge() {
  const [minutes, setMinutes] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(10 + Math.floor(Math.random() * 7)); // entre 10 et 16 min
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-rose-deep">
      ⏱ Temps d&apos;attente estimé : <strong>{minutes}</strong> min
    </span>
  );
}
