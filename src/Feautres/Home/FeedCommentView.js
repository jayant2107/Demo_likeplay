import React from "react";
import styled from "styled-components";
import { Modal } from "antd";
import './ant.css'
// Image
import CommentCards from "./CommentCards";

//styleComponent
import { CommentCardsCss } from "./CommentCards";

// FakeData
import { commentofpeople } from "./DataPage";

const FeedCommentView = ({ changeModalComment, showComment, val }) => {

  return (
    <ModalWrapper>
    <Modal
    open={showComment}
    width={1000}
    centered
    onCancel={changeModalComment}
    footer={null}
    style={{color:'red',padding:"0px"}}
    >
        <FeedCommentViewCss>
        <div className="modalDiv">
          <div className="Maindiv">
            <img className="myimg" src={val.Shots} alt="user" />
          </div>

          <div className="Maindiv">
            {/* userProfile */}
            <div className="header">
              <CommentCardsCss>
                <div className="profileImg">
                  <img className="" src={val.Shots} alt="userProfileImg" />
                </div>
                <div className="ProfileInfo">
                  <div className="userName">{val.UserName}</div>
                  <div className="postDate">{val.Date}</div>
                </div>
              </CommentCardsCss>
            </div>

            {/* commentSection */}
            <div className="commentSection">
              {commentofpeople.map((val, index) => {
                return <CommentCards prop={val} key={index} />;
              })}
            </div>

            {/* commentSend */}
            <div className="comment">
              <div className="commentInput">
                <input
                  className="input"
                  type="text"
                  placeholder="Add a Comment...."
                />
                <button className="inputButton">Post</button>
              </div>
            </div>
          </div>
        </div>
    </FeedCommentViewCss>
      </Modal>
      </ModalWrapper>
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

const ModalWrapper = styled.div`

`