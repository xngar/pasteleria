import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import PerfectCombos from "./components/PerfectCombos";
import LimitedTreat from "./components/LimitedTreat";
import LoyaltyAndReviews from "./components/LoyaltyAndReviews";
import FeaturesBar from "./components/FeaturesBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section contains Navbar as overlay */}
      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      {/* Search bar on dark chocolate background */}
      <SearchBar />

      {/* Category circles */}
      <Categories />

      {/* Perfect Combos */}
      <PerfectCombos />

      {/* Limited Time Treats */}
      <LimitedTreat />

      {/* Loyalty + Reviews */}
      <LoyaltyAndReviews />

      {/* Features bar */}
      <FeaturesBar />

      {/* Footeer */}
      <Footer />
    </main>
  );
}
