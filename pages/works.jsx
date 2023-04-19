/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"

import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import { typography, color, breakPoint } from '../styles/constans.js'


const Work = () => {
  return (
    <>
      <Header />
      <div css={jumbotron}>
        <h1 css={jumbotronTitle}>Works</h1>
      </div>

      <div css={container}>
        <h2 css={title}>comming soon</h2>
        <p css={titleOption}>お問合せください</p>

      </div>

      <Footer />
    </>
  );
}

export default Work

const jumbotron = css`
      background: ${color.background} url('/images/jumbotron.jpg') center center / cover no-repeat ;
      height: 30vh;
      min-height: 360px;
      max-width: 1536px;
      display: grid;
      place-content: center;
      `


const jumbotronTitle = css`
      font-size: ${typography.text.headline3}px;
      `


const container = css`
      margin: auto;
      max-width: 1140px;
      padding: 40px 16px;

      @media (min-width: ${breakPoint}) {
        padding: 96px 24px;
      }
    `

const title = css`
      font-size: ${typography.text.headline4}px;
      font-weight: bold;
      letter-spacing: 0.1em;
      line-height: 1.3;
      `

const titleOption = (textcolor) => css`
      color: ${textcolor === "background" ? color.salmon : color.blown};
      font-size: ${typography.text.caption}px;
      letter-spacing: 0.1em;
`