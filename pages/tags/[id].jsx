// pages/category/[id].js

import { css } from "@emotion/react"

import Breadcrumbs from "../../components/layouts/breadcrumbs";
import Card from "../../components/layouts/card";
import Footer from "../../components/layouts/footer";
import Header from '../../components/layouts/header';
import Jumbotron from "../../components/layouts/jumbotron";
import Side from "../../components/layouts/side";
import { client } from "../../libs/client";
import { breakPoint, contentWidth } from '../../styles/constans.js';

const TagsId = ({ data, tagName, tagNameList }) => {
  return (

    <>
      <Header />
      <Jumbotron name="Works" />
      <Breadcrumbs current={tagName.name + "タグの一覧"} beforeName="works" />

      <main>
        <div css={wrapper}>
          <div css={rowContainer}>
            {data.length === 0 ? ("このタグの実績はまだありません。他のタグをご覧ください！") : (<Card data={data} />)}
          </div>
          <Side tag={tagNameList} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TagsId

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "tags" });

  const paths = data.contents.map((content) => `/tags/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", queries: { filters: `tags[contains]${id}` } });
  const name = await client.get({ endpoint: "tags", contentId: id });
  const list = await client.get({ endpoint: "tags" });

  return {
    props: {
      data: data.contents,
      tagName: name,
      tagNameList: list.contents,
    },
  };
};



const wrapper = css`
      margin: auto;
      padding: 60px 16px;

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
