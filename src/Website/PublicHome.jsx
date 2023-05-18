import React from "react";
import styled from "styled-components";
import Publicnavbar from "../Website/components/Publicnavbar";
import featuresData, {
  workdata,
  whylikeplaydata,
} from "../Data/PublicfeatureData.jsx";
// images
import hashimg, {
  Homecouple,
  Publicvideobg,
  Videoplaybtn,
  vidoedemobg,
  LikePlaylogo,
  hearticonPA,
  iphone1,
  iphone2,
  heartborder,
  likeglow,
  whylikeheart,
  techpoint,
  thisday,
  thesun,
  thetimes,
  live,
  thegurdian,
  punch,
  contory1,
  contory2,
  contory3,
  contory4,
  contory5,
} from "../Utils/images/Publichomeimg";
// icon
// video
// import video from "../../Assets/Images/DAKU - INDERPAL MOGA - CHANI NATTAN - NEW PUNJABI SONG 2022 - LATEST PUNJABI SONG 2022 -.mp4";

export default function Publichome() {
  // video Logic
  // const videoRef = useRef();
  // const [isPlaying, setIsPlaying] = useState(false);

  // const handleVideoClick = () => {
  //   if (videoRef.current.paused) {
  //     videoRef.current.play();
  //     setIsPlaying(true);
  //   } else {
  //     videoRef.current.pause();
  //     setIsPlaying(false);
  //   }
  // };
  // -----------------------MainWrapper CSS START-------------------------------

  // -----------------------MainWrapper CSS END-------------------------------

  const MainWrapper = styled.main`
    main {
      background: url(${Homecouple});
      background-size: cover;
      line-height: 3rem;
      height: 100vh;
      color: white;
      section {
        position: relative;
        top: 23%;
        /* width: 40%; */
        margin-left: 11%;
        h3 {
          letter-spacing: 3px;
          font-weight: 400;
        }
        .hash {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            margin-right: 5px;
          }
        }
        h1 {
          letter-spacing: 2px;
          font-size: 3rem;
        }
        .nigeria {
          letter-spacing: 0px !important;
        }
        button {
          margin-top: 1.5rem;
          width: 127px;
          height: 49.2px;
          border-radius: 10px;
          border: none;
          color: white;
          font-weight: bold;
          cursor: pointer;
          background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
          &:hover {
            background: transparent;
            border: 1px solid #ff2c5a;
          }
        }
      }
    }
  `;

  // -------------------------Our Features CSS START-----------------------------

  // -----------------------Work CSS END--------------------------------

  const Featurewrapper = styled.section`
    section {
      background: linear-gradient(268.55deg, #ffdbac 0%, #ffcebb 100%);
      .head {
        display: flex;
        justify-content: center;
        h1 {
          text-align: center;
          font-size: 3rem;
          padding: 3rem 0;
        }
        img {
          position: relative;
          top: -20px;
          left: -20px;
        }
      }
      .cards {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4rem 3rem;
        justify-content: space-around;
        gap: 10px;
        margin-top: 1rem;
      }
      .card {
        background-color: white;
        text-align: center;
        width: 180px;
        margin-bottom: 5px;
        padding: 0.5rem 0.8rem;
        border-radius: 5px;
        &:nth-child(2),
        &:nth-child(12n + 4),
        &:nth-child(12n + 6),
        &:nth-child(12n + 8),
        &:nth-child(12n + 10),
        &:nth-child(12n + 12) {
          position: relative;
          top: -2rem;
        }
        &:hover {
          background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
          color: white;
        }
        .imgdiv {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          margin: auto;
          background-color: red;
          img {
            position: relative;
            top: 30%;
          }
        }
        h4 {
          font-size: 16px;
          margin: 0.7rem;
        }
        p {
          font-size: 13px;
        }
      }
    }
  `;

  // -------------------------Our Features CSS END-----------------------------

  // -----------------------VIDEO CSS START-------------------------------

  const VideoWrapper = styled.section`
    section {
      position: relative;
      background: url(${Publicvideobg});
      background-size: contain;
      background-repeat: no-repeat;
      height: 100vh;
      width: 100%;

      .video {
        height: 90%;
        display: flex;
        justify-content: center;
        &::before {
          content: url(${LikePlaylogo});
          height: 20vh;
          position: relative;
          z-index: 1;
          top: 15%;
          left: 10%;
        }
        &::after {
          content: url(${Videoplaybtn});
          height: 20vh;
          position: relative;
          top: 40%;
          left: -44%;
          z-index: 3;
        }
        img {
          width: 80%;
        }
      }
    }
  `;
  // -----------------------VIDEO CSS END-------------------------------

  // -----------------------WORK CSS START-------------------------------

  const Workwrappper = styled.section`
    section {
      .head {
        display: flex;
        justify-content: center;
        h1 {
          text-align: center;
          font-size: 3rem;
          padding: 0 0 3rem 0;
        }
        img {
          position: relative;
          top: -45px;
          left: -20px;
        }
      }
      .cards {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4rem 3rem;
        justify-content: space-around;
        margin-top: 1rem;
        .card {
          background-color: #ffc0cb63;
          text-align: left;
          width: 180px;
          padding: 0.5rem 0.8rem;
          border-radius: 5px;
          line-height: 1.3rem;
          &:nth-child(6n + 1),
          &:nth-child(6n + 3),
          &:nth-child(6n + 5) {
            position: relative;
            top: -20px;
          }
          &:nth-child(6n + 4) {
            background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
            color: white;
            p {
              color: white;
            }
          }
          h4 {
            margin: 0.8rem 0;
          }
          p {
            color: #484848;
            font-weight: 100;
          }
          .imgdiv {
            display: flex;
            justify-content: space-between;
            h3 {
              color: #ff483c;
            }
          }
        }
      }
    }
  `;
  // -----------------------WORK CSS END-------------------------------

  /* -------------------------WHY LIKEPLAY CSS START-----------------------------  */
  const WhyLikePlay = styled.section`
    section {
      padding: 4rem 0;
      background-color: #ffdbac;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      align-items: center;
      .left {
        background-color: black;
        padding: 10rem 12rem;
        border-radius: 9px;
      }
      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 45%;
        .head {
          display: flex;
          h1 {
            font-size: 2.4rem;
          }
          img {
            position: relative;
            top: -30px;
            left: -15px;
          }
        }
      }
      .points {
        .point {
          display: flex;
          gap: 10px;
          align-items: start;
          margin: 0.8rem;
          img {
            position: relative;
            top: 5px;
          }
          p {
            line-height: 1.4rem;
          }
        }
      }
    }
  `;
  /* -------------------------WHY LIKEPLAY CSS END-----------------------------  */

  /* -------------------------MISSION VISSION START-----------------------------  */
  const Missionwrapper = styled.section`
    section {
      display: flex;
      flex-wrap: wrap;
      padding: 2rem;
      justify-content: space-around;
      .single_heart {
        display: flex;
        gap: 2px;
        margin: 0.7rem 0 0.5rem -0.9rem;
      }

      .left {
        width: 30%;
        .mission {
          .head {
            display: flex;
            align-items: center;
            h1 {
              font-family: "Oregano", cursive;
              font-weight: 400;
              font-size: 2.5rem;
              background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              span {
                font-family: sans-serif;
                font-weight: 400;
                background: linear-gradient(
                  268.55deg,
                  #000000 0%,
                  #000000 100%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-size: 2rem;
              }
            }
            img {
              position: relative;
              top: -20px;
              left: -20px;
            }
          }
          .paragraph {
            .para {
              p {
                color: #484848;
              }
            }
          }
        }
        .vision {
          .head {
            display: flex;
            align-items: center;
            h1 {
              font-family: "Oregano", cursive;
              font-weight: 400;
              font-size: 2.5rem;
              background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              span {
                font-family: sans-serif;
                font-weight: 400;
                background: linear-gradient(
                  268.55deg,
                  #000000 0%,
                  #000000 100%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-size: 2rem;
              }
            }
            img {
              position: relative;
              top: -20px;
              left: -20px;
            }
          }
          .paragraph {
            .para {
              p {
                color: #484848;
              }
            }
          }
        }
      }
      .right {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        .iphone {
          filter: drop-shadow(0 15px 15px black);
          width: 180px;
        }
        .iphone1 {
          position: relative;
          top: 3rem;
        }
        .iphone2 {
          position: relative;
          top: -3rem;
        }
        .heartborder {
          position: relative;
          top: -4rem;
          margin: 0 -10px;
          &:before {
            content: url(${likeglow});
            position: relative;
            z-index: -2;
            margin-right: -6rem;
            top: -3.5rem;
            left: 10px;
          }
          &:after {
            content: url(${heartborder});
            position: relative;
            z-index: -1;
            margin-left: -3rem;
          }
        }
      }
    }
  `;

  /* -------------------------MISSION VISSION END-----------------------------  */

  /* -------------------------Countries we Host START-----------------------------  */
  const Countries = styled.section`
    section {
      padding: 2rem 4rem 3rem;
      background: linear-gradient(268.55deg, #ffdbac 0%, #ffcebb 100%);
      .top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
          margin: 1rem;
          font-size: 2rem;
        }
      }
      .bottom {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        gap: 1rem;
        .card {
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          background-color: red;
          width: 200px;
          height: 200px;
        }
        .card1 {
          background: url(${contory1});
          background-position: center;
          background-repeat: no-repeat;
        }
        .card2 {
          background: url(${contory2});
          background-position: center;
          background-repeat: no-repeat;
        }
        .card3 {
          background: url(${contory3});
          background-position: center;
          background-repeat: no-repeat;
        }
        .card4 {
          background: url(${contory4});
          background-position: center;
          background-repeat: no-repeat;
        }
        .card5 {
          background: url(${contory5});
          background-position: center;
          background-repeat: no-repeat;
        }
      }
    }
  `;

  /* -------------------------Countries we Host END-----------------------------  */

  /* -------------------------As featured In CSS START-----------------------------  */
  const Featured = styled.section`
    section {
      padding: 4rem;
      h1 {
        font-family: Poppins;
        font-size: 2rem;
        text-align: center;
      }
      .feature_imgs {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
      }
    }
  `;

  /* -------------------------As featured In CSS END-----------------------------  */

  return (
    <>
      {/* -----------------------MainWrapper START------------------------------- */}

      <MainWrapper>
        <main>
          <Publicnavbar />
          <section>
            <h3>Find Your Love on the</h3>
            <div className="hash">
              <img src={hashimg} alt="icon" />
              <h1>Dating site</h1>
            </div>
            <h1 className="nigeria">in Nigeria</h1>
            <button>Start Dating</button>
          </section>
        </main>
      </MainWrapper>

      {/* -----------------------MainWrapper END------------------------------- */}

      {/* -------------------------Our Features START-----------------------------  */}
      <Featurewrapper>
        <section>
          <div className="head">
            <h1>Our Features</h1>
            <img src={hearticonPA} alt="" />
          </div>
          <div className="cards">
            {featuresData.map((ele) => {
              return (
                <>
                  <div className="card">
                    <div className="imgdiv">
                      <img src={ele.logo} alt="" />
                    </div>
                    <h4>{ele.heading}</h4>
                    <p>{ele.paragraph}</p>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </Featurewrapper>

      {/* -------------------------Our Features END-----------------------------  */}

      {/* -------------------------VIDEO START-----------------------------  */}

      <VideoWrapper>
        <section>
          {/* <img src={LikePlaylogo} alt="" /> */}
          <div className="video">
            <img src={vidoedemobg} alt="" />
          </div>
        </section>
      </VideoWrapper>

      {/* -------------------------VIDEO  END-----------------------------  */}

      {/* -------------------------WORK START-----------------------------  */}

      <Workwrappper>
        <section>
          <div className="head">
            <h1>How It Works</h1>
            <img src={hearticonPA} alt="" />
          </div>
          <div className="cards">
            {workdata.map((ele) => {
              return (
                <>
                  <div className="card">
                    <div className="imgdiv">
                      <img src={ele.logo} alt="" />
                      <h3>{ele.count}</h3>
                    </div>
                    <h4>{ele.head}</h4>
                    <p>{ele.paragraph}</p>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </Workwrappper>
      {/* -------------------------WORK END-----------------------------  */}

      {/* -------------------------WHY LIKEPLAY START-----------------------------  */}
      <WhyLikePlay>
        <section>
          <div className="left">
            <img src={LikePlaylogo} alt="" />
          </div>
          <div className="right">
            <div className="head">
              <h1>Why LikePlay-LikePlay.COM</h1>
              <img src={hearticonPA} alt="" />
            </div>
            <div className="points">
              {whylikeplaydata.map((ele) => {
                return (
                  <>
                    <div className="point">
                      <img src={ele.heartlogo} alt="" />
                      <p>{ele.paragraph}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </WhyLikePlay>
      {/* -------------------------WHY LIKEPLAY END-----------------------------  */}

      {/* -------------------------MISSION VISSION START-----------------------------  */}
      <Missionwrapper>
        <section>
          <div className="left">
            <div className="mission">
              <div className="head">
                <h1>
                  <span>Our</span>Mission
                </h1>
                <img src={hearticonPA} alt="" />
              </div>
              <div className="paragraph">
                <div className="single_heart">
                  <img src={whylikeheart} alt="" />
                  <h4>Our Mission is simple.</h4>
                </div>
                <div className="para">
                  <p>
                    Our Mission is simple.Help Africans find love in a truly
                    authentic African way. We want to give women the chance to
                    have it all without stigma or guilt. We want men to realize
                    love, and true partners are to be celebrated!
                  </p>
                  <p>
                    LikePlay-LikePlay.com Mission is opening up our beautiful
                    homelands (countries) to connect, find love, have fun,
                    interact as much as possible and keep it real using tech as
                    a vehicle. Our style is African, we are so proud to run it.
                  </p>
                </div>
              </div>
            </div>
            <div className="vision">
              <div className="head">
                <h1>
                  <span>Our</span>Vission
                </h1>
                <img src={hearticonPA} alt="" />
              </div>
              <div className="paragraph">
                <div className="single_heart">
                  <img src={whylikeheart} alt="" />
                  <h4>Our Mission is simple.</h4>
                </div>
                <div className="para">
                  <p>
                    Using our common cultural disposition towards Play, and Love
                    we want to bring down the dividing walls around the
                    continent; and create a platform for interaction.
                  </p>
                  <p>
                    We want to encourage more female participation in online
                    forums and to make their voices heard. To help the women in
                    Africa build the future and lifestyle they can have as
                    lovers, and achievers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={iphone1} alt="" className="iphone iphone1" />
            <div className="heartborder"></div>
            <img src={iphone2} alt="" className="iphone iphone2" />
          </div>
        </section>
      </Missionwrapper>
      {/* -------------------------MISSION VISSION END-----------------------------  */}

      {/* -------------------------Countries we Host START-----------------------------  */}

      <Countries>
        <section>
          <div className="top">
            <img src={LikePlaylogo} alt="" />
            <h1>Countries we Host</h1>
          </div>
          <div className="bottom">
            <div className="card card1">
              <h4>Nigera</h4>
            </div>
            <div className="card card2">
              <h4>Congo</h4>
            </div>
            <div className="card card3">
              <h4>Ghana</h4>
            </div>
            <div className="card card4">
              <h4>South Africa</h4>
            </div>
            <div className="card card5">
              <h4>Côte d'Ivoire</h4>
            </div>
          </div>
        </section>
      </Countries>

      {/* -------------------------Countries we Host END-----------------------------  */}

      {/* -------------------------As featured In START-----------------------------  */}
      <Featured>
        <section>
          <h1>As featured In</h1>
          <div className="feature_imgs">
            <img src={techpoint} alt="" />
            <img src={thisday} alt="" />
            <img src={thesun} alt="" />
            <img src={thetimes} alt="" />
            <img src={live} alt="" />
            <img src={thegurdian} alt="" />
            <img src={punch} alt="" />
          </div>
        </section>
      </Featured>

      {/* -------------------------As featured In END-----------------------------  */}
    </>
  );
}
