import Hero from "@/components/Hero/Hero";
import Camp from "@/components/Camp/Camp";
import Guide from "@/components/Guide/Guide";
import Features from "@/components/Features/Features";
import MobileApp from "@/components/MobileApp/MobileApp";
import { Fragment } from "react";

export default function Home() {
  return (
    <div data-scroll-section>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <MobileApp />
    </div>
  );
}
