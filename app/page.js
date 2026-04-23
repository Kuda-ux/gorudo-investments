import Hero from "@/components/Hero";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import Products from "@/components/Products";
import Procurement from "@/components/Procurement";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Divisions />
      <Products />
      <WhyChooseUs />
      <Procurement />
      <CTASection />
      <Contact />
    </>
  );
}
