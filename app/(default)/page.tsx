export const metadata = {
  title: "Adeoba Digital",
  description:
    "award winning social media professional",
};

import Hero from "@/components/hero";
import About from "@/components/about";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Medium from "@/components/medium";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Features /> */}
      {/* <Testimonials /> */}
      <Medium />
      <Contact />
    </>
  );
}
