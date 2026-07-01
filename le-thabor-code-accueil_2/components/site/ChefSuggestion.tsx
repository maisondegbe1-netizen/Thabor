import AddToCartButton from "./AddToCartButton";

export default function ChefSuggestion() {
  return (
    <section className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink shadow-soft md:grid md:grid-cols-2">
        {/* Grande photo — remplacer le placeholder par un vrai gros plan gourmand */}
        <div className="halo relative aspect-[4/3] md:aspect-auto">
          <span className="absolute left-[-38px] top-[18px] -rotate-45 bg-rose px-12 py-1.5 font-mono text-[0.62rem] tracking-wider text-white shadow-md">
            SUGGESTION DU CHEF
          </span>
          <div className="flex flex-col items-center gap-1 p-4 text-center text-rose-deep">
            <span className="text-5xl">🍨</span>
            <span className="max-w-[12rem] font-mono text-[0.62rem] text-stone">
              PHOTO XXL — Coupe glacée royale, gros plan gourmand
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 text-white md:p-12">
          <span className="font-mono text-xs uppercase tracking-widest text-rose">
            ✨ Aujourd&apos;hui seulement
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Coupe Glacée Royale
          </h2>
          <p className="mt-4 max-w-md opacity-80">
            Trois boules de glace artisanale, coulis de fruits tropicaux,
            chantilly maison et éclats de praliné — la création signature du
            chef, à ne pas manquer.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <span className="font-mono text-2xl font-semibold text-rose">
              3 000 FCFA
            </span>
            <AddToCartButton
              name="Coupe Glacée Royale"
              emoji="🍨"
              className="rounded-full bg-rose px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Ajouter au panier
            </AddToCartButton>
          </div>
        </div>
      </div>
    </section>
  );
}
