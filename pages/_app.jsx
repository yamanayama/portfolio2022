import { Global, css } from "@emotion/react"

import normalize from 'normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={global} />
      <Component {...pageProps} />
    </>)
}

export default MyApp

const global = css`
  ${normalize}
`
