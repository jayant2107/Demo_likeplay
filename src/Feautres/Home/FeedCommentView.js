import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import "./ant.css";
// Image
import CommentCards from "./CommentCards";

//styleComponent
import { CommentCardsCss } from "./CommentCards";

// FakeData
import { commentofpeople } from "./DataPage";
import {
  getCommentsList,
  updateCommentLikeResponse,
} from "Services/collection";
import { toast } from "react-toastify";
import Loader from "Components/Loader";
import { NoRecords } from "Style/comman_Css";
import moment from "moment";

const FeedCommentView = ({
  changeModalComment,
  showComment,
  val,
  handleCommentPost,
}) => {
  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(true);

  let comment = useRef("");

  const handleChange = (e) => (comment = e.target.value);

  const handlePostButton = () => handleCommentPost(comment);

  const handleLikeStatus = async (comment_id, status) => {
    let payload = {
      post_id: val.post_id,
      comment_id: comment_id,
      status: status,
    };
    let res = await updateCommentLikeResponse(payload);
    if (res?.status === 200) {
    } else {
      toast.error(res?.message || "Something Went Wrong");
    }
  };
  const parseCommentList = async (payload) => {
    console.log(payload,"payload")
    const parseData = payload?.map((list) => {
      let sender = list?.commentDeatils?.user_images_while_signup[0];
      return {
        comment: list?.comment,
        senderName: list?.commentDeatils?.name,
        senderImage: sender?.image_url,
        senderId: list?.commentDeatils?.comment_by,
        comment_date:moment(list?.createdAt).local(),
        likeCount:parseInt(list?.heartCount),//
        comment_id: list?.id,
        iconCommentList:list?.CommentLikes, //array of all comment icons 
      };
    });
    return parseData;
  };

  const handleCommentsList = async () => {
    setLoading(true);
    let res = await getCommentsList(val.post_id);
    if (res?.status === 200) {
      
       let parseData= await parseCommentList(res?.data?.Comments);
       setCommentList(parseData)
       setLoading(false);
    } else {
      toast.error(res?.message || "Something Went Wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    handleCommentsList();
  }, []);
  console.log(commentList,"ccccc")

  return (
    <Modal
      open={showComment}
      width={1000}
      centered
      onCancel={changeModalComment}
      footer={null}
      className="myModal"
    >
      <FeedCommentViewCss>
        <div className="modalDiv">
          <div className="Maindiv">
            <img
              className="myimg"
              src={process.env.REACT_APP_BASEURL_IMAGE + val?.shots}
              alt="user"
            />
          </div>

          <div className="Maindiv">
            {/* userProfile */}
            <div className="header">
              <CommentCardsCss>
                <div className="profileImg">
                  <img
                    className=""
                    src={val?.profile_img}
                    alt="userProfileImg"
                  />
                </div>
                <div className="ProfileInfo">
                  <div className="userName">{val?.userName}</div>
                  <div className="postDate">{val?.date}</div>
                </div>
              </CommentCardsCss>
            </div>

            {/* commentSection */}
            <div className="commentSection">
              {loading ? (
                <Loader />
              ) : commentList?.length > 0 ? (
                commentList?.map((val, index) => {
                  return (
                    <CommentCards
                      details={val}
                      key={index}
                      handleHeartLike={handleLikeStatus}
                    />
                  );
                })
              ) : (
                <NoRecords>No Data Found</NoRecords>
              )}
            </div>

            {/* commentSend */}
            <div className="comment">
              <div className="commentInput">
                <input
                  className="input"
                  type="text"
                  placeholder="Add a Comment...."
                  onChange={handleChange}
                />
                <button className="inputButton" onClick={handlePostButton}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </FeedCommentViewCss>
    </Modal>
  );
};

export default FeedCommentView;

const FeedCommentViewCss = styled.div`
  .modalDiv {
    width: 100%;
    height: 30rem;
    background: #ffffff;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .Maindiv {
    width: fit-content;
    height: 30rem;
    width: 100%;
    position: relative;
  }
  .myimg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header {
    padding-left: 2rem;
    height: 90px;
    border-bottom: 1px solid #e2e2e2;
    display: flex;
    align-items: center;
  }
  .commentSection {
    height: 20.8rem;
    padding: 0.5rem 0 0 2rem;
    overflow-y: scroll;
  }
  .commentSection::-webkit-scrollbar {
    display: none;
  }
  .commentSection {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .comment {
    padding-left: 2rem;
    border-top: 1px solid #e2e2e2;
    height: 3.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .commentInput {
    display: grid;
    grid-template-columns: auto 64px;
    margin: 0.5rem 0;
  }
  .input {
    height: 2rem;
    font-size: 0.9rem;
    border: 1px solid white;
    font-size: 1rem;
    outline: none;
  }
  .inputButton {
    height: 36px;
    width: 64px;
    border: 1px solid white;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 1rem;
  }
`;
