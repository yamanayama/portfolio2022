/** @jsxImportSource @emotion/react */
import Image from "next/image"
import Router from 'next/router'

import { css } from "@emotion/react"

import Button from '../components/elements/Button'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import { typography, color, breakPoint } from '../styles/constans.js'


const Home = () => {
  return (
    <>
      <Header />
      <div css={FirstView}>
        <div css={hero}>
          <div css={catchCopy}>
            <div css={catchCopyBlock}>
              <div css={catchCopySubTitle}>Hello,</div>
              <div css={catchCopyTitle}>Naomi <span css={catchCopyTitleLiner}>Murakami</span></div>
            </div>
            <p css={catchCopyText}>UI/UX/Product designer</p>
          </div>
        </div>
      </div>

      <div css={container}>
        <h2 css={title}>Profile</h2>
        <p css={titleOption}>はじめまして</p>

        <div css={profileBlock}>
          <Image
            css={profileImage}
            src="/images/profile.jpg"
            alt="profile"
            width={328}
            height={328}
          />

          <div css={profileText}>
            <h3 css={nameTitle}>Naomi Murakami<br />
              <small css={subTitleSmall}>村上 奈緒美 / Designer</small></h3>

            <p style={{ marginTop: 40 }}>
              広告系の専門学校を卒業後、絵の具の販売員やゲームイラストレーターを経て、WEB業界へ。
              現在は事業会社のUIUXデザイナーです。<br />
              UXリサーチからUI制作、フロントエンド実装まで幅広く担当します。<br />

              <p style={{ marginTop: 16 }}>好きなものは猫、コーヒー、激辛料理。<br />
                最近は3Dと東海オンエアにはまっています。</p>
              現在は子育てに奮闘中🔥</p>
            <Button type="button">more</Button>

          </div>

        </div>


      </div>
      <div css={containerInBox}>
        <div css={inner}>
          <h2 css={title}>Ideal</h2>
          <p css={titleOption("background")}>目指している理想の姿</p>
          <div css={textBlock}>
            <div css={textBox}>
              <h3 css={subTitle} style={{ marginTop: 32 }}>より良い社会を作る</h3>
              <p style={{ marginTop: 16 }}>元々「社会に必要とされる人間になりたい」と思っていましたが、<br />
                子供が生まれ、「この子が安心して、幸せに暮らせる社会にしたい」という想いに変化しました。</p>
              <p style={{ marginTop: 16 }}>例えば日常生活、医療、食、お金、遊びなど、生きていく中での悩みや不安に寄り添い、<br />解決への手助けをしていけるようなプロダクトを作ることで、社会貢献していきたいと考えています。</p>
            </div>

            <div css={textBox}>
              <h3 css={subTitle}>デザイナーの価値を向上させる</h3>
              <p style={{ marginTop: 16 }}>っっっっw</p>
              <p>っっっっw</p>
              <p>っっっっw</p>
            </div>
          </div>
        </div>
      </div>

      <div css={container}>
        <h2 css={title}>Value</h2>
        <p css={titleOption}>提供価値</p>

        <div css={rowContainer}>
          <div css={rowBlock}>
            <h3 css={subTitle}>サブタイトル</h3>
            <p style={{ marginTop: 16 }}>っっっっw</p>
            <p>っっっっw</p>
            <p>っっっっw</p>
          </div>
          <div css={rowBlock}>
            <h3 css={subTitle}>サブタイトル</h3>
            <p style={{ marginTop: 16 }}>っっっっw</p>
            <p>っっっっw</p>
            <p>っっっっw</p>
          </div>
        </div>

        <div css={rowContainer}>
          <div css={rowBlock}>
            <h3 css={subTitle}>サブタイトル</h3>
            <p style={{ marginTop: 16 }}>っっっっw</p>
            <p>っっっっw</p>
            <p>っっっっw</p>
          </div>
          <div css={rowBlock}>
            <h3 css={subTitle}>サブタイトル</h3>
            <p style={{ marginTop: 16 }}>っっっっw</p>
            <p>っっっっw</p>
            <p>っっっっw</p>
          </div>
        </div>
        <Button type="button" onClick={() => Router.push('/skill')}>more</Button>

      </div>

      <Footer />
    </>
  );
}

export default Home

const FirstView = css`
      background: ${color.background} url('/images/noelthecat4.jpg') center center / cover no-repeat ;
      height: 93vh;
      min-height: 300px;
      `

const hero = css`
      max-width: 1536px;
      display: grid;
      place-content: center;
      place-items: center;
      grid-auto-flow: column;
      gap: 16px;
      padding-top: 10vh;
      padding-bottom: 24px;
      `

const catchCopy = css`
      padding: 24px;
      `

const catchCopyBlock = css`
      line-height: 1.5;
      `

const catchCopySubTitle = css`
      font-size: ${typography.text.headline5}px;
      font-weight: bold;
      `

const catchCopyTitle = css`
      font-size: ${typography.text.headline2}px;
      font-weight: bold;
      `

const catchCopyTitleLiner = css`
      font-size: ${typography.text.headline2}px;
      font-weight: 200;
      `

const catchCopyText = css`
      font-size: ${typography.text.body3}px;
      font-weight: bold;
      margin-top: 8px;
      `

const container = css`
      margin: auto;
      max-width: 1140px;
      padding: 40px 16px;

      @media (min-width: ${breakPoint}) {
        padding: 96px 24px;
      }
    `

const containerInBox = css`
    background: ${color.blown};
    color: ${color.white};
    margin: auto;
    padding: 40px 16px;

    @media (min-width: ${breakPoint}) {
      padding: 96px 24px;
    }

  `

const inner = css`
    max-width: 1140px;
    margin: auto;

`


// const profile = css`
// `

const title = css`
      font-size: ${typography.text.headline3}px;
      font-weight: bold;
      letter-spacing: 0.1em;
      line-height: 1.3;
      `

const titleOption = (textcolor) => css`
      color: ${textcolor === "background" ? color.salmon : color.blown};
      font-size: ${typography.text.caption}px;
      letter-spacing: 0.1em;
`

const nameTitle = css`
      font-size: ${typography.text.headline4}px;
      font-weight: bold;
      line-height: 1;
      `

const subTitle = css`
      font-size: ${typography.text.headline5}px;
      font-weight: bold;
`

const subTitleSmall = css`
      font-size: ${typography.text.body2}px;
      font-weight: 400;
      `

const profileBlock = css`
      margin-top: 32px;

      @media (min-width: ${breakPoint}) {
        align-items: flex-start;
        display: flex;
        justify-content: space-between;
        margin-top: 56px;
      }
      `

const profileText = css`
      margin-top: 24px;

      @media (min-width: ${breakPoint}) {
        margin-top: 0;
        width: calc(100% - 328px - 40px);
    }
      `

const profileImage = css`
      width: max(100%,474px);
      height: 474px;
      `

const textBlock = css`
      margin-top: 32px;

      @media (min-width: ${breakPoint}) {
        margin-top: 56px;
      }
      `

const textBox = css`
      margin-top:24px;

      @media (min-width: ${breakPoint}) {
        margin-top:40px;
      }
      `

const rowContainer = css`

      @media (min-width: ${breakPoint}) {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        margin-top:40px;
      }
      `


const rowBlock = css`
    margin-top: 24px;

    @media (min-width: ${breakPoint}) {
        width: calc(50% - 24px);
        margin-top: 0;
      }
`