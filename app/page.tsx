import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <div className="font-mono py-5 bg-blue-950">
      <main className="">
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
