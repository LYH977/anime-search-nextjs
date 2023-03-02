import React from 'react'
import Router from 'next/router'
import { I18nProps } from "next-rosetta";
import type { GetStaticProps } from "next";
import { MyLocale } from 'i18n'
import { ParsedUrlQuery } from 'querystring'

import { Button } from 'components'
import { Article } from 'features/AnimeDetails/components'
import { AnimeSingleResultProps } from 'types'
import { DefaultHeader } from 'metadata/DefaultHeader'
import { useMyI18n } from 'services/useMyI18n'

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    }
}
type AnimeProps = {
    anime: AnimeSingleResultProps
} & I18nProps<MyLocale>

export const getStaticProps: GetStaticProps<AnimeProps> = async ({ params, locale, defaultLocale }) => {
    const myLocale = locale || defaultLocale;
    const { table = {} } = await import(`../../i18n/${myLocale}`);
    const response = await fetch(`https://api.jikan.moe/v4/anime/${(params as ParsedUrlQuery).id}/full`)
    const data: { data: AnimeSingleResultProps, error?: any } = await response.json()

    if (data.hasOwnProperty('error')) { return { notFound: true } }
    return {
        props: {
            anime: data.data,
            table
        },
    }
}


const imgProps = {
    width: 200,
    height: 300,
    className: 'isolate h-[300px] max-w-none object-cover',
}

const Anime = ({ anime }: AnimeProps) => {
    const { t } = useMyI18n();
    const title = `NextAnime | ${anime.title}`
    const description = anime.synopsis ?? anime.title
    const previewImageUrl = anime.images.jpg.image_url

    return (
        <>
            <DefaultHeader title={ title } description={ description } previewImageUrl={ previewImageUrl } />
            <div className='mx-auto px-4 pb-4 center flex-col max-w-5xl bg-white'>
                <div className='center flex-col gap-4 md:flex-row md:items-start'>
                    <picture>
                        <source
                            srcSet={ anime.images.webp.image_url }
                            type='image/webp'
                            { ...imgProps }
                        />
                        <source
                            srcSet={ anime.images.jpg.image_url }
                            type='image/jpeg'
                            { ...imgProps }
                        />
                        <img src={ anime.images.jpg.image_url } alt={ title } { ...imgProps } />
                    </picture>
                    <Article anime={ anime } />
                </div>
                <Button
                    extraClassName='mt-4 mr-auto'
                    onClick={ () => {
                        Router.back()
                    } }
                >
                    { t('common.back') }
                </Button>
            </div>
        </>
    )
}

export default Anime
