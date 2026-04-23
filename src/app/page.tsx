import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { Problem } from "./_components/Problem";
import { HowItWorks } from "./_components/HowItWorks";
import { PulseAI } from "./_components/PulseAI";
import { Pricing } from "./_components/Pricing";
import { Programs } from "./_components/Programs";
import { Trust } from "./_components/Trust";
import { Waitlist } from "./_components/Waitlist";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <PulseAI />
      <Pricing />
      <Programs />
      <Trust />
      <Waitlist />
    </>
  );
}
