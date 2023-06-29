import React, { useState } from "react";
import styled from "styled-components";
import { CommentHeartIcon } from "../../Utils/HomeIconsFun";
// import smile from "../../Assets/Images/commentsmile.png";
// import emoji from "../../Assets/Images/emoji.png";

const CommentCards = ({ details,handleHeartLike }) => {
  const [activeIcon, setActiveIcon] = useState(false);
  const handleHeartStatusUpdation=()=>{
    setActiveIcon(prev=>!prev)
    handleHeartLike(details.comment_id,!activeIcon);
  }

  return (
    <CommentCardsCss>
      <div className="profileImg">
        <img className="" src={process.env.REACT_APP_BASEURL_IMAGE+details.senderImage} alt="userProfileImg" />
      </div>
      <div className="ProfileInfo">
        <div className="userName">{details.senderName}</div>
        <div className="postCap">{details.comment}</div>
        <div className="postCap emojiCap">
          {/* <span className="emoji">
            <img src={emoji} alt="smile" />
          </span> */}
          {details?.likeCount>0 && <span className="likes_count">{details.likeCount+1}{" "}Likes</span>}&nbsp;
          {/* <img src={smile} alt="smile" /> */}
        </div>
      </div>
      <div className="heartDiv">
        <span className="postDate">18h</span>
        <div
          className={`${activeIcon === true ? "icon" : "iconChange"}`}
          onClick={handleHeartStatusUpdation}
        >
          <CommentHeartIcon />
        </div>
      </div>
    </CommentCardsCss>
  );
};

export default CommentCards;

export const CommentCardsCss = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: 65px auto 45px;
  width: 100%;
  margin-top: 1rem;

  .profileImg {
    border: 1px solid transparent;
    border-radius: 2rem;
    height: 3.5rem;
    width: 3.5rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ProfileInfo {
    margin-left: 0.3rem;
    display: grid;
    align-content: center;
  }
  .userName {
    color: #252525;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
  }
  .postDate {
    color: #7b7f91;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
  .postCap {
    color: #7b7f91;
    font-weight: 300;
    font-size: 13px;
  }
  .emojiCap {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
  }
  .emoji {
    background-color: #d9d9d9;
    border-radius: 0.6rem;
    margin: 0 0.5rem;
    padding: 0.1rem 0.5rem;
  }
  .heartDiv {
    text-align: center;
  }

  .icon {
    color: #f03d47;
  }
  .iconChange {
    color: #d0d0d0;
  }
`;
