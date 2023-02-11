import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'

import { Button } from 'components'
import { Article } from 'features/AnimeDetails/components'
import { AnimeSingleResultProps } from 'types'

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' } }],
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
            <Head>
                <title>{ title }</title>
                <meta name="description" content={ description } />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='mx-auto px-4 pb-4 center flex-col max-w-5xl'>
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