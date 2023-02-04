import React from 'react'
import { PaginationProps } from '..'




export const PageNumbers = ({ currentPage, totalPages, setPage }: PaginationProps) => {
    return (
        <>
            { [...Array(totalPages).fill(Number)].map((_, index) => {
                const pageNumber = index + 1
                const isCurrentPage = pageNumber === currentPage
                const ariaCurrent = isCurrentPage ? 'page' : undefined
                const style = isCurrentPage
                    ? 'z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                return (
                    <li key={ pageNumber }>
                        <button aria-current={ ariaCurrent } onClick={ () => setPage(pageNumber) } className={ `px-3 py-2 leading-tight ${style}` }>{ pageNumber }</button>
                    </li>
                )
            }) }</>
    )
}
