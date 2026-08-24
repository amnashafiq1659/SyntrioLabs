import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Why from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TechStack />
      <About />
      <Services />
      <Projects />
      <Process />
      <Why />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <ScrollReveal />
    </>
  );
}
