import React, { useState } from 'react'

export const Modal = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <>
            { isOpen && <aside className='z-10 isolate relative text-center bg-slate-500 text-white w-[100%] p-4 text-sm'>
                <p>We use <a target='_blank' rel='noreferrer' href='https://docs.api.jikan.moe/' className='underline'>Jikan API</a> free version with limited rate per second. Page might be unresponsive temporarily when rate exceeds.</p>
                <button className='rounded-sm bg-red-600 p-1 mt-2
            ' onClick={ () => { setIsOpen(false) } }>Close</button>
            </aside> }
        </>

    )
}
