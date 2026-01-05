import InfoSection from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Shop from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-[var(--cream)]">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Shop />
        <WhyChooseUs />
        <InfoSection />
      </main>
    </div>
  );
}
