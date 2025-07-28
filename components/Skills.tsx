import React from 'react'

const Skills = () => {
  return (
    <div className="text-blue-950 flex flex-col space-y-4">
      <h1 className="text-2xl text-center p-5 font-bold">Skills</h1>
      <div>
        <h2 className="font-bold underline text-lg">Programming</h2>
        <p>Python, Java, C++, TypeScript, JavaScript, SQL, PHP, R</p>
      </div>
      <div>
        <h2 className="font-bold underline text-lg">Web & Frameworks</h2>
        <p>React, Nex.js, HTML/CSS, Tailwind, Leaflet.js</p>
      </div>
      <div>
        <h2 className="font-bold underline text-lg">APIs & Data Sources</h2>
        <p>REST APIs, WeatherAPI, JSON, GeoNames</p>
      </div>
      <div>
        <h2 className="font-bold underline text-lg">AI/Data</h2>
        <p>PyTorch, scikit-learn, TnesorFlow, Keras, pandas, NumPy, Matplotlib, SBERT</p>
      </div>
      <div>
        <h2 className="font-bold underline text-lg">Database/Tools</h2>
        <p>MySQL, PostgreSQL, Supabase, Git, AWS, Linux/Unix</p>
      </div>
      <div>
        <h2 className="font-bold underline text-lg">Other</h2>
        <p>Microsoft Office, Excel, macOS</p>
      </div>
      <div> 
        <h2 className="font-bold underline text-lg">Soft</h2>
        <p>Leadership, Hard-working, Problem-solving, Detail-oriented, Communication, Adaptability, Teamwork, Organized, Critical Thinking.</p>
      </div>
    </div>
  )
}

export default Skills