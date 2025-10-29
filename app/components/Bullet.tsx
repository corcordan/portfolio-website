import React from 'react'

type BulletProps = {
    children: React.ReactNode
}

const Bullet = ({ children }: BulletProps) => {
  return (
    <div className="flex flex-row justify-start items-start space-x-4 ml-11">
        <p className="text-2xl">•</p>
        <div className="text-2xl flex flex-row justify-center items-center space-x-2">
            {children}
        </div>
    </div>
  )
}

export default Bullet