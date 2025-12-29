'use client'

import { useState } from 'react'
import Experience from './Experience'
import Education from './Education'

const Career = () => {
    const [toggle, setToggle] = useState(true) // true -> left/experience, false -> right/education
    return (
        <div className="flex flex-col bg-slate/25 shadow-lg border-1 border-steel/25 rounded-2xl my-8">
            <div className="flex flex-row justify-center">
                <button className="bg-lush p-2 rounded-tl-2xl w-full" onClick={() => setToggle(true)}>Experience</button>
                <button className="bg-lush p-2 rounded-tr-2xl w-full" onClick={() => setToggle(false)}>Education</button>
            </div>
            {toggle ? (
                <div>
                    <Experience />
                </div>
            ) : (
                <div>
                    <Education />
                </div>
            )}
        </div>
    )
}

export default Career