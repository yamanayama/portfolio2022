/** @jsxImportSource @emotion/react */
import Image from "next/image";

import { css } from "@emotion/react"

import Breadcrumbs from "../components/layouts/breadcrumbs";
import Footer from '../components/layouts/footer'
import Header from '../components/layouts/header'
import Jumbotron from "../components/layouts/jumbotron";
import Seo from "../components/layouts/seo"
import { typography, color, breakPoint, contentWidth } from '../styles/constans.js'


const Profile = () => {
  return (
    <>
      <Seo
        pageTitle={'profile'}
        pageDescription={'村上奈緒美の自己紹介です'}
        pageImg={'https://portfolio2022-pi-ten.vercel.app/images/ogp.jpg'}
        pageImgWidth={1200}
        pageImgHeight={675}
      />
      <Header />
      <Jumbotron name="Profile" />
      <Breadcrumbs current="profile" />

      <main>
        <div css={container}>
          <div css={profileBlock}>
            <div css={profileImageWrap}>
              <Image
                css={profileImage}
                src="/images/profile1.jpg"
                alt="profile"
                width={542}
                height={400}
              />
            </div>

            <div css={profileText}>
              <h3 css={nameTitle}>Naomi Murakami<br />
                <small css={subTitleSmall}>村上 奈緒美 / Designer</small></h3>
              <div css={textBox}>
                <p>
                  広告系の専門学校を卒業後、絵の具の販売員やゲームイラストレーターを経て、WEB業界へ。
                  現在は事業会社のUIUXデザイナーです。<br />
                  UXリサーチからUI制作、フロントエンド実装まで幅広く担当します。</p>

                <p style={{ marginTop: 16 }}>好きなものは猫、コーヒー、激辛料理。<br />
                  最近は3Dと東海オンエアにはまっています。<br />
                  現在は子育てに奮闘中🔥</p>
              </div>

            </div>
          </div>

          <div css={profileBlock}>
            <div css={profileImageWrap}>
              <Image
                css={profileImage}
                src="/images/profile2.jpg"
                alt="profile"
                width={542}
                height={400}
              />
            </div>
            <div css={profileText}>
              <h3 css={profileTitle}>モットーは、<br />明るく、楽しく、元気よく</h3>
              <div css={textBox}>
                <p>一人でもくもく作るのも大好きだけど、<br />やっぱりチームでものを作るのが好き！</p>
                <p style={{ marginTop: 16 }}>平和主義で協調性が高く、フォロワーシップが強い性格ですが、
                  仲間を集め、0から物事をスタートさせることも得意です。</p>
                <p>逆に言えば、トップダウン的な強いリーダーシップの発揮は苦手です。</p>
              </div>
            </div>
          </div>

          <div css={profileBlock}>
            <div css={profileImageWrap}>
              <Image
                css={profileImage}
                src="/images/profile3.jpg"
                alt="profile"
                width={542}
                height={400}
              />
            </div>
            <div css={profileText}>
              <h3 css={profileTitle}>ステージが変わっても<br />走り続ける</h3>
              <div css={textBox}>
                <p>今まで好き勝手に走っていた自分にも子供が生まれ、「母親」の役割ができました。</p>
                <p style={{ marginTop: 16 }}>子供はとても可愛いらしく、何よりも大切な存在です。<br />
                  ですが、子供を理由にキャリアを諦めたくありません。</p>
                <p style={{ marginTop: 16 }}>人生のステージが変わろうと、私は私のキャリアを全力で走り続けます。</p>
              </div>
            </div>
          </div>
        </div>

        <div css={containerInBox}>
          <div css={inner}>
            <h2 css={title}>Ideal</h2>
            <p css={titleOption}>理想の姿</p>
            <div css={textBlock}>
              <div css={textBox}>
                <h3 css={subTitle} style={{ marginTop: 32 }}>より良い社会を作る</h3>
                <p style={{ marginTop: 16 }}>元々「社会に必要とされる人間になりたい」という想いが強く、<br />
                  右耳が聞こえないことから、いつか社会福祉に携わりたいと考えていましたが、<br />
                  現在は子供が生まれ、「この子が安心して、幸せに暮らせる社会を作りたい」という想いに変化しました。</p>
                <p style={{ marginTop: 16 }}>例えば日常生活、医療、食、お金、遊びなど、生きていく中での悩みや不安に寄り添い、<br />
                  解決への手助けをしていけるようなプロダクトを作ることで、社会貢献していきたいと考えています。</p>
              </div>

              <div css={textBox}>
                <h3 css={subTitle}>デザイナーの価値を向上させる</h3>
                <p style={{ marginTop: 16 }}>デザインにはプロダクトを前進させる力があります。<br />
                  それはデザインが表層だけではなく、プロダクトを通し、ユーザーの悩みを解決することで、<br />
                  ユーザーの生活や行動を変える力があるからです。</p>
                <p style={{ marginTop: 16 }}>ですが、日本の組織ではまだまだデザインの価値は低く、デザイナーの給与は低いです。</p>
                <p style={{ marginTop: 16 }}>私はデザイナーの価値を向上させ、給与水準を上げていきます。</p>
              </div>
            </div>
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
        background: ${color.white};
        margin: auto;
        padding: 60px 16px;

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

const titleOption = css`
        color: ${color.blown};
        font-size: ${typography.text.caption}px;
        letter-spacing: 0.1em;
        `

const subTitle = css`
        font-size: ${typography.text.headline5}px;
        font-weight: bold;
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

          &:nth-of-type(2){
            flex-direction: row-reverse;
          }
  
        }
        `

const profileText = css`
      margin-top: 24px;

        @media (min-width: ${breakPoint}) {
          margin-top: 0;
          padding-top: 24px;
          width: calc(100% - 542px - 32px);
      }
        `

const profileImageWrap = css`
    text-align: center;

    @media (min-width: ${breakPoint}) {
        text-align: left;
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

const profileTitle = css`
      font-size: ${typography.text.headline4}px;
      font-weight: bold;
      `

const subTitleSmall = css`
      font-size: ${typography.text.body2}px;
      font-weight: 400;
      `