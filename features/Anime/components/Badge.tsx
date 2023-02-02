import React from 'react'

type BadgeProps = {
    name: string
}

const Badge = ({ name }: BadgeProps) =>
(
    <p className='bg-gray-200 rounded-full p-2 text-xs'>{ name }</p>
)


export default Badge