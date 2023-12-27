/** @jsxImportSource @emotion/react */

import Image from "next/image";

import { css } from "@emotion/react"

import Breadcrumbs from "../components/layouts/breadcrumbs";
import Footer from '../components/layouts/footer'
import Header from '../components/layouts/header'
import Jumbotron from "../components/layouts/jumbotron";
import Seo from "../components/layouts/seo"
import { typography, color, breakPoint, contentWidth } from '../styles/constans.js'


const Skill = () => {
  return (
    <>
      <Seo
        pageTitle={'skill'}
        pageDescription={'村上奈緒美のスキルについて'}
        pageImg={'https://portfolio2022-pi-ten.vercel.app/images/ogp.jpg'}
        pageImgWidth={1200}
        pageImgHeight={675}
      />
      <Header />
      <Jumbotron name="Skill" />
      <Breadcrumbs current="skill" />

      <main>
        <div css={container}>
          <div css={rowContainer}>
            <div css={rowBlock}>
              <h2 css={title}>ユーザーとビジネスを繋ぐ</h2>
              <p css={titleOption}>Mission</p>

              <div css={textBox}>
                <p>私たちデザイナーが「デザインは課題解決だ」と考えていても、<br />「ユーザーが必要としているもの」と「ビジネスとして提供したいもの」が、イコールになるとは限りません。</p>
                <p style={{ marginTop: 16 }}>それは提供側がユーザーのペインを理解していなかったり、<br />
                  目の前の利益や数字を追いかけ過ぎていたり…。</p>
                <p style={{ marginTop: 16 }}>私たちデザイナーは、ユーザーのためのプロダクト作りを最優先にし、<br />同時にビジネスとして利益を得るバランスを考え続けるべきだと考えています。</p>
                <p style={{ marginTop: 16 }}>デザインがプロダクトを前進させ、利益を産むと証明できれば、<br />デザイナーの給与が上がることに繋がるはず。</p>
                <p style={{ marginTop: 16 }}>ビジネス、エンジニアリングと並び、デザインの視点でプロダクトを前進させていくことが、私のミッションです。</p>
              </div>
            </div>
            <div css={rowImageWrap}>
              <Image
                css={rowImage}
                src="/images/business.jpg"
                alt="business"
                width={542}
                height={400}
              />
            </div>
          </div>
        </div>
        <div css={containerInBox}>
          <div css={inner}>
            <h2 css={title}>Value</h2>
            <p css={titleOption}>提供価値</p>
            <div css={rowContainer}>
              <div css={rowBlock}>
                <h3 css={subTitle}>リサーチから画面設計、実装まで</h3>
                <p style={{ marginTop: 16 }}>課題に対する問いの立案から始め、調査設計書の作成とリサーチ、UI作成、Reactなどの実装までワンストップで行います。<br />
                  リサーチからUIまでを一人で行うことで、プロトタイプの仮説検証サイクルを高速で回すことが可能です。</p>
              </div>
              <div css={rowBlock}>
                <h3 css={subTitle}>スタートアップも、グロースアップも</h3>
                <p style={{ marginTop: 16 }}>リーンスタートアップの開発手法に則ったMVP開発の経験から、既存サービスのABテスト、グロースアップも経験しています。</p>
                <p>特に不確実性の高いスタートアップでは「プロダクトを作っては壊す」を繰り返しますが、それを楽しむマインドも持っています。</p>
              </div>
            </div>

            <div css={rowContainer}>
              <div css={rowBlock}>
                <h3 css={subTitle}>他職種とのチーム開発が大好き</h3>
                <p style={{ marginTop: 16 }}>デザインとリサーチの民主化を心がけ、作ったもの、調査したものはスピーディに共有します。</p>
                <p>エンジニアやマーケターとの協業が得意で、全員でプロダクトを前に進めることを意識しています。</p>
              </div>
              <div css={rowBlock}>
                <h3 css={subTitle}>デザインチームの推進</h3>
                <p style={{ marginTop: 16 }}>自分自身のスキルアップはもちろん、「みんなで強くなる」ために、社内外でのデザイナー向けの勉強会、イベントの登壇や運営をしています。</p>
                <p>0から物事を進めることが得意で、直近で行っていたUXリサーチの推進活動では、様々な事業部にてリサーチを導入させていただきました。</p>
              </div>
            </div>
          </div>
        </div>

        <div css={container}>
          <h2 css={title}>Skill</h2>
          <p css={titleOption}>業務経験・スキル</p>
          <div css={textBox}>

            <p>新規事業開発チームにてUXリサーチ、仮説検証、MVP開発を行なっています。<br />
              また、半年ほど社内のUXリサーチ普及活動にも携わり、<br />さまざまな事業部へ社内コンサルタントとしてリサーチを牽引しています。</p>

            <p style={{ marginTop: 16 }}>開発面では、スクラム形式での開発を行なっており、UXリサーチで洗い出した仮説を元に、<br />UI設計からReactでの実装（主にマークアップ、CSS、簡単な状態管理周り）や、ノーコード開発を行なっています。</p>
          </div>

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
            <h2 css={title}>Lack of experience</h2>
            <p css={titleOption}>経験不足な領域</p>
            <p css={textBox}>マネジメント、ブランディング、マス広告などのグラフィックデザインです。 <br />
              また、単純作業の繰り返しや、作業者的な業務は向いていません。</p>
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
    max-width: ${contentWidth};
    margin: auto;
    padding: 0 16px;

    @media (min-width: ${breakPoint}) {
      padding: 0;
    }

`

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
        margin-top:40px;
      }
      `

const rowContainer = css`

    @media (min-width: ${breakPoint}) {
      align-items: flex-start;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
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

const rowImageWrap = css`
    margin-top: 40px;
    text-align: center;

    @media (min-width: ${breakPoint}) {
        margin-top: 0;
        text-align: left;
      }
        `

const rowImage = css`
        width: max(100%,474px);
        height: 400px;
        border-radius: 24px;
        `
