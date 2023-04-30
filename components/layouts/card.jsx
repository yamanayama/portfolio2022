/** @jsxImportSource @emotion/react */

import Image from "next/image"
import Link from 'next/link';

import { css } from "@emotion/react"

import { typography, color, breakPoint } from '../../styles/constans'

const Card = ({ data }) => {
  return (
    <>
      {data.map((blog, key) => (
        <Link href={`/blogs/${blog.id}`} key={key} css={rowBlock}>
          <a css={card}>
            <picture>
              <Image
                css={cardImage}
                src={blog.eyecatch.url}
                alt={blog.title + "の画像"}
                width={896}
                height={504}
              />
            </picture>
            <div css={cardBody}>
              <p css={year}>{blog.year}</p>
              <h2 css={cardTitle}>{blog.title}</h2>
              <div css={categoryTag}>
                {blog.tags.map((item, key) => {
                  return (
                    <span css={categoryName} key={key}>#{item.name}</span>
                  );
                })}
              </div>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
}

export default Card

const cardTitle = css`
      font-size: ${typography.text.headline6}px;
      letter-spacing: 0.1em;
      `

const year = css`
      font-size: ${typography.text.caption}px;
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

const rowBlock = css`
      margin-top: 24px;

      @media (min-width: ${breakPoint}) {
        width: calc(50% - 24px);
      margin-top: 0;
      }
      `


const card = css`
      background-color: ${color.white};
      border-radius: 8px;
      display: block;
      margin-top: 40px;
      overflow: hidden;

      @media (min-width: ${breakPoint}) {
        margin-top: 0;
        width: calc(50% - 24px);

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

const cardBody = css`
      padding: 24px;

      `
