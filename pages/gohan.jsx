/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Breadcrumbs from "../components/layouts/breadcrumbs";
import Card from "../components/layouts/card";
import Footer from '../components/layouts/footer'
import Header from '../components/layouts/header'
import Jumbotron from '../components/layouts/jumbotron'
import Side from "../components/layouts/side";
import { client } from "../libs/client";
import { breakPoint, contentWidth } from '../styles/constans.js'

const Gohan = ({ data, tag }) => {
  return (
    <>
      <Header />
      <Jumbotron name="Works" />
      <Breadcrumbs current="works" />
      <main>
        <div css={wrapper}>
          <div css={rowContainer}>
            <Card data={data} />
          </div>
          <Side tag={tag} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Gohan

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blogs",
    queries: {
      offset: 0,
      limit: 1000,
    },

  });

  const tagData = await client.get({ endpoint: "tags" });

  return {
    props: {
      data: data.contents,
      tag: tagData.contents,
    },
  };
};



const wrapper = css`
      margin: auto;
      padding: 32px 16px;

      @media (min-width: ${breakPoint}) {
        width: min(100%, ${contentWidth});
        display: grid;
        grid-template-columns: 1fr 240px;
        gap: 32px;
        padding: 40px 0 96px;
        }
      `

const rowContainer = css`

      @media (min-width: ${breakPoint}) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 60px 24px;
      }
    `
