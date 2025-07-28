import React from 'react'

type ProjProps = {
    title: string;
    weblink?: string;
    gitlink?: string;
    desc: string;
    tech: string[];
}

const Project = ({title, weblink, gitlink, desc, tech}: ProjProps) => {
  return (
    <div className="p-5 my-10 mx-5 bg-blue-300 text-blue-950 rounded-lg flex flex-col justify-between space-y-2">
      <div>
        <a href={weblink || undefined} target="_blank" className={`font-bold text-xl ${weblink ? "hover:underline" : "no-underline"}`}>{title}</a>
        <p>{desc}</p>
      </div>
        <p className="text-sm text-blue-600">{tech.join(", ")}</p>
    </div>
  )
}

export default Project