import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja" prefix="og: http://ogp.me/ns#">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700;800&family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}