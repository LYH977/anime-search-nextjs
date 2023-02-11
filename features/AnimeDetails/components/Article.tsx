import React from 'react'
import { Badge } from './Badge'
import { Board } from './Board'
import { AnimeSingleResultProps } from 'types'

export const Article = ({ anime }: { anime: AnimeSingleResultProps }) => {
    return (
        <article aria-labelledby='detail-title'>
            <header >
                <h1 id='detail-title' className='font-bold text-center md:text-start'>{ anime.title }</h1>
                <div className='flex justify-center gap-2 mt-4 flex-wrap md:justify-start '>
                    { anime.genres.map(({ name }) => (
                        <Badge key={ name } name={ name } />
                    )) }
                </div>
            </header>
            <p className='my-4'>{ anime.synopsis ?? 'No synopsis' }</p>
            <footer className='flex gap-3 flex-wrap justify-center md:justify-start'>
                <Board category='episodes' value={ anime.episodes ?? '-' } />
                <Board category='popularity' value={ anime.popularity ?? '-' } />
                <Board category='score' value={ `#${anime.score ?? '-'}` } />
                <Board category='rank' value={ `#${anime.rank ?? '-'}` } />
            </footer>
        </article>
    )
}
