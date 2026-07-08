import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { HowItWorks } from "./_components/HowItWorks";
import { Programs } from "./_components/Programs";
import { Features } from "./_components/Features";
import { Offer } from "./_components/Offer";
import { Waitlist } from "./_components/Waitlist";
import { FAQ } from "./_components/FAQ";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HowItWorks />
      <Programs />
      <Features />
      <Offer />
      <Waitlist />
      <FAQ />
      <Footer />
    </>
  );
}
