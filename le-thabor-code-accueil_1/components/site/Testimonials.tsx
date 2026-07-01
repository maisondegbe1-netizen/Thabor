"use client";

import { motion } from "framer-motion";

// À terme, ces avis viendront d'un modèle `Review` en base de données,
// avec de vraies photos clients (avec leur accord) à la place des avatars
// à initiales.
const testimonials = [
  { initials: "DA", author: "Dinos A.", stars: 5, bg: "bg-rose", quote: "Le meilleur glacier d'Arconville, servi avec le sourire." },
  { initials: "RM", author: "Rachelle M.", stars: 5, bg: "bg-rose-deep", quote: "Commande à emporter prête pile à l'heure annoncée." },
  { initials: "FK", author: "Fabrice K.", stars: 4, bg: "bg-ink", quote: "Cadre magnifique, super pour les soirées en famille." },
  { initials: "SN", author: "Sandrine N.", stars: 5, bg: "bg-rose", quote: "Le QR Code sur la table, tout simplement génial." },
];

export default function Testimonials() {
  return (
    <section className="bg-ivory px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-rose">
            Avis clients
          </span>
          <h2 className="mt-3 font-display text-4xl text-ink">
            Ils ont adopté Le Thabor
          </h2>
        </motion.div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="min-w-[280px] flex-shrink-0 snap-start rounded-3xl bg-white p-7 shadow-soft-sm sm:min-w-[340px]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full font-display text-white ${t.bg}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.author}</p>
                  <p className="text-xs text-rose" aria-label={`${t.stars} étoiles sur 5`}>
                    {"★".repeat(t.stars)}
                    {"☆".repeat(5 - t.stars)}
                  </p>
                </div>
              </div>
              <p className="font-display text-lg leading-snug text-ink">
                « {t.quote} »
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 font-mono text-[0.65rem] text-stone">
          📸 Avatars en attente des vraies photos clients (avec leur accord)
          — envoyez-les-moi pour les intégrer.
        </p>
      </div>
    </section>
  );
}
