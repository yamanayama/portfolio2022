/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Header from '../components/layouts/Header'
import { typography } from '../styles/constans.js'

const Home = () => {
  return (
    <>
      <Header />
      <div css={container}>
        <div css={hero}>
          <div css={catchCopy}>
            <span css={catchCopyTitle}>Murakami Naomi</span>
            <p css={catchCopyText}>リサーチからUI制作、フロントエンド実装まで
              新規事業に強いUXデザイナーです</p></div>
          <div css={eyeCatching}>aaa</div>
        </div>
      </div>
    </>
  );
}

export default Home

const container = css`
  min-height: 100vh;
  background-color: #FFF1F7;
  height: 100vh;
`

const hero = css`
  max-width: 1536px;
  display: grid;
  place-content: center;
  place-items: center;
  grid-auto-flow: column;
  gap: 16px;
`

const catchCopy = css`
  max-width: 1536px;
`

const catchCopyTitle = css`
  font-size: ${typography.text.headline4}px;
  font-weight: bold;
`

const catchCopyText = css`
  font-size: ${typography.text.body2}px;
`

const eyeCatching = css`
  color: pink;
`