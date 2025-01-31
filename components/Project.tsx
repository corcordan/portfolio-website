import React from 'react'

type ProjProps = {
    title: string;
    link?: string;
    desc: string;
    tech: string[];
}

const Project = ({title, link, desc, tech}: ProjProps) => {
  return (
    <div className="p-5 my-10 mx-5 bg-blue-300 text-blue-950 rounded-lg">
        <a href={link || undefined} className={`font-bold text-xl ${link ? "hover:underline" : "no-underline"}`}>{title}</a>
        <p>{desc}</p>
        <p className="text-sm text-blue-600">{tech.join(", ")}</p>
    </div>
  )
}

export default Project