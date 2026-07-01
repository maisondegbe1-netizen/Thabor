import { menuCategories } from "@/lib/data";

export default function CategoryMarquee() {
  // On duplique la liste pour obtenir une boucle visuellement continue
  const items = [...menuCategories, ...menuCategories];

  return (
    <section className="border-y border-line py-6">
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 font-display text-2xl text-ink md:text-3xl">
          {items.map((category, i) => (
            <span key={`${category}-${i}`} className="flex items-center gap-10">
              {category}
              <span className="text-rose">✻</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
