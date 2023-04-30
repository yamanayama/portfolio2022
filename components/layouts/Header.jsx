/** @jsxImportSource @emotion/react */
import { useState } from 'react'


import { css } from '@emotion/react'
import useMedia from "use-media";

import { color, breakPoint } from '../../styles/constans'
import Burger from './burger'
import Nav from './nav'


const Header = () => {
  const [open, setOpen] = useState(false);
  const isPc = useMedia({ minWidth: breakPoint });

  return (
    <div css={heading}>
      {!isPc ? (
        <>
          <Burger open={open} setOpen={setOpen} />
          <Nav open={open} setOpen={setOpen} />
        </>
      ) : (
        <Nav open />
      )}
      {open && (
        <div css={overlay} />
      )}
    </div>
  )
}

export default Header

const heading = css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    position: fixed;
    width: 100%;
    z-index: 1;
      top: 0;

    @media (min-width: ${breakPoint}) {
      max-width: 1536px;
      margin: auto;
      padding: 16px 32px;
    }
`;

const overlay = css`
    background: ${color.salmon};
    height: 100vh;
    left: 50%;
    top: 50%;
    position: fixed;
    transform: translate(-50%,-50%);
    transition: all .3s ease-in-out;
    width: 100vw;
    z-index: 1;
`;
