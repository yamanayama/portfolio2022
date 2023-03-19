/** @jsxImportSource @emotion/react */
import { useState } from 'react'


import { css } from '@emotion/react'
import useMedia from "use-media";

import { color, breakPoint } from '../../styles/constans'
import Burger from './Burger'
import Nav from './Nav'


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
    position: relative;
    width: 100%;
`;

const overlay = css`
    background: ${color.surface};
    height: 100vh;
    left: 50%;
    top: 50%;
    position: fixed;
    transform: translate(-50%,-50%);
    transition: all .3s ease-in-out;
    width: 100vw;
    z-index: 1;
`;
