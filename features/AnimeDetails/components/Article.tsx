import React from 'react'
import { Badge } from './Badge'
import { Board } from './Board'
import { AnimeSingleResultProps } from 'types'
import { useMyI18n } from 'services/useMyI18n'

export const Article = ({ anime }: { anime: AnimeSingleResultProps }) => {
    const { t } = useMyI18n();

    return (
        <article aria-labelledby='detail-title'>
            <header >
                <h1 id='detail-title' className='font-bold text-center md:text-start'>{ anime.title }</h1>
            </header>
            <div className='flex justify-center gap-2 mt-4 flex-wrap md:justify-start '>
                { anime.genres.map(({ name }) => {
                    const genre = t(`detail.genre.${name}`) as string || name
                    return (
                        <Badge key={ name } name={ genre } />
                    )
                }) }
            </div>
            <p className='my-4'>{ anime.synopsis ?? 'No synopsis' }</p>
            <div className='flex gap-3 flex-wrap justify-center md:justify-start'>
                <Board category={ t(`detail.board.episode`) } value={ anime.episodes ?? '-' } />
                <Board category={ t(`detail.board.popularity`) } value={ anime.popularity ?? '-' } />
                <Board category={ t(`detail.board.score`) } value={ `#${anime.score ?? '-'}` } />
                <Board category={ t(`detail.board.rank`) } value={ `#${anime.rank ?? '-'}` } />
            </div>
        </article>
    )
}
