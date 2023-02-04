import { NextArrow, PrevArrow } from 'assets';
import React, { Dispatch, SetStateAction } from 'react'
import { PageNumbers } from './PageButtons.tsx';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = (props: PaginationProps) => {
  const goToNextPage = () => props.setPage(prev => prev + 1)
  const goToPrevPage = () => props.setPage(prev => prev - 1)

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700" onClick={ goToPrevPage }>
            <span className="sr-only">Previous</span>
            <PrevArrow />
            {/* <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> */ }
          </button>
        </li>
        <PageNumbers { ...props } />
        <li>
          <button className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700" onClick={ goToNextPage }>
            <span className="sr-only">Next</span>
            <NextArrow />
          </button>
        </li>
      </ul>
    </nav>
  )
}

