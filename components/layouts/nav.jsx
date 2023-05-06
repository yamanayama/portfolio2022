/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { useRouter } from "next/router";

import { css } from '@emotion/react'

import { color, typography, breakPoint } from '../../styles/constans'

const Nav = ({ open, setOpen }) => {
  const router = useRouter();
  const menu = [
    {
      id: 1,
      name: "profile",
    },
    {
      id: 2,
      name: "skill",
    },
    {
      id: 3,
      name: "works",
    }
  ]

  return (
    <>
      {open && (
        <nav css={navi}>
          <div css={naviLogo}>
            <Link href="/">
              <a css={title}>Naomi Murakami</a>
            </Link></div>
          <ul css={list}>
            {menu.map((item) => (
              <li css={listItem} key={item.id}>
                <Link href={item.name}>
                  <a
                    css={
                      router.pathname.startsWith("/" + item.name)
                        ? current
                        : nonCurrent
                    }
                  >
                    {item.name}</a></Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}

export default Nav

const list = css`
    font-size: ${typography.text.headline5}px;
    margin-top: 24px;

    @media (min-width: ${breakPoint}) {
        display: flex;
        font-size: ${typography.text.body2}px;
        flex-shrink: 0;
        margin-top : 0;
        padding: 0 40px;
    }
`

const listItem = css`
    line-height: 1.5;
    padding: 8px;
    text-transform: capitalize;
    position: relative;

    @media (min-width: ${breakPoint}) {
      a{
        &::after{
          position: absolute;
          left: 0;
          content: '';
          width: 100%;
          height: 2px;
          background: #000000;
          bottom: -1px;
          transform: scale(0,1) ;
          transform-origin: left top;
          transition: all 0.3s ease-out;
          }

        &:hover::after{
          transform: scale(1,1);
        }
      }
    }
`

const navi = css`
    color: ${color.text.high};
    left: 50%;
    position: absolute;
    text-align: center;
    top: 64px;
    transform: translateX(-50%);
    width: 100%;
    z-index: 2;

    @media (min-width: ${breakPoint}) {
      align-items: center;
      display: flex;
      justify-content: space-between;
      position: static;
      transform: translateX(0);
    }
`

const naviLogo = css`
    color: ${color.text.high};
    cursor : pointer;
    text-align: center;
    z-index: 2;
`

const current = css`
    cursor : pointer;
    font-weight: bold;
`

const nonCurrent = css`
    cursor : pointer;
`

const title = css`
      font-size: ${typography.text.headline5}px;
      font-weight: bold;

    @media (min-width: ${breakPoint}) {
      font-size:${typography.text.body1}px;
    }
      `
