import React, { useState } from "react";
import styled from "styled-components";
import DeleteModal from "../../Modals/DeleteModal";
import BlockData from "../../Modals/ModalData/BlockData";
import DeleteData from "../../Modals/ModalData/DeleteShotData";
import HideData from "../../Modals/ModalData/HideShotData";
import { Popover } from "antd";
// images
import HeartTickImg from "../../Assets/Images/heartTickFeed.png";
import ThreeDotsImg from "../../Assets/Images/OptionsDotsFeed.png";
import DownArrowImg from "../../Assets/Images/downArrow.png";
import ReportUserModal from "../../Modals/ReportUserModal";
//IconsFunctions
import {
  CommentFeedIcon,
  HeartFeedIcon,
  LikeFeedIcon,
  StarFeedIcon,
  TagFeedIcon,
} from "../../Utils/HomeIconsFun";

// FakeData
import { TagesData } from "./DataPage";
import FeedCommentView from "./FeedCommentView";

const UserPostCard = ({ val, like, star, heart, changeIcon,changeModal }) => {
  const [comment, setComment] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showHideModal, setShowHideModal] = useState(false);
  const [showBlockModal, setshowBlockModal] = useState(false);
  const [reportUserModal, setReportUserModal] = useState(false);

  
  const closeModal = () => {
    if (showBlockModal === true) {
      setshowBlockModal(false);
    } else if (showModal === true) {
      setShowModal(false);
    } else if (showHideModal === true) {
      setShowHideModal(false);
    }
  };


  const closeReportModal = () => {
    setReportUserModal(false);
  };

  const content = (
    <PopContentCss>
      <div className="popContent">
        <div className="popbtn">Edit</div>
        <div
          className="popbtn"
          onClick={() => {
            setshowBlockModal(true);
            setShowModal(false);
            setShowHideModal(false);
          }}
        >
          Block
        </div>
        {showBlockModal && (
          <DeleteModal prop={BlockData} closeModal={closeModal} />
        )}
        <div
          className="popbtn"
          onClick={() => {
            setShowModal(true);
            setShowHideModal(false);
            setshowBlockModal(false);
          }}
        >
          Delete
        </div>
        {showModal && <DeleteModal prop={DeleteData} closeModal={closeModal} />}

        <div
          className="popbtn"
          onClick={() => {
            setReportUserModal(true);
          }}
        >
          Report
        </div>
        {reportUserModal && (
          <ReportUserModal closeReportModal={closeReportModal}/>
        )}

        <div
          className="popbtn"
          onClick={() => {
            setShowModal(false);
            setShowHideModal(true);
            setshowBlockModal(false);
          }}
        >
          Hide Shot
        </div>
        {showHideModal && (
          <DeleteModal prop={HideData} closeModal={closeModal} />
        )}
      </div>
    </PopContentCss>
  );

  const tagContent = (
    <PopContentCss>
      <div className="popContent">
        {TagesData.map((val, index) => {
          return (
            <div key={index} className="popFlex popbtn">
              <span className="imgSpan">
                <img src={val.img} alt="userImg" />
              </span>
              <span>{val.name}</span>
            </div>
          );
        })}
      </div>
    </PopContentCss>
  );

  return (
    <>
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
              <Popover
                arrow={false}
                overlayStyle={{
                  border: "1px solid #E2E2E2",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "0.5rem",
                }}
                content={content}
                placement="bottomRight"
                trigger="click"
              >
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
            <div onClick={() => changeIcon("like")}>
              <LikeFeedIcon val={like} />
              <span>18</span>
            </div>
            <div onClick={() => changeIcon("heart")}>
              <HeartFeedIcon val={heart} />
              <span>18</span>
            </div>
            <div onClick={() => changeIcon("star")}>
              <StarFeedIcon val={star} />
              <span>18</span>
            </div>
          </div>

          {/* COMMENT BUTTON2 */}
          <div className="commentDiv" onClick={changeModal}>
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
              <Popover
                arrow={false}
                overlayStyle={{
                  border: "1px solid #E2E2E2",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "0.5rem",
                }}
                content={tagContent}
                placement="top"
                trigger="click"
              >
                <img src={DownArrowImg} alt="DownArror" />
              </Popover>
            </span>
          </div>
        </div>
  
      {comment && (
        <FeedCommentView
          commentOn={comment}
          changeModal={changeModal}
          val={val}
        />
      )}
    
    </UserPostCardCss>
    </>
  );
};

export default UserPostCard;

export const UserPostCardCss = styled.div`
  height: auto;
  padding: 1rem;
  border-bottom: 1px solid #e2e2e2;
  font-family: "Poppins", sans-serif;
  font-style: normal;

  .userProfile {
    display: grid;
    grid-template-columns: 60px auto 90px;
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
    justify-content: space-between;
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
      object-fit: cover;
    }
  }

  .commentLikeBtn {
    display: grid;
    grid-template-columns: 40% 30% 25%; 
    justify-content: space-between;
    height: 3.2rem;
    div {
      background-color: #f7f7f7;
      border-radius: 0.8rem;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.05em;
      color: #7b7f91;
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
      cursor: pointer;
      span {
        margin-left: 0.4rem;
      }
    }
  }

  .commentDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      display: flex;
      margin-left: 0.4rem;
    }
    .arrow {
      margin-left: 2rem;
    }
  }
`;

const PopContentCss = styled.div`
font-family: 'Poppins', sans-serif;
background-color : #FFFFFF;
.popContent{
  color : #7B7F91;
}
.popbtn{
  font-size : 1rem;
  padding : 0.3rem 0;
  margin :  0 0.5rem;
  cursor : pointer;
}
.popbtn:hover{
  color : black;
}
.popFlex{
  display : flex;
  align-items : center;
  margin : 0.2rem 0;
  span{
    margin : 0 0.3rem;
    font-size : 0.8rem;
  }
  .popbtn {
    font-size: 1rem;
    padding: 0.3rem 0;
    margin: 0 0.5rem;
    cursor: pointer;
  }
  .popbtn:hover {
    color: black;
  }
  .popFlex {
    display: flex;
    align-items: center;
    margin: 0.2rem 0;
    span {
      margin: 0 0.3rem;
      font-size: 0.8rem;
    }
  }
  .imgSpan {
    border-radius: 6rem;
    width: 36px;
    height: 36px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
`;
