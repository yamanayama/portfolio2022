/** @jsxImportSource @emotion/react */

import Image from "next/image"
import Link from 'next/link';

import { css } from "@emotion/react"

import Breadcrumbs from "../components/layouts/Breadcrumbs";
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import Jumbotron from '../components/layouts/Jumbotron'
import { client } from "../libs/client";
import { typography, color, breakPoint } from '../styles/constans.js'
// import Side from "./side";

const Gohan = ({ data, tag }) => {
  return (
    <>
      <Header />
      <Jumbotron name="Works" />
      <Breadcrumbs current="works" />
      {/* <Side /> */}

      <div css={wrapper}>

        <div css={container}>
          <div css={rowContainer}>
            {data.map((blog, key) => (
              <Link href={`/blogs/${blog.id}`} key={key} css={rowBlock}>
                <a css={card}>
                  <Image
                    css={cardImage}
                    src={blog.eyecatch.url}
                    alt="作品の画像1"
                    width={896}
                    height={504}
                  />
                  <p css={year}>{blog.year}</p>
                  <h2 css={cardTitle}>{blog.title}</h2>
                  <div css={categoryTag}>
                    {blog.tags.map((item, key) => {
                      return (
                        <span css={categoryName} key={key}>#{item.name}</span>
                      );
                    })}
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>

        <aside css={tagMenu}>
          <h3 css={tagTitle}>タグ一覧</h3>
          <ul css={tagList}>
            {tag.map((tag) => (
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
      padding: 32px 16px 64px;

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
