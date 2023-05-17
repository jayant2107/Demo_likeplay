import React from "react";
import styled from "styled-components";
import Publicnavbar from "../../Components/Publicnavbar";
import featuresData from "../../Data/PublicfeatureData";
// images
import hashimg, {
  Homecouple,
  Publicvideobg,
  Videoplaybtn,
  vidoedemobg,
  LikePlaylogo,
} from "../../Utils/images/Publichomeimg";
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
        width: 40%;
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
      h1 {
        text-align: center;
        font-size: 3rem;
        padding: 3rem;
      }
      .cards {
        display: flex;
        flex-wrap: wrap-reverse;
        padding: 0 4rem 3rem;
        justify-content: space-around;
        gap: 1rem;
        margin-top: 1rem;
      }
      .card {
        background-color: white;
        text-align: center;
        width: 15%;
        padding: 0.5rem 0.8rem;
        border-radius: 5px;
        &:nth-child(12n + 2),
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

  // -----------------------Work CSS START-------------------------------

  const WorkWrapper = styled.section`
    section {
      position: relative;
      background: url(${Publicvideobg});
      background-size: contain;
      background-repeat: no-repeat;
      height: 100vh;
      width: 100%;
      .play-button-container {
        position: absolute;
        top: 36%;
        margin-left: 45%;
      }
      .video {
        height: 90%;
        display: flex;
        justify-content: center;
        img {
          width: 80%;
        }
      }
    }
  `;

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
          <h1>Our Features</h1>
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

      {/* -------------------------Work START-----------------------------  */}

      <WorkWrapper>
        <section>
          <img src={LikePlaylogo} alt="" />
          <div className="video">
            <img src={vidoedemobg} alt="" />
          </div>

          <div className="play-button-container">
            <img src={Videoplaybtn} alt="Play" />
          </div>
        </section>
      </WorkWrapper>

      {/* -------------------------Work  END-----------------------------  */}
    </>
  );
}
