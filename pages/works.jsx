/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Header from '../components/layouts/Header'

const Works = () => {
  return (
    <div css={container}>
      Worksがはいる
      <Header />
    </div>
  );
}

export default Works

const container = css`
  font-size: 24px;
  min-height: 100vh;
  background-color: #FFF1F7;
  height: 100vh;
`
