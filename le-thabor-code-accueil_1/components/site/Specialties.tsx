"use client";

import { motion } from "framer-motion";
import { featuredDishes } from "@/lib/data";
import AddToCartButton from "./AddToCartButton";

export default function Specialties() {
  const [big, ...rest] = featuredDishes;

  return (
    <section id="specialites" className="bg-ivory px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-lg"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-rose">
            Le menu
          </span>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            Nos spécialités du moment
          </h2>
          <p className="mt-4 text-stone">
            Une sélection pensée pour surprendre, du fast food généreux aux
            saveurs italiennes assumées.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Grande carte (2 colonnes) — grande photo gourmande */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white p-6 shadow-soft-sm md:col-span-2"
          >
            <div className="halo mb-5 flex aspect-[16/10] w-full flex-col items-center justify-center gap-1 rounded-2xl">
              <span className="text-5xl">{big.emojiPlaceholder}</span>
              <span className="font-mono text-[0.65rem] text-stone">
                PHOTO XXL gourmande
              </span>
            </div>
            <h3 className="font-display text-2xl text-ink">{big.name}</h3>
            <p className="mt-1 text-sm text-stone">{big.description}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="font-mono text-lg font-semibold text-rose-deep">
                {big.price.toLocaleString("fr-FR")} FCFA
              </span>
              <AddToCartButton
                name={big.name}
                emoji={big.emojiPlaceholder}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-rose text-lg text-white transition-transform hover:scale-105"
              >
                +
              </AddToCartButton>
            </div>
          </motion.article>

          {rest.map((dish, i) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
              className="rounded-3xl bg-white p-5 shadow-soft-sm transition-transform hover:-translate-y-1.5"
            >
              <div className="halo mb-4 flex aspect-[4/5] w-full flex-col items-center justify-center gap-1 rounded-2xl">
                <span className="text-4xl">{dish.emojiPlaceholder}</span>
                <span className="font-mono text-[0.6rem] text-stone">
                  Photo grand format
                </span>
              </div>
              <h3 className="font-display text-lg text-ink">{dish.name}</h3>
              <p className="mt-1 text-xs text-stone">{dish.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono font-semibold text-rose-deep">
                  {dish.price.toLocaleString("fr-FR")} FCFA
                </span>
                <AddToCartButton
                  name={dish.name}
                  emoji={dish.emojiPlaceholder}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-rose text-white transition-transform hover:scale-105"
                >
                  +
                </AddToCartButton>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/menu"
            className="inline-block rounded-full border-2 border-rose px-7 py-3.5 font-semibold text-rose-deep transition-transform hover:-translate-y-0.5"
          >
            Voir le menu complet
          </a>
        </div>
      </div>
    </section>
  );
}
