/** @jsxImportSource @emotion/react */
import Link from 'next/link';

import { css } from '@emotion/react'

import { color, typography, breakPoint } from '../../styles/constans'

const Nav = ({ open, setOpen }) => {

  return (
    <>
      {open && (
        <nav css={navi}>
          <ul css={list}>
            <li css={listItem}>
              <Link href="/">Home</Link>
            </li>
            <li css={listItem}>
              <Link href="/career">Career</Link>
            </li>
            <li css={listItem}>
              <Link href="/skill">Skill</Link>
            </li>
            <li css={listItem}>
              <Link href="/works">Works</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default Nav

const list = () => css`
    display: ${props => props.open ? 'none' : 'block'
  };
    font-size: ${typography.text.headline4}px;

    @media (min-width: ${breakPoint}) {
        display: flex;
        font-size: ${typography.text.body2}px;
        flex-shrink: 0;
        margin-left: auto;
        padding: 0;
    }
`

const listItem = css`
    border-radius: 4px;
    padding: 8px;
    text-transform: capitalize;
    line-height: 1.5;
    
    &:hover{
        color: ${color.pink[80]};
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
        position: initial;
        width: initial;
    }
`
