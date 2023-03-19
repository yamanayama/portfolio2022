/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import Header from '../components/layouts/Header'

const Skill = () => {
  return (
    <div css={container}>
      skillがはいる
      <Header />
    </div>
  );
}

export default Skill

const container = css`
  min-height: 100vh;
  background-color: #FFF1F7;
  font-size: 24px;
  height: 100vh;
`
