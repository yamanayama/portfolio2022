/** @jsxImportSource @emotion/react */
import Link from 'next/link';

import { css } from "@emotion/react"

import { typography, color, breakPoint } from '../../styles/constans.js'

const Side = ({ tag }) => {
  return (
    <>
      <aside css={aside}>
        <h2 css={title}>Tag</h2>
        <ul css={menu}>
          {tag.map((tag) => (
            <li key={tag.id} css={item}>
              <Link href={`/tags/${tag.id}`}><a css={tagLink}>{tag.name}</a></Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default Side


const aside = css`
    margin-top: 48px;

  @media (min-width: ${breakPoint}) {
      position: sticky;
      top: 80px;
    }
`

const menu = css`
    margin-top: 16px;

    @media (min-width: ${breakPoint}) {
      padding-top: 0;
      margin-top: 0;
      border: none;
    }
  `

const title = css`
      font-size: ${typography.text.headline6}px;
      font-weight: bold;
      position: relative;
      `

const item = css`
      margin-top: 8px;
      margin-left: 8px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      `

const tagLink = css`
      font-size: ${typography.text.body2}px;

      @media (min-width: ${breakPoint}) {
      &:hover{
        color: ${color.blown};
        cursor: pointer;
        }
    }
      `
