'use client'

import { useState } from "react";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Links from "./components/Links";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const [isVert, setIsVert] = useState(true)

  const pageFlex = isVert ? "flex-row" : "flex-col"

  const linksSize = isVert ? "w-1/6 h-full flex-col" : "h-1/8 w-full flex-row"
  const notesSize = isVert ? "w-5/6 h-full flex-col" : "h-7/8 w-full"

  const linksClass = `flex ${linksSize} shadow-2xl justify-between items-start z-10`
  const notesClass = `${notesSize} flex flex-col px-100 py-75 overflow-hidden overflow-y-auto`

  return (
    <div className={`h-dvh flex ${pageFlex} justify-center items-center relative`}>
      <div className={linksClass} style={{ backgroundColor: "var(--sidebar)" }}>
        <Links
          vertFunc={setIsVert}
          isVert={isVert}
        />
        <ThemeToggle />
      </div>

      <div className={notesClass} style={{ backgroundColor: "var(--background)" }}>
        <Intro />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </div>
    </div>
  );    
}
 