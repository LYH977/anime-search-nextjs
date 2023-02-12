import Head from 'next/head'

type DefaultHeaderProps = {
  title: string;
  description?: string
}

export const DefaultHeader = ({ title, description }: DefaultHeaderProps) => {
  const MY_NAME = 'Lee Yuan Hooi'
  const TWITTER_ID = '@ho0i97'
  const SITE_URL = 'https://anime-search-nextjs.vercel.app/'
  const INTRO_IMG = SITE_URL + 'anime.png'
  const META_TITLE = description ?? `Search your next favourite anime here!`
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

      <meta name={ DESC } content={ META_TITLE } />

      <meta name={ `${OG}:${DESC}` } content={ META_TITLE }></meta>
      <meta property={ `${OG}:${DESC}` } content={ META_TITLE }></meta>

      <meta name={ `${TWITTER}:${DESC}` } content={ META_TITLE }></meta>
      <meta property={ `${TWITTER}:${DESC}` } content={ META_TITLE }></meta>

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

      <meta name={ `${TWITTER}:${IMG}:${SRC}` } content={ INTRO_IMG } ></meta>
      <meta property={ `${TWITTER}:${IMG}:${SRC}` } content={ INTRO_IMG } ></meta>

      <meta name={ `${OG}:${IMG}` } content={ INTRO_IMG } ></meta>
      <meta charSet='utf-8'></meta>
      <meta name="viewport" content='width=device-width' ></meta>

      <link rel="icon" href="/anime.png" />
    </Head>



  )
}
