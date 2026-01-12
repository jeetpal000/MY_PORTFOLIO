import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const LandingPage = () => {
  return (
    <section className="mx-auto max-w-360 bg-no-repeat bg-[url('/hero.svg')] p-2 pb-15">
      <Header />
      <HeroSection />
    </section>
  );
};

export default LandingPage;
