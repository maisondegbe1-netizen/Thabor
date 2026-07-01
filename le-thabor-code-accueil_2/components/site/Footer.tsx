import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pb-8 pt-20 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Image
            src="/logo.png"
            alt="Le Thabor — Enjoy Italian Taste"
            width={160}
            height={160}
            className="mb-4 h-14 w-auto rounded-lg"
          />
          <p className="max-w-xs text-sm opacity-70">
            Le glacier artisanal et restaurant complet d&apos;Arconville — glaces
            maison, pizzas, fast food, crêperie et cocktails, saveur
            italienne assumée.
          </p>
        </div>

        <FooterColumn
          title="Explorer"
          links={["Menu", "Réservation", "À emporter", "Évènements"]}
        />
        <FooterColumn
          title="Restaurant"
          links={["Notre histoire", "Galerie", "FAQ", "Contact"]}
        />
        <FooterColumn
          title="Légal"
          links={["Politique de confidentialité", "Mentions légales"]}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-xs opacity-50 sm:flex-row">
        <span>© 2026 Le Thabor — Tous droits réservés</span>
        <span>Arconville, Abomey-Calavi, Bénin</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest opacity-50">
        {title}
      </p>
      <ul className="space-y-2 text-sm opacity-80">
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
}
