import About from "@/components/About";
import Hero from "@/components/Hero";
import Event from "@/components/Event";
import { Timer } from "@/components/Timer";
import Venue from "@/components/Venue";
import Registeration from "@/components/Registeration";
import Collaborators from "@/components/Collaborators";
import AboutInApp from "@/components/AboutInApp";
import Price from "@/components/Price";
import Faqs from "@/components/Faqs";
import WhyParticipate from "@/components/WhyParticipate";

export default function Home() {
  return (
    <div>
      <Hero />
      <Timer />
      <About />
      <Registeration />
      <WhyParticipate />
      <Price />
      <Collaborators />
      <AboutInApp />
      <Faqs />
      <Event />
      <Venue />
    </div>
  );
}
