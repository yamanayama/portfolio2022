/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"

import Breadcrumbs from "../components/layouts/breadcrumbs";
import Footer from '../components/layouts/footer'
import Header from '../components/layouts/header'
import Jumbotron from "../components/layouts/jumbotron";
import { typography, color, breakPoint, contentWidth } from '../styles/constans.js'


const Works = () => {
  return (
    <>
      <Header />
      <Jumbotron name="Works" />
      <Breadcrumbs current="works" />
      <main css={container}>
        <h2 css={title}>comming soon</h2>
        <p css={titleOption}>少々お待ちください</p>
      </main>
      <Footer />
    </>
  );
}

export default Works

const container = css`
      margin: auto;
      max-width: ${contentWidth};
      padding: 60px 16px;

      @media (min-width: ${breakPoint}) {
        padding: 96px 0;
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