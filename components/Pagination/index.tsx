import { NextArrow, PrevArrow } from 'assets';
import React, { Dispatch, SetStateAction } from 'react'
import { PageNumbers } from './PageButtons.tsx';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = (props: PaginationProps) => {
  const { totalPages, setPage, currentPage } = props
  const goToNextPage = () => setPage(prev => prev + 1)
  const goToPrevPage = () => setPage(prev => prev - 1)

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex items-center -space-x-px">
        { totalPages > 5 && currentPage > 1 && <li>
          <a href='#' className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700" onClick={ goToPrevPage }>
            <span className="sr-only">Previous</span>
            <PrevArrow />
          </a>
        </li> }
        <PageNumbers { ...props } />
        { totalPages > 5 && currentPage < totalPages && <li>
          <a href='#' className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700" onClick={ goToNextPage }>
            <span className="sr-only">Next</span>
            <NextArrow />
          </a>
        </li> }
      </ul>
    </nav >
  )
}

