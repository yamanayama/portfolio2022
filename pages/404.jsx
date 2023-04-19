/** @jsxImportSource @emotion/react */


import { css } from "@emotion/react"

import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import { client } from "../libs/client";
import { typography, color, breakPoint } from '../styles/constans.js'

const Custom404 = () => {
  return (
    <>
      <Header />
      <div css={jumbotron}>
        <h1 css={jumbotronTitle}>404 Not Found</h1>
      </div>

      <main css={container}>
        すみません！お探しのページは見つかりませんでした。。<br />
        （もしよければ、どこのページが見つからなかったか、こちらへこっそり教えてください😢） →
        <a href="https://twitter.com/yamanayama" target="_blank" rel="noreferrer">
          twitter
        </a>
      </main>

      <Footer />
    </>
  );
}

export default Custom404

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blogs",
    queries: {
      offset: 0,
      limit: 1000,
    },

  });

  const tagData = await client.get({ endpoint: "categories" });

  return {
    props: {
      data: data.contents,
      tag: tagData.contents,
    },
  };
};

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
      max-width: 800px;
      padding: 40px 16px;

      @media (min-width: ${breakPoint}) {
        padding: 96px 24px;
      }
    `

const rowBlock = css`
    margin-top: 24px;

    @media (min-width: ${breakPoint}) {
        width: calc(50% - 24px);
        margin-top: 0;
      }
`
