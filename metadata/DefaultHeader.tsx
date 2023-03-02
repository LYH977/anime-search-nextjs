import { LANGUAGES } from 'i18n';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { extractMatchedValues } from 'utils/extractor';

type DefaultHeaderProps = {
  title: string;
  description?: string
  previewImageUrl?: string;
}

export const DefaultHeader = ({ title, description, previewImageUrl }: DefaultHeaderProps) => {
  const { pathname, query, } = useRouter()
  const queryRegex = /\[(.*?)\]/g
  let newPathname = pathname
  const queries = extractMatchedValues(pathname, queryRegex)
  queries.forEach(q => {
    newPathname = newPathname.replace(`[${q}]`, query[q] as string)
  })
  const MY_NAME = 'Lee Yuan Hooi'
  const TWITTER_ID = '@ho0i97'
  const SITE_URL = 'https://anime-search-nextjs.vercel.app/'
  const LOGO_IMG = 'anime.png'
  const PREVIEW_IMG = previewImageUrl ?? SITE_URL + LOGO_IMG
  const META_TITLE = title
  const META_DESC = description ?? 'Search your next favourite anime here!'
  const TITLE = 'title'
  const OG = 'og'
  const TWITTER = 'twitter'
  const DESC = 'description'
  const AUTHOR = 'author'
  const SITE = 'site'
  const URL = 'url'
  const CARD = 'card'
  const CREATOR = 'creator'
  const IMG = 'image'
  const SRC = 'src'
  const SLI = 'summary_large_image'
  return (
    <Head>
      <title>{ title }</title>
      <meta name={ TITLE } content={ META_TITLE }></meta>
      <meta name={ `${OG}:${TITLE}` } content={ META_TITLE }></meta>
      <meta property={ `${OG}:${TITLE}` } content={ META_TITLE }></meta>

      <meta name={ `${TWITTER}:${TITLE}` } content={ META_TITLE }></meta>
      <meta property={ `${TWITTER}:${TITLE}` } content={ META_TITLE }></meta>

      <meta name={ DESC } content={ META_DESC } />

      <meta name={ `${OG}:${DESC}` } content={ META_DESC }></meta>
      <meta property={ `${OG}:${DESC}` } content={ META_DESC }></meta>

      <meta name={ `${TWITTER}:${DESC}` } content={ META_DESC }></meta>
      <meta property={ `${TWITTER}:${DESC}` } content={ META_DESC }></meta>

      <meta name={ AUTHOR } content={ MY_NAME }></meta>
      <meta property={ AUTHOR } content={ MY_NAME }></meta>

      <meta name={ SITE } content={ SITE_URL } ></meta>
      <meta name={ `${OG}:${SITE}` } content={ SITE_URL } ></meta>
      <meta property={ `${OG}:${SITE}` } content={ SITE_URL }></meta>

      <meta name={ `${TWITTER}:${SITE}` } content={ TWITTER_ID } ></meta>
      <meta property={ `${TWITTER}:${SITE}` } content={ TWITTER_ID }></meta>

      <meta name={ URL } content={ SITE_URL } ></meta>
      <meta property={ `${OG}:${URL}` } content={ SITE_URL } ></meta>

      <meta name={ `${TWITTER}:${URL}` } content={ SITE_URL } ></meta>
      <meta property={ `${TWITTER}:${URL}` } content={ SITE_URL } ></meta>

      <meta name={ `${TWITTER}:${CARD}` } content={ SLI }></meta>
      <meta property={ `${TWITTER}:${CARD}` } content={ SLI } ></meta>

      <meta name={ `${TWITTER}:${CREATOR}` } content={ TWITTER_ID } ></meta>
      <meta property={ `${TWITTER}:${CREATOR}` } content={ TWITTER_ID } ></meta>

      <meta name={ `${TWITTER}:${IMG}:${SRC}` } content={ PREVIEW_IMG } ></meta>
      <meta property={ `${TWITTER}:${IMG}:${SRC}` } content={ PREVIEW_IMG } ></meta>

      <meta property={ `${OG}:${IMG}` } content={ PREVIEW_IMG } ></meta>

      { previewImageUrl && <><meta property={ `${OG}:${IMG}:width` } content="200" />
        <meta property={ `${OG}:${IMG}:height` } content="200" />
        <meta property={ `${OG}:${IMG}:aspect_ratio` } content="1:1" /></> }

      <meta charSet='utf-8'></meta>
      <meta name="viewport" content='width=device-width' ></meta>

      <link rel="icon" href={ `/${LOGO_IMG}` } />

      { LANGUAGES.map(lang => <link key={ lang } rel="alternate" hrefLang={ lang } href={ SITE_URL + lang + newPathname } />) }
      <link rel="alternate" hrefLang="x-default" href={ SITE_URL + 'en' + newPathname } />
    </Head>



  )
}
