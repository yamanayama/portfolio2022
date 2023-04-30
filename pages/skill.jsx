/** @jsxImportSource @emotion/react */


import { css } from "@emotion/react"

import Breadcrumbs from "../components/layouts/breadcrumbs";
import Footer from '../components/layouts/footer'
import Header from '../components/layouts/header'
import Jumbotron from "../components/layouts/jumbotron";
import { typography, color, breakPoint, contentWidth } from '../styles/constans.js'


const Skill = () => {
  return (
    <>
      <Header />
      <Jumbotron name="Skill" />
      <Breadcrumbs current="skill" />

      <main>
        <div css={container}>
          <h2 css={title}>ユーザーとビジネスを繋ぐ</h2>
          <p css={titleOption}>Mission</p>

          <p style={{ marginTop: 16 }}></p>
          <p>っっっっw</p>
          <p>っっっっw</p>
        </div>

        <div css={containerInBox}>
          <div css={inner}>
            <h2 css={title}>提供価値</h2>
            <p css={titleOption}>Value</p>
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
          </div>
        </div>

        <div css={container}>
          <h2 css={title}>業務経験・スキル</h2>
          <p css={titleOption}>Skills</p>
          <p style={{ marginTop: 32 }}>新規事業開発チームにてUXリサーチ、仮説検証、MVP開発を行なっています。<br />
            また、半年ほど社内のUXリサーチ普及活動にも携わり、<br />さまざまな事業部へ社内コンサルタントとしてリサーチを牽引しています。</p>

          <p style={{ marginTop: 16 }}>開発面では、スクラム形式での開発を行なっており、UXリサーチで洗い出した仮説を元に、<br />UI設計からReactでの実装や、ノーコード開発を行なっています。</p>


          <div css={rowContainer}>
            <div css={rowBlock}>
              <p css={rowTitle}>
                🔍 UXリサーチ</p>
            </div>
            <div css={rowBlock}>
              <p css={rowTitle}>
                📐 UI作成（Figmaなど）</p>
            </div>
            <div css={rowBlock}>
              <p css={rowTitle}>
                👩‍💻 React/TypeScript/emotion</p>
            </div>
            <div css={rowBlock}>
              <p css={rowTitle}>
                🏃 スクラム開発</p>
            </div>
            <div css={rowBlock}>
              <p css={rowTitle}>
                📊 グロースハック</p>
            </div>
            <div css={rowBlock}>
              <p css={rowTitle}>
                🧪 ABテスト</p>
            </div>
            <div css={rowBlock}>
              <p css={rowTitle}>
                🎨 ゲームイラスト</p>
            </div>
            <div css={rowBlock}>
              <p css={rowTitle}>
                🐰アニメーション</p>
            </div>
          </div>
        </div>

        <div css={containerInBox}>
          <div css={inner}>
            <h2 css={title}>経験不足な領域</h2>
            <p css={titleOption}>Lack of experience</p>
            <p css={textBox}>マネジメント、ブランディング、マス広告などのグラフィックデザイン</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Skill

const container = css`
      margin: auto;
      max-width: ${contentWidth};
      padding: 64px 16px;

      @media (min-width: ${breakPoint}) {
        padding: 96px 0;
      }
    `

const containerInBox = css`
    background: ${color.gray[10]};
    margin: auto;
    padding: 64px 0;

    @media (min-width: ${breakPoint}) {
      padding: 96px 0;
    }

  `

const inner = css`
    max-width: 1164px;
    margin: auto;
    padding: 0 16px;

    @media (min-width: ${breakPoint}) {
      padding: 0;
    }

`

const title = css`
      font-size: ${typography.text.headline4}px;
      font-weight: bold;
      letter-spacing: 0.1em;
      line-height: 1.3;
      `

const titleOption = (textcolor) => css`
      color: ${textcolor === "background" ? color.salmon : color.blown};
      font-size: ${typography.text.caption}px;
      letter-spacing: 0.1em;
`

const subTitle = css`
      font-size: ${typography.text.headline5}px;
      font-weight: bold;
`

const rowTitle = css`
      font-size: ${typography.text.headline5}px;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 8px;
`

const textBox = css`
      margin-top:24px;

      @media (min-width: ${breakPoint}) {
        margin-top:64px;
      }
      `

const rowContainer = css`

    @media (min-width: ${breakPoint}) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 24px;
      margin-top:64px;
    }
  `


const rowBlock = css`
    margin-top: 24px;

    @media (min-width: ${breakPoint}) {
        width: calc(50% - 24px);
        margin-top: 0;
      }
`

const iconStyle = css`
    stroke: ${color.text.high};
`;