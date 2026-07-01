"use client";

import { useRef } from "react";
import { useCart } from "@/lib/cart-context";
import { showToast } from "@/components/ui/Toast";

type Props = {
  name: string;
  emoji: string;
  className?: string;
  children: React.ReactNode;
};

// Bouton réutilisable pour toutes les fiches plats (Specialties, ChefSuggestion…).
// Au clic : fait "voler" un petit emoji du bouton vers l'icône panier de la
// navbar (id="cart-icon"), incrémente le compteur global, et affiche un toast.
export default function AddToCartButton({ name, emoji, className, children }: Props) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const { addItem } = useCart();

  function handleClick() {
    const source = btnRef.current;
    const target = document.getElementById("cart-icon");

    if (source && target) {
      const startRect = source.getBoundingClientRect();
      const endRect = target.getBoundingClientRect();

      const ghost = document.createElement("div");
      ghost.textContent = emoji;
      ghost.style.position = "fixed";
      ghost.style.zIndex = "9999";
      ghost.style.pointerEvents = "none";
      ghost.style.fontSize = "1.5rem";
      ghost.style.left = `${startRect.left + startRect.width / 2 - 12}px`;
      ghost.style.top = `${startRect.top + startRect.height / 2 - 12}px`;
      ghost.style.transition = "transform .65s cubic-bezier(.2,.8,.2,1), opacity .65s ease";
      document.body.appendChild(ghost);

      requestAnimationFrame(() => {
        const dx = endRect.left + endRect.width / 2 - (startRect.left + startRect.width / 2);
        const dy = endRect.top + endRect.height / 2 - (startRect.top + startRect.height / 2);
        ghost.style.transform = `translate(${dx}px, ${dy}px) scale(.3)`;
        ghost.style.opacity = "0.2";
      });

      setTimeout(() => ghost.remove(), 700);
    }

    addItem(name);
    showToast(`✓ ${name} ajouté au panier`);
  }

  return (
    <button ref={btnRef} onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
