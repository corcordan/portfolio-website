import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col bg-blue-300 py-10">
      <h1 className="text-3xl text-center text-blue-950 font-bold p-5">CONTACT</h1>
      <div className="flex flex-row items-center justify-center gap-20 py-10 text-xl">
        <p>Phone: +1-804-516-6850</p>
        <p>Email: corcordan@gmail.com</p>
        <a href="https://www.linkedin.com/in/corcordan/" className="hover:underline">LinkedIn</a>
        <a href="https://github.com/corcordan" className="hover:underline">GitHub</a>
      </div>
    </div>
  )
}

export default Contact