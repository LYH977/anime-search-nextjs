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
    return {
        props: {
            anime: data
        }
    }
}

type AnimeProps = {
    anime: {
        data: AnimeSingleResultProps
    }
}

const Anime = ({ anime }: AnimeProps) => {
    const title = `NextAnime | ${anime.data.title}`
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='mx-auto px-4 pb-4 center flex-col max-w-5xl'>
                <div className='center flex-col gap-4 md:flex-row md:items-start'>
                    <Image src={ anime.data.images.jpg.large_image_url } alt={ anime.data.title } width={ 200 } height={ 200 } className='isolate' />
                    <Article anime={ anime.data } />
                </div>
                <Button extraClassName='mt-4 mr-auto' onClick={ () => { Router.back() } }>BACK</Button>
            </main>
        </>
    )
}

export default Anime