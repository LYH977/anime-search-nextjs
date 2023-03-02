import { LANGUAGES } from 'i18n'
import { useRouter } from 'next/router'
import React from 'react'


export const LocaleSelection = () => {
  const { locale: currentLocale, asPath, route, push } = useRouter()
  const isHomePath = route === '/'
  const changeLanguage = (e: any) => {
    const newLocale = e.target.value
    push(asPath, undefined, { locale: newLocale, shallow: isHomePath })
  }
  return (
    <select onChange={ changeLanguage } value={ currentLocale } aria-label='locale selection'
      className='ml-2 bg-transparent text-white text-xs focus:outline-none'
    >
      { LANGUAGES.map(lang => <option key={ lang } className='text-black' value={ lang }>{ lang.toUpperCase() }</option>) }

    </select>
  )
}
