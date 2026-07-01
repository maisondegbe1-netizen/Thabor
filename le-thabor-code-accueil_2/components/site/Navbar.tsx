"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "#emporter", label: "À emporter" },
  { href: "/reservation", label: "Réservation" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, bump } = useCart();

  // Ajoute une ombre discrète à la nav une fois que l'utilisateur défile
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className={`glass mt-3 flex items-center justify-between rounded-full px-5 py-2 md:px-7 transition-shadow ${
            scrolled ? "shadow-soft-sm" : ""
          }`}
        >
          {/* Logo réel de la marque (fichier fourni par le restaurant) */}
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Le Thabor — Enjoy Italian Taste"
              width={140}
              height={140}
              className="h-11 md:h-12 w-auto rounded-lg"
              priority
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-ink">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative transition-colors hover:text-rose-deep after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-rose after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* Icône panier — id utilisé comme cible pour l'animation "vol vers le panier" */}
            <button
              id="cart-icon"
              aria-label="Voir le panier"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-rose-blush"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#AD1457" strokeWidth={2}>
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <motion.span
                animate={{ scale: bump ? 1.4 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose text-[0.65rem] font-bold text-white"
              >
                {count}
              </motion.span>
            </button>
            <a
              href="/emporter"
              className="rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Commander
            </a>
          </div>

          <button
            aria-label="Ouvrir le menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="glass mt-2 overflow-hidden rounded-3xl lg:hidden"
            >
              <div className="flex flex-col gap-4 p-5 text-sm font-medium text-ink">
                {links.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
                <a
                  href="/emporter"
                  className="mt-1 rounded-full bg-rose px-5 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Commander
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
