import React from 'react'

type BadgeProps = {
    name: string
}

export const Badge = ({ name }: BadgeProps) =>
(
    <p className='isolate bg-gray-200 rounded-full p-2 text-xs'>{ name }</p>
)


