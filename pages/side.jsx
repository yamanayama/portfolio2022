/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { client } from "../libs/client";
import { typography, color, breakPoint } from '../styles/constans.js'

const Side = ({ tag, data }) => {
  console.log(tag)
  console.log(data)
  return (
    <>
      <aside css={tagMenu}>
        <h3 css={tagTitle}>タグ一覧</h3>
        <ul css={tagList}>
          {/* {tag.map((tag) => (
            <li key={tag.id} css={tagItem}>
              <Link href={`/tags/${tag.id}`}>{tag.name}</Link>
            </li>
          ))} */}
        </ul>
      </aside>
    </>
  );
}

export default Side

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blogs",
    queries: {
      offset: 0,
      limit: 1000,
    },

  });
  const tag = await client.get({ endpoint: "tags" });

  return {
    props: {
      data: data.contents,
      tag: tag.contents,
    },
  };
};


const tagMenu = css`
      padding-top: 24px;

      @media (min-width: ${breakPoint}) {
        padding-top: 0;
      }
    `

const tagTitle = css`
    font-size: ${typography.text.body1}px;
    font-weight: bold;
    color: ${color.gray[80]};
`

const tagList = css`
    margin-top: 12px;
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
