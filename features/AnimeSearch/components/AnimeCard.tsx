import React from 'react'
import { useRouter } from 'next/router'
import { AnimeItemProps } from 'types'

const imgProps = {
    width: 200,
    height: 300,
    className: 'object-cover h-[300px] isolate hover:scale-105 transition-transform'
}


export const AnimeCard = ({ title, mal_id, imageUrl, loading }: AnimeItemProps & Pick<HTMLImageElement, 'loading'>) => {
    const animeId = 'anime-' + mal_id
    const router = useRouter()
    const navigateToDetailPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        router.push(`/anime/${mal_id}`, undefined, { shallow: true })
    }

    return (
        <a className='shadow-lg shadow-[#2e3d0d] pb-4 w-[200px] h-[400px] rounded-lg overflow-hidden cursor-pointer' tabIndex={ 0 } title={ title } aria-labelledby={ animeId } href={ `/anime/${mal_id}` } onClick={ navigateToDetailPage }>
            <div className='overflow-hidden'>
                <picture>
                    <source srcSet={ imageUrl.webp } type="image/webp" { ...imgProps } />
                    <source srcSet={ imageUrl.jpg } type="image/jpeg" { ...imgProps } />
                    <img src={ imageUrl.jpg } alt={ title } loading={ loading }{ ...imgProps } />
                </picture>
            </div>
            <p id={ animeId } className='px-2 pt-2 line-clamp-2 overflow-hidden'>{ title }</p>
        </a>
    )
}

