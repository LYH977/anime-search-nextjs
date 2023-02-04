import React from 'react'

type SearchBarProps = {

} & React.ComponentProps<'input'>

export const SearchBar = ({ placeholder }: SearchBarProps) => {
    return (
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500" placeholder={ placeholder } />)
}

