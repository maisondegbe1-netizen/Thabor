// Données de démonstration pour la section "Spécialités" de l'accueil.
// En production, ces données viendront de `GET /api/dishes?featured=true`
// (voir prisma/schema.prisma → modèle Dish).

export type FeaturedDish = {
  id: string;
  name: string;
  description: string;
  price: number; // en FCFA
  emojiPlaceholder: string; // remplacé par `imageUrl` réel en prod
};

export const featuredDishes: FeaturedDish[] = [
  {
    id: "pizza-cotonou",
    name: "Pizza Cotonou Spéciale",
    description: "Tomate, mozzarella, piment doux",
    price: 5000,
    emojiPlaceholder: "🍕",
  },
  {
    id: "smash-burger",
    name: "Thabor Smash Burger",
    description: "Bœuf, cheddar affiné, sauce maison",
    price: 3500,
    emojiPlaceholder: "🍔",
  },
  {
    id: "gaufre-rose",
    name: "Gaufre Rose Chantilly",
    description: "Fraise, chantilly, éclats de praliné",
    price: 2000,
    emojiPlaceholder: "🧇",
  },
  {
    id: "cocktail-sunset",
    name: "Cocktail Sunset Thabor",
    description: "Fruits tropicaux, grenadine, menthe",
    price: 2500,
    emojiPlaceholder: "🍹",
  },
];

export const menuCategories = [
  "Glaces Maison",
  "Pizzas",
  "Fast Food",
  "Crêpes & Gaufres",
  "Restaurant Complet",
  "Cocktails & Jus Frais",
];
