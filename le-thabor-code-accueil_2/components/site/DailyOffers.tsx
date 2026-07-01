const offers = [
  {
    badge: "-20%",
    badgeBg: "bg-rose",
    cardBg: "bg-rose-blush",
    title: "Sur toutes les pizzas",
    detail: "⏳ Valable jusqu'à 22h aujourd'hui",
    detailColor: "text-rose-deep",
  },
  {
    badge: "2+1",
    badgeBg: "bg-ink",
    cardBg: "bg-ivory",
    title: "3 glaces achetées, la 3ᵉ offerte",
    detail: "Tous les jours dès 15h",
    detailColor: "text-stone",
  },
  {
    badge: "-30%",
    badgeBg: "bg-rose-deep",
    cardBg: "bg-rose-blush",
    title: "Happy Hour cocktails",
    detail: "De 17h à 19h",
    detailColor: "text-rose-deep",
  },
];

// À terme, ces offres viendront du modèle `Promotion` (voir architecture
// technique) filtré sur `startsAt <= now <= endsAt`.
export default function DailyOffers() {
  return (
    <section className="px-5 pb-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Offres du jour
          </h2>
          <span className="font-mono text-xs text-stone">
            Mis à jour chaque matin
          </span>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`flex items-center gap-4 rounded-3xl p-6 shadow-soft-sm ${offer.cardBg}`}
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-sm font-extrabold text-white ${offer.badgeBg}`}
              >
                {offer.badge}
              </div>
              <div>
                <p className="font-display text-lg text-ink">{offer.title}</p>
                <p className={`font-mono text-[0.65rem] ${offer.detailColor}`}>
                  {offer.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
