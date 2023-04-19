/** @jsxImportSource @emotion/react */
import Image from "next/image";
import Router from 'next/router'

import { css } from "@emotion/react"

import Button from '../../components/elements/Button'
import Breadcrumbs from "../../components/layouts/Breadcrumbs";
import Footer from '../../components/layouts/Footer'
import Header from '../../components/layouts/Header'
import { client } from "../../libs/client";
import { typography, color, breakPoint } from '../../styles/constans.js'

const BlogId = ({ blog, tag }) => {
  return (
    <>
      <Header />

      <div css={container}>
        <Breadcrumbs current={blog.title} beforeName="works" />

        <picture css={imageWrap}>
          <Image
            css={eyecatchImage}
            src={blog.eyecatch.url}
            alt="画像1"
            width={1140}
            height={480}
          />
        </picture>
        <div css={articleContainer}>
          <div css={articleBox}>
            <p css={year}>{blog.year}</p>
            <h2 css={title}>{blog.title}</h2>
            <div css={categoryTag}>
              <div css={categoryName}>

              </div>
            </div>
            <h3 css={subTitle} style={{ marginTop: 32 }}>Summary</h3>
            <div style={{ marginTop: 12 }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${blog.conceptText}`,
                }} />
            </div>
            <h4 css={subTitle} style={{ marginTop: 32 }}>Role</h4>
            <div style={{ marginTop: 12 }}>
              {blog.tags.map((item, key) => {
                return (
                  <span css={role} key={key}>{item.name}</span>
                );
              })}</div>

            {blog?.processImage?.url !== undefined && (
              <picture css={imageBox}>
                <Image
                  src={blog?.processImage?.url}
                  css={eyecatchImage}
                  alt="画像1"
                  width={800}
                  height={480}
                />
              </picture>
            )}

            {blog.processText !== undefined && (
              <div css={articleBox}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${blog.processText}`,
                  }} />
              </div>
            )}

            {blog?.messageImage?.url !== undefined && (
              <picture css={imageBox}>
                <Image
                  src={blog?.messageImage?.url}
                  css={eyecatchImage}
                  alt="画像2"
                  width={800}
                  height={480}
                />
              </picture>
            )}
            {blog.messageText !== undefined && (
              <div css={articleBox}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${blog.messageText}`,
                  }} />
              </div>
            )}
          </div>
        </div>
        <div css={buttonArea}>
          <Button type="button" onClick={() => Router.push('/gohan')}>一覧へ戻る</Button>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default BlogId

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  const tagData = await client.get({ endpoint: "tags" });

  return {
    props: {
      blog: data,
      tag: tagData.contents,
    },
  };
};



const container = css`
      margin: 64px 16px;
      max-width: 1140px;

      @media (min-width: ${breakPoint}) {
        margin: 96px auto;
      }
      `

const imageWrap = css`
      display: block;
      `

const imageBox = css`
      display: block;
      margin: 32px auto 0;

      @media (min-width: ${breakPoint}) {
        margin: 48px auto 0;
      }
      `


const title = css`
      font-size: ${typography.text.headline4}px;
      font-weight: bold;
      letter-spacing: 0.1em;
      line-height: 1.3;
      `

const subTitle = css`
      font-size: ${typography.text.headline6}px;
      font-weight: bold;
      `

const year = css`
      font-size: ${typography.text.body2}px;
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

const role = css`
      margin-right: 12px;
`

const articleContainer = css`
      max-width: 800px;
      margin: 40px auto 0;

      @media (min-width: ${breakPoint}) {
        margin: 64px auto 0;
      }
      `

const articleBox = css`
      margin-top:32px;

      @media (min-width: ${breakPoint}) {
        margin-top: 48px;
      }
      `

const eyecatchImage = css`
      object-fit: cover;
      `

const buttonArea = css`
      margin-top: 64px;
      `
