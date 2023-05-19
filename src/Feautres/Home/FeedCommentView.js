import React from "react";
import styled from "styled-components";

// Image
import userPost from '../../Assets/Images/userPost.png'

const FeedCommentView = ({ commentOn, changeModal }) => {
  return (
    <FeedCommentViewCss>
      {commentOn ? 
      <div className="modal">
        <div className="imgDiv">
            <img className="myimg" src={userPost} alt='user' />
        </div>

        <div className="commentDiv">
            <div className="header">

            </div>
            <div className="commentSection">

            </div>
            <div className="comment">

            </div>
        </div>

      </div> 
      : null}
    </FeedCommentViewCss>
  );
};

export default FeedCommentView;

const FeedCommentViewCss = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0 0 0 / 47%);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal{
    width : 80%;
    height  : auto;
    background: #FFFFFF;
    border-radius: 5px;

    display :grid;
    grid-template-columns : 50% 50%;

  }

  div{
    width : fit-content;
    height : 30rem;
    width  :100%;
    border :1px solid black;
}

  
  
    .myimg{
        width : 100%;
        height : 100%;
        object-fit : cover;
    }



  .header{
    width : 100%;
    height : 5rem;
  }
  .commentSection{
    border-top : 1px solid #E2E2E2;
    border-bottom : 1px solid #E2E2E2;
  }
`;
