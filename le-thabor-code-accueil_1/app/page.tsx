import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import CategoryMarquee from "@/components/site/CategoryMarquee";
import ChefSuggestion from "@/components/site/ChefSuggestion";
import DailyOffers from "@/components/site/DailyOffers";
import Specialties from "@/components/site/Specialties";
import WhyUs from "@/components/site/WhyUs";
import TakeawayHighlight from "@/components/site/TakeawayHighlight";
import Testimonials from "@/components/site/Testimonials";
import Location from "@/components/site/Location";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";

// Page "Accueil" — /
// Chaque section est un composant indépendant dans components/site/
// pour rester facile à faire évoluer sans toucher aux autres.
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CategoryMarquee />
      <ChefSuggestion />
      <DailyOffers />
      <Specialties />
      <WhyUs />
      <TakeawayHighlight />
      <Testimonials />
      <Location />
      {/* La page Galerie complète (avec lightbox) sera la prochaine étape */}
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
