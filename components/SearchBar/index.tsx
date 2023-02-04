import React from 'react'

export const SearchBar = (props: React.ComponentProps<'input'>) => {
    return (
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500" { ...props } />)
}

