/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"

import { typography, color } from '../../styles/constans.js'

const Jumbotron = ({ name }) => {
  return (
    <>
      <div css={jumbotron}>
        <h1 css={jumbotronTitle}>{name}</h1>
      </div>
    </>
  );
}

export default Jumbotron

const jumbotron = (background) => css`
      background: ${color.background} url('/images/jumbotron.jpg') center center / cover no-repeat ;
      height: 30vh;
      min-height: 360px;
      max-width: 1536px;
      display: grid;
      place-content: center;
      `

const jumbotronTitle = css`
      font-size: ${typography.text.headline3}px;
      `
