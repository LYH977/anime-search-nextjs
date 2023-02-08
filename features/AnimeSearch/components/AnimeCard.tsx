import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

type AnimeCardProps = {
    title: string;
    id: number;
    imageUrl: string
}


export const AnimeCard = ({ title, id, imageUrl }: AnimeCardProps) => {
    const animeId = 'anime-' + id
    return (
        <Link href={ `/anime/${id}` } className='shadow-lg pb-4 w-[200px] h-[400px] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform' tabIndex={ 0 } title={ title } aria-labelledby={ animeId }>
            <Image src={ imageUrl } alt={ title } width={ 200 } height={ 300 } className='object-cover h-[300px]' />
            <p id={ animeId } className='px-2 pt-2 line-clamp-2 overflow-hidden '>{ title }</p>
        </Link>
    )
}

