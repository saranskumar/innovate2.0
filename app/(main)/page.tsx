import About from "@/components/About";
import Hero from "@/components/Hero";
import Event from "@/components/Event";
import { Timer } from "@/components/Timer";
import Venue from "@/components/Venue";
import Registeration from "@/components/Registeration";
import AboutDetails from "@/components/AboutDetails";
import Price from "@/components/Price";
import Faqs from "@/components/Faqs";
import WhyParticipate from "@/components/WhyParticipate";

export default function Home() {
    return (
        <div>
            <Hero />
            <Timer />
            <About />
            <AboutDetails />
            <Price />
            <Registeration />
            <WhyParticipate />

            <Faqs />
            <Event />
            <Venue />
        </div>
    );
}
