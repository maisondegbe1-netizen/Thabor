import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Toast from "@/components/ui/Toast";

// Police d'affichage (titres) — chaleureuse et élégante
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "900"],
});

// Police de texte courant — lisible et moderne
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

// Police utilitaire (prix, heures, numéros de commande) — esprit "ticket"
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Le Thabor Arconville — Glacier & Restaurant à Abomey-Calavi, Bénin",
  description:
    "Glacier artisanal, pizzas, fast food, crêperie et cocktails à Arconville (Abomey-Calavi). Enjoy Italian Taste — commandez en ligne ou réservez votre table.",
  metadataBase: new URL("https://lethabor.bj"),
  openGraph: {
    title: "Le Thabor Arconville — Enjoy Italian Taste",
    description: "Glaces maison, pizzas et bien plus, à Arconville, Abomey-Calavi.",
    locale: "fr_BJ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${fraunces.variable} ${jakarta.variable} ${mono.variable} font-body bg-white text-ink antialiased`}
      >
        <CartProvider>
          {children}
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
