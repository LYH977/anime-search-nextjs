import React from 'react'

type BoardProps = {
    category: string;
    value: string | number;
}

export const Board = ({ category, value }: BoardProps) => {
    return (
        <div aria-labelledby={ category } className='isolate text-blue-700 bg-blue-200 rounded-lg px-8 py-4 min-w-[150px]'>
            <p className='text-center font-bold'>{ value }</p>
            <p id={ category } className='text-xs text-center'>{ category.toUpperCase() }</p>
        </div>
    )
}

