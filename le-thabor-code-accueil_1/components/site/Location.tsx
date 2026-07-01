"use client";

import { motion } from "framer-motion";

// Coordonnées réelles du restaurant (confirmées via ses pages Facebook/Instagram).
// À terme, on pourra remplacer l'URL par un embed Google Maps Platform avec clé API
// pour un contrôle plus fin (marqueur personnalisé, style de carte, etc.)
const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Le+Thabor+Arconville+Abomey-Calavi+Benin&output=embed";

export default function Location() {
  return (
    <section id="contact" className="bg-ivory px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-72 overflow-hidden rounded-3xl shadow-soft-sm md:h-96"
        >
          <iframe
            title="Localisation Le Thabor Arconville"
            src={MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-rose">
            Contact
          </span>
          <h2 className="font-display text-4xl text-ink">
            Venez nous rencontrer
          </h2>
          <ul className="space-y-3 text-sm text-ink">
            <li>
              📍 Carrefour Arconville, après le Supermarché du Pont —
              Abomey-Calavi, Bénin
            </li>
            <li>📞 +229 91 41 11 11</li>
            <li>🕐 Lun–Dim · 09h00 – 01h00</li>
          </ul>
          <div className="flex gap-3 pt-2">
            <a
              href="https://wa.me/22991411111"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:-translate-y-0.5"
              aria-label="WhatsApp"
            >
              W
            </a>
            <a
              href="https://www.instagram.com/thabor_arconville/"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-rose text-white transition-transform hover:-translate-y-0.5"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="https://www.facebook.com/restaurantlethabor"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-transform hover:-translate-y-0.5"
              aria-label="Facebook"
            >
              FB
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
