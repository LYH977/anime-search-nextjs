import React from 'react'
import Router from 'next/router'

import { Button } from 'components'
import { Article } from 'features/AnimeDetails/components'
import { AnimeSingleResultProps } from 'types'
import { DefaultHeader } from 'metadata/DefaultHeader'

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params: { id } }: any) {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
    const data = await response.json()
    if (data.hasOwnProperty('error')) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            anime: data.data
        }
    }
}

type AnimeProps = {
    anime: AnimeSingleResultProps
}

const imgProps = {
    width: 200, height: 300, className: 'isolate'
}

const Anime = ({ anime }: AnimeProps) => {
    const title = `NextAnime | ${anime.title}`
    const description = anime.synopsis ?? anime.title
    return (
        <>
            <DefaultHeader title={ title } description={ description } />
            <div className='mx-auto px-4 pb-4 center flex-col max-w-5xl bg-white'>
                <div className='center flex-col gap-4 md:flex-row md:items-start'>
                    <picture>
                        <source srcSet={ anime.images.webp.image_url } type="image/webp" { ...imgProps } />
                        <source srcSet={ anime.images.jpg.image_url } type="image/jpeg" { ...imgProps } />
                        <img src={ anime.images.jpg.image_url } alt={ title } { ...imgProps } />
                    </picture>
                    <Article anime={ anime } />
                </div>
                <Button extraClassName='mt-4 mr-auto' onClick={ () => { Router.back() } }>BACK</Button>
            </div>
        </>
    )
}

export default Anime