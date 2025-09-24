import About from "./components/about";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Links from "./components/links";
import Projects from "./components/projects";

export default function Home() {

  return (
    <div className="h-dvh flex flex-col justify-center items-center relative">
      {/*
      <div className="fixed z-50 flex flex-col space-y-4 top-0 right-0 w-1/12 m-4">
        <Minimap />
        <ThemeToggle />
      </div>
      */}
      <Links />
      <Hero />
      <Experience />
      <Projects />
    </div>
  );    
}
 