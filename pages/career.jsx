/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Header from '../components/layouts/Header'

const Career = () => {
  return (
    <div css={container}>
      Careerがはいる
      <Header />
    </div>
  );
}

export default Career

const container = css`
  min-height: 100vh;
  background-color: #FFF1F7;
  font-size: 24px;
  height: 100vh;
`
