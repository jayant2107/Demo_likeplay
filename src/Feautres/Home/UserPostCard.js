import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Spin } from "antd";
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
import {
  getTagDetail,
  reportPostApi,
  hidePostApi,
  deletePost,
  blockUser,
  commentPost,
  updatePostLikeComment,
  getLikedetails,
} from "Services/collection";
import Loader from "Components/Loader";
import { toast } from "react-toastify";
import {type} from "Utils/constant"
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const UserPostCard = ({ val,edit=false,getHomePageContent}) => {
  const [showModal, setShowModal] = useState(false);
  const [showHideModal, setShowHideModal] = useState(false);
  const [showBlockModal, setshowBlockModal] = useState(false);
  const [reportUserModal, setReportUserModal] = useState(false);
  const [likeModal, setLikeModal] = useState(false);
  const [likepostdata,setlikepostdata]=useState()
  const [editModal, setEditModal] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [tagLoader, setTagLoader] = useState(false);
  const [like, setLike] = useState(val?.userLikeByThumb);
  const[likecount,setlikecount]=useState(val?.totalLikeByThumb)
  const [heart, setHeart] = useState( val?.userLikeByHeart);
  const [heartcount,setHeartcount]=useState(val?.totalLikeByHeart)
  const [star, setStar] = useState( val?.userLikeByStar );
  const [starcount,setStarcount]=useState(val?.totalLikeByStar)
  const [tagList, setTagList] = useState([]);
  const[listtype,setlisttype]=useState()
  const [totalcomment,settotalcomment]=useState(+val?.totalCommments)
  
  const navigate =useNavigate()
  console.log(val,"vval")



  const colorchangeicons=(name)=>{
    if(name==="like"){
      setLike(pre=>!pre)
      if(like===false){

        setlikecount(+likecount+1)
      }
      else{
        setlikecount(+likecount-1)
      }
      if(heart===true){

        setHeart(false)
        setHeartcount(+heartcount-1)
      }
      if(star===true){
        setStar(false)
        setStarcount(+starcount-1)
      }
     
    }
    if(name==="heart"){
      setHeart(pre=>!pre)
      if(heart===false){
        setHeartcount(+heartcount+1)
      }
      else{
        setHeartcount(+heartcount-1)
      }
      if(star===true){
        setStar(false)
        setStarcount(+starcount-1)

      }
      if(like===true){
        setLike(false)
        setlikecount(+likecount-1)

      }

      
    }
    if(name==="star"){
      setStar(pre=>!pre)
      if(star===false){
        setStarcount(+starcount+1)
      }
      else{
        setStarcount(+starcount-1)
      }
      if(like===true){

        setLike(false)
        setlikecount(+likecount-1)
      }
      if(heart===true){
        
        setHeart(false)
        setHeartcount(+heartcount-1)
      }
    }
    else{
      console.log("nnnnnn")
    }

    
  }

  let postUrl = val?.shots?.split(".");

  const changeModalComment = () => {
    setShowComment(!showComment);
  };

  const handleClickChange = (open) => {
    setClicked(open);
  };
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 30,
        color:'red'
      }}
      spin
    />
  );

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
    setTagLoader(true);
    const res = await getTagDetail(post_id);
    if (res?.status === 200) {
      setTagList(res?.data);
      setTagLoader(false);
    } else setTagLoader(false);
  };

  const reportUserPost = async (reportReason) => {
    // console.log("check post data",val)
    let payload = {
      post_id: val.post_id,
      user_id: val.id,
      message: reportReason,
    };
    let res = await reportPostApi(payload);
    if (res?.status === 200) {
      setReportUserModal(false);
    } else {
      toast.error(res?.message || "Something Went Wrong");
      setReportUserModal(false);
    }
  };

  const handleHideShot = async () => {
    let payload = {
      post_id: val.post_id,
      status: true,
    };
    const res = await hidePostApi(payload);
    if (res?.status === 200) {
      closeModal();
      getHomePageContent();
      toast.success(res?.message || "Request Updated")

    } else {
      closeModal();
      toast.error(res?.message || "Something Went Wrong");
    }
  };

  const handleDeletePost = async () => {
    // const res = await deletePost({
    //   post_id: val.post_id,
    // });
    // if (res?.status === 200) {
    //   closeModal();
    // } else {
    //   toast.error(res?.message || "Something Went Wrong");
    closeModal();
    // }
  };

  const handleBlockUser = async () => {
    const res = await blockUser({ user_id: val.id });
    if (res?.status === 200) {
      setshowBlockModal(false);
    } else {
      toast.error(res?.message || "Something Went Wrong");
      setshowBlockModal(false);
    }
  };

  const handleCommentPost = async (content) => {
    console.log(content,"ccc")
    const res = await commentPost({
      post_id: val.post_id,
      comment: content,
    });
    if (res?.status === 200) {
      setShowComment(false);
      settotalcomment(+1)
     
    } else {
      toast.error(res?.message || "Something Went Wrong");
      setShowComment(false);
    }
  };

  const status = {
    like: !like,
    heart: !heart,
    star: !star,
  };

  const handlePostLikes = async (name) => {
    const payload = {
      post_id: val.post_id,
      type: type[name],
      status: status[name],
    };
    
    const res = await updatePostLikeComment(payload);
    if (res?.status === 200) {
     
      colorchangeicons(name)

    }
     else  if(res?.status===400){
      colorchangeicons(name)
    }
    else {
      console.log("error updated")
      toast.error(res?.message || "Something Went Wrong");
    }
  };

  const content = (
    <PopContentCss>
      <div className="popContent">
        {val?.matchValue && <div
          className="popbtn"
          onClick={() => {
            setEditModal(true);
            setClicked(false);
          }}
        >
          Edit
        </div>}
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
        {val?.matchValue && <div
          className="popbtn"
          onClick={() => {
            setShowModal(true);
            setShowHideModal(false);
            setshowBlockModal(false);
            setClicked(false);
          }}
        >
          Delete
        </div>}
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
        {tagLoader ? (
          <Loading>
            <Spin indicator={antIcon} />

          </Loading>
        
       
        ) : tagList.length > 0 ? (
          tagList.map((val, index) => {
            
            const img=process.env.REACT_APP_BASEURL_IMAGE+val?.tagTo?.user_images_while_signup[0]?.image_url


            return (
              <div key={index} className="popFlex popbtn">
                <span className="imgSpan">
                  <img src={img} alt="userImg" />
                </span>
                <span>{val?.tagTo?.name}</span>
              </div>
            );
          })
        ) : (
          <NoContent>No List</NoContent>
        )}
      </div>
    </PopContentCss>
  );

  return (
    <>
      <UserPostCardCss>
        {/* USER PROFILE SECTION  */}
        <div className="userProfile">
          <div className="profileImg">
            <img className="" src={val.profile_img} alt="userProfileImg"  onClick={()=>navigate('/Layout/Userdetails',{
              state:val?.user_id
            })}/>
          </div>
          <div className="ProfileInfo">
            <div className="userName" onClick={()=>navigate('/Layout/Userdetails',{
              state:val?.user_id
            })}>{val.userName}</div>
            <div className="postDate">{val.date}</div>
          </div>
          <div className="profileOptions">
            {/* <div className="heart">
              <img src={HeartTickImg} alt="HeartTickImg" />
            </div> */}
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
        {/* USER SHOTS / POSTS */}
        {val.shots && postUrl[postUrl.length - 1] === "mp4" ? (
          <video width="750" height="500" controls>
            <source
              src={process.env.REACT_APP_BASEURL_IMAGE + val.shots}
              type="video/mp4"
            />
          </video>
        ) : (
          <div className="userPostImg">
            <img
              src={process.env.REACT_APP_BASEURL_IMAGE + val.shots}
              alt="UserPostImg"
            />
          </div>
        )}

        <div className="commentLikeBtn">
          {/* LIKE BUTTON */}
          <div className="likeDiv">
            <div>
              <span onClick={() => handlePostLikes("like")}>
                <LikeFeedIcon val={like} />
              </span>
              <span  onClick={() => {
                  setlisttype(0)
                  if(likecount>0){

                    setLikeModal(true);
                  }
                }}>{likecount}</span>
           
            </div>
            <div>
              <span onClick={() => handlePostLikes("heart")}>
                <HeartFeedIcon val={heart} />
              </span>
              <span onClick={()=>{
                setlisttype(1)
                if(heartcount>0){
                  setLikeModal(true)
                }
              }}
               
              >
                {heartcount}
              </span>
            </div>
            <div onClick={() => handlePostLikes("star")}>
              <span>
                <StarFeedIcon val={star} />
              </span>
              <span
              onClick={()=>{
                setlisttype(2)
                if(starcount>0){
                  setLikeModal(true)
                }
              }}
              >{starcount}</span>
            </div>
          </div>

          {/* COMMENT BUTTON2 */}
          <div className="commentDiv" onClick={changeModalComment}>
            <span>
              <CommentFeedIcon />
            </span>
            <span>{totalcomment} Comments</span>
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
            handleCommentPost={handleCommentPost}
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
          <DeleteModal
            prop={BlockData}
            closeModal={closeModal}
            handleAction={handleBlockUser}
            getHomePageContent={getHomePageContent}
          />
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
          <DeleteModal
            prop={DeleteData}
            closeModal={closeModal}
            handleAction={handleDeletePost}
            postid={val?.post_id }

          />
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
          <ReportUserModal
            closeReportModal={closeReportModal}
            reportUserPost={reportUserPost}
          />
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
          <DeleteModal
            prop={HideData}
            closeModal={closeModal}
            handleAction={handleHideShot}
          />
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
          <LikesViewModal postid={val?.post_id} listtype={listtype} closeLikeModal={closeLikeModal} />
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
    cursor: pointer;
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
    cursor: pointer;
    font-size: 1rem;
  }
  .postDate {
    color: #7b7f91;
    font-size: 0.9rem;
  }

  .profileOptions {
    display: Flex;
    align-items: center;
    justify-content: end;
    padding:0px 10px;
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
const NoContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const PopContentCss = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #ffffff;
  border-radius: 0.5rem;
  .popContent {
    color: #7b7f91;
  }
  .taglist-content {
    height: 160px;
    width: 140px;
    overflow:auto;
    &::-webkit-scrollbar{
      display:none;
    }
   
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

const Loading=styled.div`
display:flex;
align-items:center;
justify-content:center;
height:150px;


`