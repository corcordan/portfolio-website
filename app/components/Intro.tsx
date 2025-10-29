'use client'

import React from 'react'
import Dropdown from './Dropdown'
import Bullet from './Bullet'
import { Briefcase, Lightbulb, MapPin } from 'lucide-react'

const Intro = () => {

    return (
        <Dropdown
            text="Introduction"
            isOpen={false}
        >
            <Dropdown
                text="Daniel Corcoran"
            >
                <Bullet>
                    <Briefcase />
                    <p className="text-2xl">Software Engineer</p>
                </Bullet>
                <Bullet>
                    <Lightbulb />
                    <p className="text-2xl">Web and AI/ML</p>
                </Bullet>
                <Bullet>
                    <MapPin />
                    <p className="text-2xl">Salem, Massachusetts</p>
                </Bullet>
            </Dropdown>
        </Dropdown>
    )
}

export default Intro