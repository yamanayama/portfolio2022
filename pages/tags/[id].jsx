// pages/category/[id].js
import Image from "next/image";
import Link from "next/link";

import { css } from "@emotion/react"

import Breadcrumbs from "../../components/layouts/Breadcrumbs";
import Footer from "../../components/layouts/Footer";
import Header from '../../components/layouts/Header'
import Jumbotron from "../../components/layouts/Jumbotron";
import { client } from "../../libs/client";
import { breakPoint, color, typography } from '../../styles/constans.js'

const TagsId = ({ tag, tagName, tagNameList }) => {
  return (

    <>
      <Header />
      <Jumbotron name="Works" />
      <Breadcrumbs current={tagName.name + "タグの一覧"} beforeName="works" />

      <div css={wrapper}>

        <div css={container}>
          <div css={rowContainer}>
            {tag.length === 0 ? ("このタグの実績はまだありません。他のタグをご覧ください！") : (
              <>
                {tag.map((tag) => (
                  <Link href={`/blogs/${tag.id}`} key={tag.id} css={rowBlock}>
                    <a css={card}>
                      <Image
                        css={cardImage}
                        src={tag.eyecatch.url}
                        alt="作品の画像1"
                        width={896}
                        height={504}
                      />
                      <p css={year}>{tag.year}</p>
                      <h2 css={cardTitle}>{tag.title}</h2>
                      <div css={categoryTag}>
                        {tag.tags.map((item, key) => {
                          return (
                            <span css={categoryName} key={key}>#{item.name}</span>
                          );
                        })}
                      </div>
                    </a>
                  </Link>
                ))}
              </>
            )
            }
          </div>
        </div>

        <aside css={tagMenu}>
          <h3 css={tagTitle}>タグ一覧</h3>
          <ul css={tagList}>
            {tagNameList.map((tag) => (
              <li key={tag.id} css={tagItem}>
                <Link href={`/tags/${tag.id}`}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>

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
      tag: data.contents,
      tagName: name,
      tagNameList: list.contents,
    },
  };
};




const wrapper = css`
      margin: auto;
      padding: 32px 16px;

      @media (min-width: ${breakPoint}) {
        width: min(100%, 1140px);
        display: grid;
        grid-template-columns: 1fr 240px;
        gap: 32px;
        padding: 40px 0 96px;
      }
    `


const tagMenu = css`
    padding-top: 40px;
    margin-top: 40px;
    border-top: 1px solid ${color.salmon};

    @media (min-width: ${breakPoint}) {
      padding-top: 0;
      margin-top: 0;
      border: none;
    }
  `


const container = css`
    `

const cardTitle = css`
      font-size: ${typography.text.headline6}px;
      letter-spacing: 0.1em;
      `

const year = css`
      font-size: ${typography.text.caption}px;
      margin-top: 12px;
      `

const categoryTag = css`
      display: flex;
      flex-wrap: wrap;
      margin-top: 8px;
`

const categoryName = css`
      color: ${color.blown};
      font-size: ${typography.text.caption}px;
      margin-right: 8px;
`

const rowContainer = css`

      @media (min-width: ${breakPoint}) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 60px 24px;
      }
      `


const rowBlock = css`
    margin-top: 24px;

    @media (min-width: ${breakPoint}) {
        width: calc(50% - 24px);
        margin-top: 0;
      }
`

const card = css`
    display: block;
    margin-top: 40px;

    @media (min-width: ${breakPoint}) {
        width: calc(50% - 24px);
        margin-top: 0;

        img{
          transition: all 0.3s ease-in;
        }

        &:hover{
          color: ${color.blown};
          img{
            transform: scale(1.1);
          }
        }
      }
`


const cardImage = css`
    object-fit: cover;
`

const tagTitle = css`
    font-size: ${typography.text.body1}px;
    font-weight: bold;
    color: ${color.gray[80]};
`

const tagList = css`
    margin-top: 32px;

    @media (min-width: ${breakPoint}) {
      margin-top: 12px;

    }
`

const tagItem = css`
    padding-top: 8px;

    @media (min-width: ${breakPoint}) {
      a{
        &:hover{
          color: ${color.blown};
        }
      }
    }
`
