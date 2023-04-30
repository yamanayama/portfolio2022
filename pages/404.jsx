/** @jsxImportSource @emotion/react */


import { css } from "@emotion/react"

import Footer from '../components/layouts/footer'
import Header from '../components/layouts/header'
import Jumbotron from "../components/layouts/jumbotron";
import { client } from "../libs/client";
import { breakPoint, contentWidth } from '../styles/constans.js'

const Custom404 = () => {
  return (
    <>
      <Header />
      <Jumbotron name="404 Not Found" />

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


const container = css`
      margin: auto;
      max-width: ${contentWidth};
      padding: 40px 16px;

      @media (min-width: ${breakPoint}) {
        padding: 96px 0;
      }
    `

