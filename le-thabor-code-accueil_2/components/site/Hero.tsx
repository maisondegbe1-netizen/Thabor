"use client";

import { motion } from "framer-motion";
import WaitTimeBadge from "./WaitTimeBadge";
import QRCard from "./QRCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Fond immersif — remplacer par une vraie vidéo en boucle (vitrine de
          glaces, pizza au four, rooftop le soir) une fois les rushs fournis.
          En attendant, un dégradé animé (Ken Burns) donne déjà du mouvement. */}
      <div
        className="absolute inset-0 z-0 animate-[kenburns_18s_ease-in-out_infinite_alternate]"
        style={{
          background:
            "radial-gradient(circle at 20% 25%, rgba(255,255,255,.9), transparent 45%), radial-gradient(circle at 80% 15%, rgba(233,30,99,.35), transparent 50%), radial-gradient(circle at 60% 85%, rgba(233,30,99,.25), transparent 55%), linear-gradient(135deg, #FDE7EF 0%, #FBF8F6 45%, #F6E9EE 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <span className="font-mono text-[0.6rem] tracking-widest text-rose-deep/40">
          🎥 VIDÉO EN BOUCLE À INTÉGRER — vitrine de glaces, pizza au four, rooftop le soir
        </span>
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/0 via-ink/[0.06] to-ink/60" />

      <div className="relative z-[2] w-full px-5 pb-24 pt-40 md:px-8">
        <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-rose-deep">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
                Arconville · Ouvert de 9h à 1h
              </span>
              <WaitTimeBadge />
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.05}
              className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-rose"
            >
              Glacier artisanal · Enjoy Italian Taste
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="font-display text-6xl leading-[0.95] text-ink sm:text-7xl md:text-8xl"
            >
              Chaque plat
              <br />
              mérite <span className="italic text-rose">sa lumière.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="mt-6 max-w-md text-base text-ink md:text-lg"
            >
              Glaces artisanales, pizzas, fast food, crêperie et cocktails —
              à Arconville, Abomey-Calavi.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="/emporter"
                className="rounded-full bg-rose px-7 py-3.5 font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Commander maintenant
              </a>
              <a
                href="#emporter"
                className="glass rounded-full border-2 border-ink px-7 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Voir l&apos;option à emporter →
              </a>
            </motion.div>
          </div>

          {/* Widget QR Code animé — "scannez pour commander" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <QRCard />
          </motion.div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute inset-x-0 bottom-6 z-[2] flex justify-center">
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2B2320"
          strokeWidth={2}
          className="opacity-50"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </div>
    </section>
  );
}
