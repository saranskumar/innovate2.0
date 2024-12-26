import About from "@/components/About";
import Hero from "@/components/Hero";
import Event from "@/components/Event";
import { Timer } from "@/components/Timer";
import Venue from "@/components/Venue";
import Registeration from "@/components/Registeration";
import Content from "@/components/Content";
import Faqs from "@/components/Faqs";
import Price from "@/components/Price";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Registeration />
      <Timer />
      <Price />
      <Content />
      <Faqs />
      <Event />
      <Venue />
    </div>
  );
}
