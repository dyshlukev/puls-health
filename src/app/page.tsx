import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { Problem } from "./_components/Problem";
import { HowItWorks } from "./_components/HowItWorks";
import { Product } from "./_components/Product";
import { Experts } from "./_components/Experts";
import { Pricing } from "./_components/Pricing";
import { Trust } from "./_components/Trust";
import { FAQ } from "./_components/FAQ";
import { Waitlist } from "./_components/Waitlist";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Product />
      <Experts />
      <Pricing />
      <Trust />
      <FAQ />
      <Waitlist />
    </>
  );
}
