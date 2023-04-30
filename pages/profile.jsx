/** @jsxImportSource @emotion/react */
import Image from "next/image";

import { css } from "@emotion/react"

import Breadcrumbs from "../components/layouts/breadcrumbs";
import Footer from '../components/layouts/footer'
import Header from '../components/layouts/header'
import Jumbotron from "../components/layouts/jumbotron";
import { typography, color, breakPoint, contentWidth } from '../styles/constans.js'


const Profile = () => {
  return (
    <>
      <Header />
      <Jumbotron name="Profile" />
      <Breadcrumbs current="profile" />

      <main>
        <div css={container}>
          <div css={profileBlock}>
            <Image
              css={profileImage}
              src="/images/profile1.jpg"
              alt="profile"
              width={352}
              height={400}
            />

            <div css={profileText}>
              <h3 css={nameTitle}>Naomi Murakami<br />
                <small css={subTitleSmall}>村上 奈緒美 / Designer</small></h3>

              <p style={{ marginTop: 40 }}>
                広告系の専門学校を卒業後、絵の具の販売員やゲームイラストレーターを経て、WEB業界へ。
                現在は事業会社のUIUXデザイナーです。<br />
                UXリサーチからUI制作、フロントエンド実装まで幅広く担当します。</p>

              <p style={{ marginTop: 16 }}>好きなものは猫、コーヒー、激辛料理。<br />
                最近は3Dと東海オンエアにはまっています。<br />
                現在は子育てに奮闘中🔥</p>

            </div>
          </div>

          <div css={profileBlock}>
            <div css={profileText}>
              <h3 css={nameTitle}>Naomi Murakami</h3>

              <p style={{ marginTop: 40 }}>
                広告系の専門学校を卒業後、絵の具の販売員やゲームイラストレーターを経て、WEB業界へ。
                現在は事業会社のUIUXデザイナーです。<br />
                UXリサーチからUI制作、フロントエンド実装まで幅広く担当します。</p>

              <p style={{ marginTop: 16 }}>好きなものは猫、コーヒー、激辛料理。<br />
                最近は3Dと東海オンエアにはまっています。<br />
                現在は子育てに奮闘中🔥</p>

            </div>
            <Image
              css={profileImage}
              src="/images/profile1.jpg"
              alt="profile"
              width={352}
              height={400}
            />
          </div>

          <div css={profileBlock}>
            <Image
              css={profileImage}
              src="/images/profile1.jpg"
              alt="profile"
              width={352}
              height={400}
            />

            <div css={profileText}>
              <h3 css={nameTitle}>Naomi Murakami<br />
                <small css={subTitleSmall}>村上 奈緒美 / Designer</small></h3>

              <p style={{ marginTop: 40 }}>
                広告系の専門学校を卒業後、絵の具の販売員やゲームイラストレーターを経て、WEB業界へ。
                現在は事業会社のUIUXデザイナーです。<br />
                UXリサーチからUI制作、フロントエンド実装まで幅広く担当します。</p>

              <p style={{ marginTop: 16 }}>好きなものは猫、コーヒー、激辛料理。<br />
                最近は3Dと東海オンエアにはまっています。<br />
                現在は子育てに奮闘中🔥</p>

            </div>
          </div>
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
                UXリサーチ</p>
            </div>
            <div css={rowBlock}>
              <p css={rowTitle}>
                UI作成（Figmaなど）</p>
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

export default Profile


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
        max-width: ${contentWidth}px;
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

const profileBlock = css`

        &:not(:first-of-type){
          margin-top: 60px;
        }
  
        @media (min-width: ${breakPoint}) {
          align-items: flex-start;
          display: flex;
          justify-content: space-between;

          &:not(:first-of-type){
            margin-top: 120px;
          }
  
        }
        `

const profileText = css`
        margin-top: 24px;
  
        @media (min-width: ${breakPoint}) {
          margin-top: 0;
          width: calc(100% - 352px - 32px);
      }
        `

const profileImage = css`
        width: max(100%,474px);
        height: 474px;
        border-radius: 24px;
        `

const nameTitle = css`
      font-size: ${typography.text.headline4}px;
      font-weight: bold;
      line-height: 1;
      `

const subTitleSmall = css`
      font-size: ${typography.text.body2}px;
      font-weight: 400;
      `