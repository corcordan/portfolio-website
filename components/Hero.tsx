import React from 'react'
import Header from './Header'
import Image from 'next/image'
import headshot from '../public/6.png'

const Hero = () => {
  return (
    <div className="h-dvh flex flex-col">
      <Header />
      <div className="px-10 bg-blue-300 flex lg:flex-row flex-col text-blue-950 flex-grow justify-between">
        <div className="content-center">
          <h2 className="text-5xl">Hi, I am</h2>
          <h1 className="text-7xl font-bold">Daniel Corcoran</h1>
          <h2 className="text-4xl">Software Engineer</h2>
        </div>
        <div className="right-0 object-contain">
          <Image
            alt="Headshot"
            src={headshot}
            className="h-full w-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero