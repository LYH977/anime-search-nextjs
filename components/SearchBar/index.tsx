import { LoadingSpinner } from 'assets/LoadingSpinner'
import React from 'react'

type SearchBarProps = {
    isLoading: boolean
} & React.ComponentProps<'input'>

export const SearchBar = ({ isLoading, ...rest }: SearchBarProps) => {
    return (
        <div className='bg-red-200 relative w-full'>
            { isLoading && <div role='status'>
                <span className='absolute top-4 left-3 text-xs'><LoadingSpinner /></span>
                <span className="sr-only">Loading...</span>
            </div> }

            <input type="search" id="default-search" className="block p-4 w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus-visible:ring-blue-500 focus-visible:border-blue-500 outline-none" { ...rest } />
        </div>)
}

