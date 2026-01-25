import About from "@/components/About";
import Hero from "@/components/Hero";
import Event from "@/components/Event";
import { Timer } from "@/components/Timer";
import Venue from "@/components/Venue";
import Registeration from "@/components/Registeration";
import Rules from "@/components/Rules";
import EventDetails from "@/components/EventDetails";
import Collaborators from "@/components/Collaborators";
import AboutInApp from "@/components/AboutInApp";
import Price from "@/components/Price";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Timer />
      <About />
      <EventDetails />
      <Rules />
      <Registeration />
      <Price />
      <Collaborators />
      <AboutInApp />
      <Faqs />
      <Event />
      <Venue />
    </div>
  );
}
