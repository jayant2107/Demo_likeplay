import React, { useState } from "react";
import styled from "styled-components";

// images
import HeartTickImg from "../../Assets/Images/heartTickFeed.png";
import ThreeDotsImg from "../../Assets/Images/OptionsDotsFeed.png";
import DownArrowImg from "../../Assets/Images/downArrow.png";

//IconsFunctions
import {
  CommentFeedIcon,
  HeartFeedIcon,
  LikeFeedIcon,
  StarFeedIcon,
  TagFeedIcon,
} from "../../Utils/HomeIconsFun";

import { Popover } from "antd";

const UserPostCard = ({ val }) => {
  // const [comment, setComment] = useState(false);

  const content = (
    <div>
    <div>Edit</div>
    <div>Block</div>
    <div>Delete</div>
    <div>Report</div>
    <div>Hide Shot</div>
    </div>
    )

  return (
    <UserPostCardCss>
      {/* USER PROFILE SECTION  */}
      <div className="userProfile">
        <div className="profileImg">
          <img className="" src={val.ProfileImg} alt="userProfileImg" />
        </div>
        <div className="ProfileInfo">
          <div className="userName">{val.UserName}</div>
          <div className="postDate">{val.Date}</div>
        </div>
        <div className="profileOptions">
          <div className="heart">
            <img src={HeartTickImg} alt="HeartTickImg" />
          </div>
          <div>
            <Popover content={content} placement='bottomRight' trigger='click'>
            <img src={ThreeDotsImg} alt="HeartTickImg" />
            </Popover>
          </div>
        </div>
      </div>

      {/* USER Caption */}
      {val.Caption && (
        <div className="userCaption">
          <span>{val.Caption}</span>
        </div>
      )}

      {/* USER SHOTS / POSTS */}
      {val.Shots && (
        <div className="userPostImg">
          <img src={val.Shots} alt="UserPostImg" />
        </div>
      )}

      <div className="commentLikeBtn">
        {/* LIKE BUTTON */}
        <div className="likeDiv">
          <div>
            <LikeFeedIcon />
            <span>18</span>
          </div>
          <div>
            <HeartFeedIcon />
            <span>18</span>
          </div>
          <div>
            <StarFeedIcon />
            <span>18</span>
          </div>
        </div>

        {/* COMMENT BUTTON2 */}
        <div className="commentDiv">
          <span>
            <CommentFeedIcon />
          </span>
          <span> 18 Comments</span>
        </div>

        {/* TAG BUTTON3 */}
        <div className="commentDiv">
          <span>
            <TagFeedIcon />
          </span>
          <span>5 tags</span>
          <span className="arrow">
            <img src={DownArrowImg} alt="DownArror" />
          </span>
        </div>
      </div>

      {/* COMMENT SECTION */}
      <div className="commentInput">
        <input className="input" type="text" placeholder="Add a Comment...." />
        <button className="inputButton">Post</button>
      </div>
    </UserPostCardCss>
  );
};

export default UserPostCard;

export const UserPostCardCss = styled.div`
  //   width: 50%;
  //   margin: auto;
  height: auto;
  padding: 1rem;
  border-bottom: 1px solid #e2e2e2;

  .userProfile {
    display: grid;
    grid-template-columns: 60px auto 110px;
    height: 3.8rem;
    width: 100%;
  }
  .profileImg {
    border: 1px solid transparent;
    border-radius: 2rem;
    height: 3.7rem;
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ProfileInfo {
    display: grid;
    align-content: center;
    div {
      padding: 0.1rem 0 0.1rem 0.7rem;
    }
  }
  .userName {
    color: #252525;
    font-weight: 500;
    font-size: 1.3rem;
  }
  .postDate {
    color: #7b7f91;
    font-size: 0.9rem;
  }

  .profileOptions {
    display: Flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .heart {
    background-color: #f7f7f7;
    border-radius: 0.3rem;
    padding: 0.5rem 0.7rem;
    border-radius: 0.4rem;
  }
  .userCaption {
    height: auto;
    padding: 0.8rem 0;
    span {
      font-weight: 300;
    }
  }
  .userPostImg {
    margin: 0.6rem 0 0.4rem 0;
    width: 100%;
    height: 40rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .commentLikeBtn {
    display: grid;
    grid-template-columns: 32% 32% 32%;
    justify-content: space-between;
    height: 4rem;
    div {
      background-color: #f7f7f7;
      border-radius: 0.8rem;
      font-size: 0.9rem;
      color: #7b7f91;
      // #c5c7ce
    }
  }

  .likeDiv {
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        margin-left: 0.4rem;
      }
    }
  }

  .commentDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: flex;
      margin-left: 0.4rem;
    }
    .arrow {
      margin-left: 1.5rem;
    }
  }

  .commentInput {
    display: grid;
    grid-template-columns: auto 71px;
    margin: 1rem 0;
  }
  .input {
    height: 2rem;
    font-size: 0.9rem;
    border: 1px solid white;
    font-size: 1rem;
  }
  .inputButton {
    height: 36px;
    width: 70px;
    border: 1px solid white;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
  }
  .divPop{
    color :red;
  }
`;
