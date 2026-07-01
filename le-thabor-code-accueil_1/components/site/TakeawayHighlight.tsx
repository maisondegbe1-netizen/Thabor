"use client";

import { motion } from "framer-motion";

const steps = [
  { n: 1, title: "Choisissez vos plats", detail: "Depuis le menu en ligne" },
  { n: 2, title: "Ajoutez au panier", detail: "Puis choisissez « À emporter »" },
  { n: 3, title: "Choisissez l'heure", detail: "Créneau de retrait au choix" },
  { n: 4, title: "Récupérez sur place", detail: "Numéro de commande à l'appui" },
];

export default function TakeawayHighlight() {
  return (
    <section id="emporter" className="bg-ink px-5 py-24 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-rose">
            À emporter
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Commandez avant de venir
          </h2>
          <p className="mt-4 opacity-70">
            Choisissez vos plats, l&apos;heure de récupération, et récupérez
            votre commande sans attendre.
          </p>
        </motion.div>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="mb-3 font-display text-4xl text-rose">{step.n}</div>
              <p className="mb-1 font-semibold">{step.title}</p>
              <p className="text-sm opacity-60">{step.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass flex flex-col items-center justify-between gap-6 rounded-3xl bg-white/[0.08] p-6 md:flex-row md:p-8"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-rose">
              ⏱ Estimation en direct
            </p>
            <p className="font-display text-3xl">
              Prêt dans environ <span className="text-rose">18 minutes</span>
            </p>
          </div>
          <a
            href="/emporter"
            className="shrink-0 rounded-full bg-rose px-8 py-4 font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Commander à emporter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
