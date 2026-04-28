import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { Problem } from "./_components/Problem";
import { HowItWorks } from "./_components/HowItWorks";
import { PulseAI } from "./_components/PulseAI";
import { DoctorOnRecord } from "./_components/DoctorOnRecord";
import { Experts } from "./_components/Experts";
import { Family } from "./_components/Family";
import { Pricing } from "./_components/Pricing";
import { InsidePulseCare } from "./_components/InsidePulseCare";
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
      <PulseAI />
      <DoctorOnRecord />
      <Experts />
      <Family />
      <Pricing />
      <InsidePulseCare />
      <Trust />
      <FAQ />
      <Waitlist />
    </>
  );
}
