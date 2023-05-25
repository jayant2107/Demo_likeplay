import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import DeleteModal from "../../Modals/DeleteModal";
import LikesViewModal from "../../Modals/LikesViewModal";
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
import CreateShotsModal from "../../Modals/CreateShotsModal";
import { getTagDetail } from "Services/collection";
import Loader from "Components/Loader";

const UserPostCard = ({ val, like, star, heart, changeIcon }) => {
  const [showModal, setShowModal] = useState(false);
  const [showHideModal, setShowHideModal] = useState(false);
  const [showBlockModal, setshowBlockModal] = useState(false);
  const [reportUserModal, setReportUserModal] = useState(false);
  const [likeModal, setLikeModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [tagLoader,setTagLoader]=useState(true);
  const [tagList,setTagList]=useState([])

  let postUrl = val.shots.split(".");

 
 
  const changeModalComment = () => {
    setShowComment(!showComment);
  };

  const handleClickChange = (open) => {
    setClicked(open);
  };

  const closeModal = () => {
    if (showBlockModal === true) {
      setshowBlockModal(false);
    } else if (showModal === true) {
      setShowModal(false);
    } else if (showHideModal === true) {
      setShowHideModal(false);
    }
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const closeReportModal = () => {
    setReportUserModal(false);
  };

  const closeLikeModal = () => {
    setLikeModal(false);
  };

  const getTagsList = async (post_id) => {
    setTagLoader(true)
    const res = await getTagDetail(post_id);
    if(res?.status===200){
      setTagList(res?.data)
      setTagLoader(false)
    }
    else setTagLoader(false)
  };

  const content = (
    <PopContentCss>
      <div className="popContent">
        <div
          className="popbtn"
          onClick={() => {
            setEditModal(true);
            setClicked(false);
          }}
        >
          Edit
        </div>
        <div
          className="popbtn"
          onClick={() => {
            setshowBlockModal(true);
            setShowModal(false);
            setShowHideModal(false);
            setClicked(false);
          }}
        >
          Block
        </div>
        <div
          className="popbtn"
          onClick={() => {
            setShowModal(true);
            setShowHideModal(false);
            setshowBlockModal(false);
            setClicked(false);
          }}
        >
          Delete
        </div>
        <div
          className="popbtn"
          onClick={() => {
            setReportUserModal(true);
            setClicked(false);
          }}
        >
          Report
        </div>
        <div
          className="popbtn"
          onClick={() => {
            setShowHideModal(true);
            setShowModal(false);
            setshowBlockModal(false);
            setClicked(false);
          }}
        >
          Hide Shot
        </div>
      </div>
    </PopContentCss>
  );

  const tagContent = (
    <PopContentCss>
      <div className="popContent taglist-content">
        {tagLoader?<TagLoader>
          <Loader/>
        </TagLoader>
        :
        tagList.length>0 ? tagList.map((val, index) => {
            return (
              <div key={index} className="popFlex popbtn">
                <span className="imgSpan">
                  <img src={val.img} alt="userImg" />
                </span>
                <span>{val.name}</span>
              </div>
            );
          })
          :<NoContent>No List</NoContent>
        }
      </div>
    </PopContentCss>
  );

  return (
    <>
      <UserPostCardCss>
        {/* USER PROFILE SECTION  */}
        <div className="userProfile">
          <div className="profileImg">
            <img className="" src={val.profile_img} alt="userProfileImg" />
          </div>
          <div className="ProfileInfo">
            <div className="userName">{val.userName}</div>
            <div className="postDate">{val.date}</div>
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
                open={clicked}
                onOpenChange={handleClickChange}
              >
                <img src={ThreeDotsImg} alt="HeartTickImg" />
              </Popover>
            </div>
          </div>
        </div>

        {/* USER Caption */}
        {val.caption && (
          <div className="userCaption">
            <span>{val.caption}</span>
          </div>
        )}
        {console.log("val.shots.split", val.shots.split(".").length)}
        {/* USER SHOTS / POSTS */}
        {val.shots && postUrl[postUrl.length - 1] === "mp4" ? (
          <video width="750" height="500" controls>
            <source src={process.env.REACT_APP_BASEURL_IMAGE + val.shots} type="video/mp4" />
          </video>
        ) : (
          <div className="userPostImg">
            <img src={process.env.REACT_APP_BASEURL_IMAGE + val.shots} alt="UserPostImg" />
          </div>
        )}

        <div className="commentLikeBtn">
          {/* LIKE BUTTON */}
          <div className="likeDiv">
            <div>
              <span onClick={() => changeIcon("like")}>
                <LikeFeedIcon val={like} />
              </span>
              <span>{val.totalLikeByThumb}</span>
            </div>
            <div>
              <span  onClick={() => changeIcon("heart")} >
                <HeartFeedIcon val={heart} />
              </span>
              <span
                onClick={() => {
                  setLikeModal(true);
                }}
              >
                {val.totalLikeByHeart}
              </span>
            </div>
            <div onClick={() => changeIcon("star")}>
              <span>
                <StarFeedIcon val={star} />
              </span>
              <span>{val.totalLikeByStar}</span>
            </div>
          </div>

          {/* COMMENT BUTTON2 */}
          <div className="commentDiv" onClick={changeModalComment}>
            <span>
              <CommentFeedIcon />
            </span>
            <span>{val.totalCommments} Comments</span>
          </div>

          {/* TAG BUTTON3 */}
          <div className="commentDiv">
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
              <span>
                <TagFeedIcon />
              </span>
              <span>{val.totalTags} tags</span>
              <div onClick={() => getTagsList(val.post_id)}>
                <img className="arrow" src={DownArrowImg} alt="DownArror" />
              </div>
            </Popover>
          </div>
        </div>
        {showComment && (
          <FeedCommentView
            val={val}
            showComment={showComment}
            changeModalComment={changeModalComment}
          />
        )}
        
      </UserPostCardCss>

      {/* All Modals */}
      {editModal && (
        <Modal
          open={editModal}
          close={closeEditModal}
          footer={null}
          maskClosable={true}
          centered
          onCancel={closeEditModal}
        >
          <CreateShotsModal closeSnapModal={closeEditModal} image={val.Shots} />
        </Modal>
      )}
      {showBlockModal && (
        <Modal
          open={showBlockModal}
          onOk={closeModal}
          onCancel={closeModal}
          maskClosable={true}
          // cancelText="naa"
          centered
          className="modalDesign"
          footer={null}
          // okButtonProps={{ style: { backgroundColor: "green" } }}
        >
          <DeleteModal prop={BlockData} closeModal={closeModal} />
        </Modal>
      )}
      {showModal && (
        <Modal
          open={showModal}
          onOk={closeModal}
          onCancel={closeModal}
          centered
          maskClosable={true}
          className="modalDesign"
          footer={null}
        >
          <DeleteModal prop={DeleteData} closeModal={closeModal} />
        </Modal>
      )}
      {reportUserModal && (
        <Modal
          open={reportUserModal}
          onOk={closeReportModal}
          maskClosable={true}
          onCancel={closeReportModal}
          centered
          footer={null}
        >
          <ReportUserModal closeReportModal={closeReportModal} />
        </Modal>
      )}
      {showHideModal && (
        <Modal
          open={showHideModal}
          onOk={closeModal}
          onCancel={closeModal}
          className="modalDesign"
          maskClosable={true}
          centered
          footer={null}
        >
          <DeleteModal prop={HideData} closeModal={closeModal} />
        </Modal>
      )}
      {likeModal && (
        <Modal
          open={likeModal}
          onOk={closeLikeModal}
          onCancel={closeLikeModal}
          footer={null}
          maskClosable={true}
          centered
          width="30%"
        >
          <LikesViewModal closeLikeModal={closeLikeModal} />
        </Modal>
      )}
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
    font-size: 1rem;
  }
  .postDate {
    color: #7b7f91;
    font-size: 0.9rem;
  }

  .profileOptions {
    display: Flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
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
      object-fit: contain;
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
      align-items: center;
    }
    .arrow {
      margin-left: 2rem;
    }
  }
`;
const NoContent=styled.div`
  height:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`

const PopContentCss = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #ffffff;
  border-radius: 0.5rem;
  .popContent {
    color: #7b7f91;
  }
  .taglist-content{
    height: 160px;
    width: 140px;
    overflow: auto;
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

const TagLoader= styled.div`
height:80px;
`