'use client'

import { useState } from "react";
import Experience from "./components/experience";
import Intro from "./components/Intro";
import Links from "./components/links";
import Projects from "./components/projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ThemeToggle from "./components/themeToggle";

export default function Home() {
  const [isVert, setIsVert] = useState(true)

  const pageFlex = isVert ? "flex-row" : "flex-col"

  const linksSize = isVert ? "w-1/8 h-full flex-col" : "h-1/8 w-full flex-row"
  const notesSize = isVert ? "w-7/8 h-full flex-col" : "h-7/8 w-full"

  const linksClass = `flex ${linksSize} shadow-2xl justify-between items-start z-10`
  const notesClass = `${notesSize} flex flex-col px-100 py-75 overflow-hidden overflow-y-auto`

  return (
    <div className={`h-dvh flex ${pageFlex} justify-center items-center relative`}>
      {/*
      <div className="fixed z-50 flex flex-col space-y-4 top-0 right-0 w-1/12 m-4">
        <Minimap />
        <ThemeToggle />
      </div>
      */}

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
 