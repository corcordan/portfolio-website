import React from 'react'
import Dropdown from './Dropdown'
import Bullet from './Bullet'

const Education = () => {
  return (
    <Dropdown
        text="Education"
    >
        <Dropdown
            text="Christopher Newport University (B.S. in Computer Science)"
        >
            <Bullet>
                <p>Graduated December 2024</p>
            </Bullet>
            <Bullet>
                <p>Honors Program | Cum Laude | TEDx Speaker</p>
            </Bullet>
            <Bullet>
                <p>Minors in Business Administration & Leadership Studies</p>
            </Bullet>
            <Bullet>
                <p>GPA: 3.53/4.0</p>
            </Bullet>
            <Bullet>
                <p>VP of Member Development, Sigma Phi Epsilon | Upsilon Pi Epsilon Honor Society | Student Ambassador</p>
            </Bullet>
        </Dropdown>
    </Dropdown>
  )
}

export default Education