/** @jsxImportSource @emotion/react */

import Link from 'next/link';

import { css } from "@emotion/react"

import { typography, color, breakPoint } from '../../styles/constans.js'

const Breadcrumbs = ({ children, current, beforeName }) => {
  return (
    <ul css={breadcrumb}>
      <li css={breadcrumbItem}><Link href="/"><a>top</a></Link></li>
      {beforeName && <li css={breadcrumbItem}><Link href={"/" + beforeName}><a>{beforeName}</a></Link></li>}
      {children && { children }}
      <li css={breadcrumbItem}>{current}</li>
    </ul>
  );
}

export default Breadcrumbs

const breadcrumb = css`
    display: flex;
    font-size: ${typography.text.caption}px;
    gap: 8px;
    margin: 16px;
    max-width: 1140px;

    @media (min-width: ${breakPoint}) {
        margin: 16px auto;
      }
    `

const breadcrumbItem = css`
    a{
      &:hover{
        color: ${color.blown};
      }
    }

    &:not(:last-of-type)::after{
      content: ">";
      margin-left: 8px;
    }
  `