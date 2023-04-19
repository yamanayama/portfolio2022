/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

import { breakPoint, color } from '../../styles/constans'


const Button = ({ children, ...props }) => {
  return (
    <button css={base} {...props}>{children}</button>
  )
}

export default Button


const base = css`
    border: 1px solid ${color.blown};
    color: ${color.blown};
    display: block;
  margin: 50px auto 0;
    padding: 16px 24px;
    width: 100%;

    @media (min-width: ${breakPoint}) {
        width: min(100%,200px);

        &:hover{
          background-color: ${color.blown};
          color: ${color.white};
        }
    }
`