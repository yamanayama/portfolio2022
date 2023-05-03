/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { color, typography } from '../../styles/constans'

const Burger = ({ open, setOpen }) => {

  return (
    <>
      <div css={hamburger}>
        <button css={hamburgerButton}
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <div css={hamburgerOpen} />
          ) : (
            <div css={hamburgerClose} />
          )
          }
        </button>
      </div>
    </>
  );
};

export default Burger

const hamburger = css`
    font-size: ${typography.text.headline5}px;
`

const hamburgerButton = css`
    align-items: center;
    display: flex;
    height: 45px;
    justify-content: center;
    position: relative;
    transition: all .3s ease-in-out;
    width: 45px;
    z-index: 100;
`

const hamburgerOpen = css`
    background: currentColor;
    height: 1px;
    margin-left: 2px;
    margin-top: 10px;
    position: absolute;
    width: 17px;

    &::before,&::after{
        background: currentColor;
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        width: 17px;
    }

    &::before{
        top: -5px;
    }

    &::after{
        top: 5px;
    }
`

const hamburgerClose = css`
    align-items: center;
    color: ${color.text.high};
    display: flex;
    height: 21px;
    margin-top: 0;
    margin-left: 0;
    position: relative;
    width: 21px;

    &::before,&::after {
        background: currentColor;
        content: '';
        height: 1px;
        position: absolute;
        width: 21px;
        top: 10px;
    }

    &::before {
        transform: rotate(-45deg);
    }

    &::after {
        transform: rotate(45deg);
    }
`

