'use client'

import React, { useState } from 'react'

const Career = () => {
    const [toggle, setToggle] = useState(true) // true -> left/experience, false -> right/education
    return (
        <div>
            <div></div>
            {toggle ? (
                <div>

                </div>
            ) : (
                <div>
                    
                </div>
            )}
        </div>
    )
}

export default Career