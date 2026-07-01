"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Fraîcheur garantie",
    text: "Des produits sélectionnés chaque matin, cuisinés à la commande — jamais réchauffés, jamais standardisés.",
    icon: (
      <path d="M12 2v20M2 12h20" />
    ),
  },
  {
    title: "Rapide sans compromis",
    text: "Scannez, commandez, récupérez — un temps de préparation affiché en direct sur chaque plat.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    title: "Fait avec cœur",
    text: "Une équipe passionnée, une ambiance chaleureuse, un service qui vous connaît par votre prénom.",
    icon: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-blush">
              <svg width="22" height="22" fill="none" stroke="#AD1457" strokeWidth={2} viewBox="0 0 24 24">
                {reason.icon}
              </svg>
            </div>
            <h3 className="mb-2 font-display text-2xl text-ink">{reason.title}</h3>
            <p className="text-stone">{reason.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
