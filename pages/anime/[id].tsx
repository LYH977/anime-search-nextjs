import React from 'react'
import Image from 'next/image'
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

const Anime = ({ anime }: AnimeProps) => {
    const title = `NextAnime | ${anime.title}`
    const description = anime.synopsis ?? anime.title
    return (
        <>
            <DefaultHeader title={ title } description={ description } />
            <div className='mx-auto px-4 pb-4 center flex-col max-w-5xl bg-white'>
                <div className='center flex-col gap-4 md:flex-row md:items-start'>
                    <Image src={ anime.images.jpg.large_image_url } alt={ anime.title } width={ 200 } height={ 200 } className='isolate' />
                    <Article anime={ anime } />
                </div>
                <Button extraClassName='mt-4 mr-auto' onClick={ () => { Router.back() } }>BACK</Button>
            </div>
        </>
    )
}

export default Anime