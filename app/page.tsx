import About from "@/components/About";
import Hero from "@/components/Hero";
import Event from "@/components/Event";
import { Timer } from "@/components/Timer";
import Venue from "@/components/Venue";
import Registeration from "@/components/Registeration";
import Content from "@/components/Content";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Registeration />
      <Timer />
      <Content />
      <Event />
      <Venue />
    </div>
  );
}
