/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"

import { typography, contentWidth, breakPoint } from '../../styles/constans.js'

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


const jumbotron = css`
      max-width: ${contentWidth};
      margin: 72px 16px 0;

      @media (min-width: ${breakPoint}) {
        margin: 94px auto 0;
      }
      `

const jumbotronTitle = css`
      font-size: ${typography.text.headline4}px;
      font-weight: bold;
      letter-spacing: 0.2em;
      text-align: left;
      
      @media (min-width: ${breakPoint}) {
        font-size: ${typography.text.headline2}px;
      }
      `
