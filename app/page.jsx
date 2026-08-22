import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />
    </main>
  );
}
