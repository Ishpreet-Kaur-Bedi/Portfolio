import Hero from "@/components/Hero";
import About from "@/components/About";
import Image from "next/image";
import Services from "@/components/Services";
import Work from "@/components/Work";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <CTA />
    </main>
  );
}
