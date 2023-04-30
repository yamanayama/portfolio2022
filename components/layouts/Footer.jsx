/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import FacebookIcon from "../../public/images/facebookIcon.svg";
import TwitterIcon from "../../public/images/twitterIcon.svg";
import { color, breakPoint, typography, contentWidth } from '../../styles/constans'


const Footer = () => {

  return (
    <footer css={container}>
      <div css={inner}>
        <h2 css={title}>Follow me</h2>
        <div css={snsLink}>
          <a href="https://twitter.com/yamanayama" target="_blank" rel="noreferrer">
            <TwitterIcon
              width={40}
              height={40}
              stroke={"#fff"}
              fill={"#fff"}
              css={iconStyle}
            ></TwitterIcon>
          </a>
          <a href="https://www.facebook.com/naomimurakami0203" target="_blank" rel="noreferrer">
            <FacebookIcon
              width={40}
              height={40}
              stroke={"#fff"}
              fill={"#fff"}
              css={iconStyle}
            ></FacebookIcon>
          </a>
        </div>
      </div>

      <p css={copyright}>Copyright 2023 Naomi Murakami All rights reserved.</p>
    </footer>
  )
}

export default Footer

const container = css`
    color: ${color.white};
    background: ${color.blown};
    font-size: ${typography.text.caption}px;
    margin: auto;
    padding: 40px 16px;
    text-align: center;

    @media (min-width: ${breakPoint}) {
      padding: 90px 24px 24px;
    }
`;

const inner = css`
      max-width: ${contentWidth};
      margin: 0 auto 24px;
`

const title = css`
      font-size: ${typography.text.headline6}px;
      font-weight: bold;
`

const snsLink = css`
      font-size: ${typography.text.headline3}px;
      font-weight: bold;
      gap: 16px;
      display: flex;
      justify-content: center;
`

const iconStyle = css`
      fill: ${color.white};
`;

const copyright = css`
    color: ${color.white};
    font-size: 12px;
    text-align: center;
`;
