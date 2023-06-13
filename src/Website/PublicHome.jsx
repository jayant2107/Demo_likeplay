import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Publicnavbar from "../Website/components/Publicnavbar";
import Publicfooter from "../Website/components/Publicfooter";
import featuresData, {
  workdata,
  whylikeplaydata,
  homecontory,
} from "../Data/PublicfeatureData.jsx";
// video
import video from "../Assets/Video/Romantic.mp4";
// images
import hashimg, {
  Homecouple,
  Publicvideobg,
  Videoplaybtn,
  // vidoedemobg,
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
  LikePlayJbklutselogo,
  LikePlayTechNovalogo,
} from "../Utils/images/Publichomeimg";
import { appstore, playstore } from "Utils/Images";

export default function Publichome() {
  const navigate = useNavigate();
  const Country = (name) => {
    console.log(name);
    navigate("/Nigeria", { state: { id: name } });
  };

  // video logic
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoplay = useRef(null);
  const [playvideo, setplayvideo] = useState(true);
  const playing = () => {
    if (playvideo) {
      videoplay.current.pause();
    } else {
      videoplay.current.play();
    }
    setplayvideo(!playvideo);
  };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  // -----------------------MainWrapper CSS START-------------------------------
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

    .download-box{
      padding:30px 0px;
      p{
        letter-spacing:2px;
        font-size:16px;
        font-weight:500;

      }
      .downlaod-btn{
        display:flex;
        gap:10px;

        img{
          width:170px;
          height:50px;
        }
        @media(max-width:400px){
         img{
          width:150px;
         }
        }
      }
    }
    /* Media quary for Smart Phone responsive  */
    main {
      @media (min-width: 320px) and (max-width: 480px) {
        section {
          top: 40%;
        }
      }
    }
    /* media quary for Tablats responsive  */
    @media (min-width: 481px) and (max-width: 768px) {
      section {
        top: 42% !important;
      }
    }
    /* media quary for laptop responsive  */
    @media (min-width: 769px) and (max-width: 1024px) {
      section {
        top: 54% !important;
      }
    }
    /* media quary for large laptop responsive  */
    @media (min-width: 1025px) and (max-width: 1200px) {
      section {
        top: 44% !important;
        h3 {
          font-size: 3rem;
        }
        .hash {
          img {
            width: 100px !important;
          }
        }
        h1 {
          font-size: 6rem !important;
          line-height: 6.5rem;
        }
        button {
          font-size: 2rem;
          font-weight: 100;
          width: 300px !important;
          height: 70px !important;
        }
      }
    }
  `;
  // -----------------------MainWrapper CSS END-------------------------------

  // -------------------------Our Features CSS START-----------------------------

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
        &:nth-child(2n + 2),
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
    /* Media quary for Smart Phone responsive  */
    @media (min-width: 320px) and (max-width: 480px) {
      section {
        padding-bottom: 1rem;
        h1 {
          margin-left: 1.5rem;
          padding: 2rem 0rem 1rem 0rem !important;
        }
        .cards {
          justify-content: center;
          padding: 0;
        }
        .card {
          height: 250px;
          width: 300px;
          padding: 2rem 3rem;
          &:nth-child(2n + 2),
          &:nth-child(12n + 4),
          &:nth-child(12n + 6),
          &:nth-child(12n + 8),
          &:nth-child(12n + 10),
          &:nth-child(12n + 12) {
            position: relative;
            top: 0;
          }
        }
      }
    }
    /* media quary for Tablats responsive  */
    @media (min-width: 481px) and (max-width: 768px) {
      section {
        padding-bottom: 1rem;
        h1 {
          margin-left: 1.5rem;
          padding: 2rem 0rem 1rem 0rem !important;
        }
        .cards {
          justify-content: center;
          padding: 0;
        }
        .card {
          height: 250px;
          width: 300px;
          padding: 2rem 3rem;
          &:nth-child(2n + 2),
          &:nth-child(12n + 4),
          &:nth-child(12n + 6),
          &:nth-child(12n + 8),
          &:nth-child(12n + 10),
          &:nth-child(12n + 12) {
            position: relative;
            top: 0 !important;
          }
        }
      }
    }
    /* media quary for laptop responsive  */
    @media (min-width: 769px) and (max-width: 1024px) {
      section {
        padding: 3rem 0;
        h1 {
          margin-left: 1.5rem;
          padding: 2rem 0rem 1rem 0rem !important;
        }
        .cards {
          justify-content: center;
          padding: 0;
        }
        .card {
          margin-bottom: 10px;
          /* height: 250px; */
          width: 200px;
          padding: 2rem 3rem;
          &:nth-child(2n + 2),
          &:nth-child(12n + 5) {
            position: relative;
            top: 15px !important;
          }
          &:nth-child(12n + 8) {
            top: 0 !important;
          }
        }
      }
    }
    /* media quary for large laptop responsive  */
    @media (min-width: 1025px) and (max-width: 1200px) {
      section {
        .cards {
          padding: 0px 7rem 3rem;
        }
      }
    }
  `;

  // -------------------------Our Features CSS END-----------------------------

  // -----------------------VIDEO CSS START-------------------------------

  const VideoWrapper = styled.section`
    section {
      // position: relative;
      // top: -3rem;
      background: url(${Publicvideobg});
      background-size: cover;
      background-repeat: no-repeat;
      /* height: 100vh; */
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 0 3rem 0;
      margin-bottom: 30px 0px;

      .video {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* height: 80%; */
        width: 80%;
        cursor: pointer;
        &::before {
          content: "";
          background-image: url(${LikePlaylogo});
          background-repeat: no-repeat;
          background-position: center;
          position: absolute;
          top: 12%;
          left: 8%;
          width: 250px;
          height: 150px;
          z-index: 2;
        }
        img {
          position: relative;
          top: 23rem;
          left: 48%;
          width: 80px;
        }
        video {
          border-radius: 10px;
        }
      }
    }
    /* Media quary for Smart Phone responsive  */

    @media (min-width: 320px) and (max-width: 480px) {
      section {
        top: 0;
        height: auto;
        width: auto;
        /* padding: 1rem 0; */
        .video {
          video {
            width: 100%;
          }
          &::before {
            top: -8%;
            left: -15%;
            background-size: 30px;
          }
          img {
            position: relative;
            top: 6rem;
            left: 9rem;
            width: 30px;
          }
        }
      }
    }
    /* media quary for Tablats responsive  */
    @media (min-width: 481px) and (max-width: 768px) {
      section {
        top: 0;
        height: auto;
        width: auto;
        /* padding: 1rem 0; */
        .video {
          video {
            width: 100%;
          }
          &::before {
            top: 8%;
            left: 2%;
            background-size: 50px;
          }
          img {
            position: relative;
            top: 12rem;
            left: 19rem;
            width: 50px;
          }
        }
      }
    }
    /* media quary for laptop responsive  */
    @media (min-width: 769px) and (max-width: 1024px) {
      section {
        top: 0;
        height: auto;
        width: auto;
        /* padding: 1rem 0; */
        .video {
          video {
            width: 100%;
          }
          &::before {
            top: 8%;
            left: 2%;
            background-size: 50px;
          }
          img {
            position: relative;
            top: 12rem;
            left: 19rem;
            width: 50px;
          }
        }
      }
    }
    /* media quary for large laptop responsive  */
    @media (min-width: 1025px) and (max-width: 1200px) {
      section {
        top: 0;
        height: auto;
        width: auto;
        /* padding: 1rem 0; */
        .video {
          video {
            width: 100%;
          }
          &::before {
            top: 8%;
            left: 2%;
            background-size: 50px;
          }
          img {
            position: relative;
            top: 12rem;
            left: 19rem;
            width: 50px;
          }
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
        margin: 1.6rem 0;
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
    /* Media quary for Smart Phone responsive  */

    @media (min-width: 320px) and (max-width: 480px) {
      section {
        padding: 2rem 0;
        .head {
          h1 {
            font-size: 2.5rem;
            margin-left: 1.5rem;
            padding: 2rem 0rem 1rem 0rem !important;
          }
          img {
            top: -25px;
          }
        }
        .cards {
          justify-content: center;
          padding: 0;
        }
        .card {
          margin: 1rem;
          height: 250px;
          width: 300px !important;
          padding: 2rem 3rem;
          &:nth-child(6n + 1),
          &:nth-child(6n + 3),
          &:nth-child(6n + 5) {
            position: relative;
            top: 0px !important;
          }
        }
      }
    }
    /* media quary for Tablats responsive  */
    @media (min-width: 481px) and (max-width: 768px) {
      section {
        padding: 2rem 0;
        .head {
          h1 {
            margin-left: 1.5rem;
            padding: 2rem 0rem 1rem 0rem !important;
          }
          img {
            top: -25px;
          }
        }
        .cards {
          justify-content: center;
          padding: 0;
        }
        .card {
          margin: 0 0.8rem;
          padding: 2rem 3rem;
          &:nth-child(6n + 2) {
            position: relative;
            top: -3px !important;
          }
          &:nth-child(6n + 5) {
            top: 20px !important;
          }
        }
      }
    }
    /* media quary for laptop responsive  */
    @media (min-width: 769px) and (max-width: 1024px) {
      section {
        padding: 2rem 0;
        .head {
          h1 {
            margin-left: 1.5rem;
            padding: 2rem 0rem 1rem 0rem !important;
          }
          img {
            top: -25px;
          }
        }
        .cards {
          justify-content: center;
          padding: 0;
        }
        .card {
          margin: 0 0.8rem;
          padding: 2rem 3rem;
          &:nth-child(6n + 2) {
            position: relative;
            top: -3px !important;
          }
          &:nth-child(6n + 5) {
            top: 20px !important;
          }
        }
      }
    }
    /* media quary for large laptop responsive  */
    @media (min-width: 1025px) and (max-width: 1200px) {
      section {
        padding: 2rem 1rem !important;
        .head {
          h1 {
            margin-left: 1.5rem;
            padding: 2rem 0rem 1rem 0rem !important;
          }
          img {
            top: -25px;
          }
        }
        .cards {
          justify-content: center;
          padding: 0;
        }
        .card {
          width: 230px !important;
          margin: 0 0.8rem;
          padding: 2rem 3rem;
          &:nth-child(6n + 2) {
            position: relative;
            top: -3px !important;
          }
          &:nth-child(6n + 5) {
            top: 20px !important;
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
      display: grid;
      grid-template-columns: 40% 50%;
      justify-content: center;
      gap: 15px;
      align-items: center;
      .left {
        border-radius: 9px;
      }
      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
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
    /* Media quary for Smart Phone responsive  */

    @media (min-width: 320px) and (max-width: 480px) {
      
      section {
        grid-template-columns: 100%;
        padding: 0;
        .left {
         
        }
        .right {
          .head {
            img {
              top: 10px;
            }
          }
        }
        .points {
          width: 370px;
        }
      }
    }
    /* media quary for Tablats responsive  */
    @media (min-width: 481px) and (max-width: 768px) {
      section {
        padding: 3rem 0;
        grid-template-columns: 100%;
        .left {
         
        }
        .right {
          padding: 1rem;
          .head {
            width: 640px;
            margin: 1rem;
            img {
              top: -30px;
            }
          }
        }
        .points {
          width: 500px;
        }
      }
    }
    /* media quary for laptop responsive  */
    @media (min-width: 769px) and (max-width: 1024px) {
      section {
        padding: 3rem 0;
        grid-template-columns: 100%;
        .left {
          padding: 10rem 18rem;
        }
        .right {
          padding: 1rem;
          .head {
            width: 640px;
            margin: 1rem;
            img {
              top: -30px;
            }
          }
        }
        .points {
          width: 700px;
        }
      }
    }
    /* media quary for large laptop responsive  */
    @media (min-width: 1025px) and (max-width: 1200px) {
      section {
        .right {
          .head {
            width: 83%;
            img {
              left: -90px;
              top: 0;
            }
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
      padding: 4rem 2rem;
      justify-content: space-around;
      .single_heart {
        display: flex;
        gap: 2px;
        margin: 0.7rem 0 0.5rem -0.9rem;
      }

      .left {
        width: 30%;
        .mission {
          margin-bottom: 1rem;
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
    /* Media quary for Smart Phone responsive  */

    @media (min-width: 320px) and (max-width: 480px) {
      section {
        padding: 4rem 0;
        .left {
          width: 80%;
        }
        .right {
          margin-left: 14px;
          .heartborder {
            transform: rotate(45deg);
            top: 6rem;
            left: -11%;
            z-index: -2;
          }
          .iphone2 {
            left: 3px;
          }
        }
      }
    }
    /* media quary for Tablats responsive  */
    @media (min-width: 481px) and (max-width: 768px) {
      section {
        padding: 4rem 0;
        .left {
          width: 80%;
          .vision {
            padding: 1rem 0 0 0;
          }
        }
        .right {
          padding: 5rem 0 3rem 0;
          margin-left: 14px;
          .heartborder {
            transform: rotate(45deg);
            top: 4rem;
            z-index: -2;
          }
        }
      }
    }
    /* media quary for laptop responsive  */
    @media (min-width: 769px) and (max-width: 1024px) {
      section {
        padding: 4rem 0;
        .left {
          width: 80%;
          .vision {
            padding: 1rem 0 0 0;
          }
        }
        .right {
          padding: 5rem 0 3rem 0;
          margin-left: 14px;
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
        flex-wrap: wrap !important;
        justify-content: center;
        margin-top: 10px;
        gap: 1rem;
        cursor: pointer;
        .card {
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          /* background-color: red; */
          width: 200px;
          height: 200px;
        }
      }
    }
    /* Media quary for Smart Phone responsive  */

    @media (min-width: 320px) and (max-width: 480px) {
      section {
        padding: 2rem 0;
        .top {
          img {
            width: 70px;
          }
          h1 {
            font-size: 2.4rem;
          }
        }
        .bottom {
          .card {
            width: 300px;
            h1 {
              font-size: 2rem;
            }
          }
        }
      }
    }
    /* media quary for Tablats responsive  */
    @media (min-width: 481px) and (max-width: 768px) {
    }

    /* media quary for large laptop responsive  */
    @media (min-width: 1025px) and (max-width: 1200px) {
      section {
        padding: 2rem 0 !important;
        .bottom {
          .card {
            width: 186px;
          }
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
        align-items: center;
        gap: 1.5rem;
        img {
          width: 110px;
        }
      }
    }
    /* Media quary for Smart Phone responsive  */

    @media (min-width: 320px) and (max-width: 480px) {
      section {
        overflow: hidden;
        width: 100%;
        .feature_imgs {
          /* width: 100%; */
          white-space: nowrap;
          animation-play-state: running;
          animation: marquee 5s linear infinite;
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          &:hover {
            animation-play-state: paused;
          }
        }
      }
    }
    /* media quary for Tablats responsive  */
    @media (min-width: 481px) and (max-width: 768px) {
      section {
        overflow: hidden;
        width: 100%;
        .feature_imgs {
          /* width: 100%; */
          white-space: nowrap;
          animation-play-state: running;
          animation: marquee 5s linear infinite;
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          &:hover {
            animation-play-state: paused;
          }
        }
      }
    }
    /* media quary for laptop responsive  */
    @media (min-width: 769px) and (max-width: 1024px) {
      section {
        width: 100%;
        .feature_imgs {
          /* width: 100%; */
          white-space: nowrap;
          overflow: hidden;
          animation-play-state: running;
          animation: marquee 5s linear infinite;
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          &:hover {
            animation-play-state: paused;
          }
        }
      }
    }
    /* media quary for large laptop responsive  */
    @media (min-width: 1025px) and (max-width: 1200px) {
      section {
        overflow: hidden;
        width: 100%;
        .feature_imgs {
          /* width: 100%; */
          white-space: nowrap;
          overflow: hidden;
          animation-play-state: running;
          animation: marquee 5s linear infinite;
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          &:hover {
            animation-play-state: paused;
          }
        }
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
          <section>
            <div className="download-box">
              <p>Download the official LIKEPLAY-LIKEPLAY App</p>
              <div className="downlaod-btn">
                <a href="https://play.google.com/store/apps/details?id=com.sfs.likeplay">

                <img src={playstore} alt=""/>
                </a>
                <a href="https://apps.apple.com/us/app/like-play-like-play/id6443514088">

                <img src={appstore} alt=""/>
                </a>
                
                </div> 


            </div>
          
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
          {/* <div className="video">
            <img src={vidoedemobg} alt="" />
          </div> */}
          <div className="video">
            {/* <img src={Videoplaybtn} alt="" /> */}
            <video controls autoplay ref={videoRef} onClick={() => togglePlay}>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
            {/* <img src={LikePlaylogo} alt="" /> */}
            <div className="video">
              <video
                width="100%"
                controls
                autoplay
                ref={videoRef}
                onClick={() => togglePlay}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
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
                  <span>Our</span>Vision
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
            {homecontory.map((ele) => {
              return (
                <>
                  <div
                    onClick={() => Country(ele.conturyimageheading)}
                    className="card"
                    style={{
                      backgroundImage: `url(${ele.background})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <h1>{ele.conturyimageheading}</h1>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </Countries>

      {/* -------------------------Countries we Host END-----------------------------  */}

      {/* -------------------------As featured In START-----------------------------  */}
      <Featured>
        <section>
          <h1>As featured In</h1>
          <div className="feature_imgs">
            <a href="https://techpoint.africa/2023/03/06/likeplay-likeplay-com-1-dating-site-in-nigeria/">
              <img src={techpoint} alt="" />
            </a>
            <a href="https://www.thisdaylive.com/index.php/2023/03/04/likeplaylikeplay-com-dating-platform-set-to-launch-in-nigeria/">
              <img src={thisday} alt="" />
            </a>
            <a href="https://sunnewsonline.com/likeplay-likeplay-com-1-dating-site-in-nigeria/">
              <img src={thesun} alt="" />
            </a>
            <a>
              <img src={thetimes} alt="" />
            </a>
            <a href=" https://www.vanguardngr.com/2023/03/likeplay-likeplay-com-1-dating-site-in-nigeria-4/">
              <img src={live} alt="" />
            </a>
            <img src={thegurdian} alt="" />
            <a href="https://punchng.com/why-you-should-try-online-dating-on-likeplaylikeplay-com/">
              <img src={punch} alt="" />
            </a>
            <a href="https://www.jbklutse.com/likeplaylikeplay-com-1-dating-site-ghana/">
              <img src={LikePlayJbklutselogo} alt="" />
            </a>
            <a href=" https://technovagh.com/likeplaylikeplay-wants-to-be-a-dating-site-for-africans/">
              <img src={LikePlayTechNovalogo} alt="" />
            </a>
          </div>
        </section>
      </Featured>
      {/* -------------------------As featured In END-----------------------------  */}

      {/* -------------------------Public footer start-----------------------------  */}
      <Publicfooter />
      {/* -------------------------Public footer END-----------------------------  */}
    </>
  );
}
