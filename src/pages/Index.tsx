import Navigation from "@/components/Navigation";
import Newsletter from "@/components/Newsletter";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Signature from "@/components/Signature";
import Training from "@/components/Training";
import Discovery from "@/components/Discovery";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import MarqueeElement from "@/components/MarqueeElement";

export default function Index(){
  return (
    <div className="bg-gym-dark min-h-screen">
      <Navigation />
      <Hero />
      <Courses />
      <Training />
      <Signature />
      <MarqueeElement />
      <Discovery />
      <Contact />
      {/* <Map /> */}
      <Newsletter />
    </div>
  );
};

