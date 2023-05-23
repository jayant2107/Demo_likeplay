import React, { useState } from "react";
import styled from "styled-components";
import FeedAboutMe from "./FeedAboutMe";
import FeedShots from "./FeedShots";

// Image
import ProfilePic from "../../Assets/Images/TopProfile.png";
import editIcon from "../../Assets/Images/editIcon.png";

const FeedMyProfile = () => {
  const [active, setActive] = useState("aboutme");

  return (
    <>
      <LoginProfileCss>
        <div className="imgDiv">
          <img src={ProfilePic} alt="pic" />
        </div>
        <div className="detailsDiv">
          <div className="username">Logan Lerman</div>
          <div className="userdata">
            <span>21</span>
            <span className="spanDot"></span>
            <span>Male</span>
            <span className="spanDot"></span>
            <span>Serious Relationship</span>
          </div>
          <div className="userdata">Nigeria</div>
          <img className="editIcon" src={editIcon} alt="edit" />
        </div>
      </LoginProfileCss>

      <FeedMyProfileCss>
        <div className="navDiv">
          <div className="border-wrap ">
            <span
              className={`${active === "shorts" ? "active" : "navButton"}`}
              onClick={() => setActive("shorts")}
            >
              Shorts
            </span>
          </div>
          <span
            className={`${active === "aboutme" ? "active" : "navButton"}`}
            onClick={() => setActive("aboutme")}
          >
            About me
          </span>
        </div>

        {active === "shorts" ? <FeedShots /> : <FeedAboutMe />}
      </FeedMyProfileCss>
    </>
  );
};

export default FeedMyProfile;

export const FeedMyProfileCss = styled.div`
  height: auto;
  padding: 1rem;
  font-family: "Poppins", sans-serif;

  .navDiv {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navButton {
    margin: 0 0.5rem;
    background-color: white;
    border: 1px solid white;
    color: #7b7f91;
    cursor: pointer;
    font-size: 14px;
  }
  .active {
    padding: 0.2rem 0.4rem;
    color: #242424;
    font-size: 14px;
    margin: 0 0.5rem;
    background-color: white;
    color: #7b7f91;
    cursor: pointer;
    border-bottom: 2px solid #f04142;
  }
`;

export const LoginProfileCss = styled.div`
  width: 100%;
  height: 125px;
  display: grid;
  grid-template-columns: 86px auto;
  border-bottom: 1px solid #e2e2e2;
  gap: 15px;
  padding: 20px;

  .imgDiv {
    height: 86px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detailsDiv {
    height: 86px;
    position: relative;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
  }
  .editIcon {
    position: absolute;
    top: 0;
    right: 0;
  }
  .username {
    font-size: 25px;
    line-height: 35px;
    letter-spacing: 0.05em;
    color: #242424;
  }
  .userdata {
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #7b7f91;
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 2px 0;

    .spanDot {
      border: 1px solid black;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #242424;
    }
  }
`;
