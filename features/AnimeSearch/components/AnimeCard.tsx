import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

type AnimeCardProps = {
    title: string;
    id: number;
    imageUrl: string
}


export const AnimeCard = ({ title, id, imageUrl }: AnimeCardProps) => {
    const animeId = 'anime-' + id
    const router = useRouter()
    const navigateToDetailPage = () => {
        router.push(`/anime/${id}`, undefined, { shallow: true })
    }

    return (
        <div className='shadow-lg shadow-[#2e3d0d] pb-4 w-[200px] h-[400px] rounded-lg overflow-hidden cursor-pointer ' tabIndex={ 0 } title={ title } aria-labelledby={ animeId } onClick={ navigateToDetailPage }>

            <div className='overflow-hidden'>
                <Image src={ imageUrl } alt={ title } width={ 200 } height={ 300 } className='object-cover h-[300px] isolate hover:scale-105 transition-transform' />
            </div>
            <p id={ animeId } className='px-2 pt-2 line-clamp-2 overflow-hidden'>{ title }</p>
        </div>
    )
}

