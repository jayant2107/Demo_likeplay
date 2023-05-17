import React from "react";
import styled from "styled-components";

// images
import userProfileImg from "../../Assets/Images/userProfileFeed.png";
import HeartTickImg from "../../Assets/Images/heartTickFeed.png";
import ThreeDotsImg from "../../Assets/Images/OptionsDotsFeed.png";
import UserPostImg from "../../Assets/Images/userPost.png"
import DownArrowImg from '../../Assets/Images/downArrow.png'
//IconsFunctions
import { CommentFeedIcon, HeartFeedIcon, LikeFeedIcon, StarFeedIcon, TagFeedIcon } from "../../Utils/HomeIconsFun";
 
const FeedPage = () => {
  return (
    <UserPostCss>
      <div className="userProfile">
        <div className="profileImg">
          <img className="" src={userProfileImg} alt="userProfileImg" />
        </div>
        <div className="ProfileInfo">
          <div className="userName">Logon Lerman</div>
          <div className="postDate">13 January at 5:00pm</div>
        </div>
        <div className="profileOptions">
          <div className="heart">
            <img src={HeartTickImg} alt="HeartTickImg" />
          </div>
          <div>
            <img src={ThreeDotsImg} alt="HeartTickImg" />
          </div>
        </div>
      </div>
      <div className="userCaption">
        <span>
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry.
        </span>
      </div>
      <div className="userPostImg">
        <img src={UserPostImg} alt="UserPostImg" />
      </div>
      <div className="commentLike">
        <div className="likeDiv">
          <div>
          <LikeFeedIcon />
          <span>18</span>
          </div>
          <div>
          <HeartFeedIcon/>
          <span>18</span>
          </div>
          <div>
          <StarFeedIcon/>
          <span>18</span>
          </div>
        </div>
        <div className="commentDiv">
           <span><CommentFeedIcon/></span><span> 18 Comments</span>
        </div>
        <div className="commentDiv">
          <span><TagFeedIcon/></span><span>5 tags</span><span className="arrow"><img src={DownArrowImg} alt='DownArror'/></span>
        </div>
      </div>
      <div className="commentInput">
        <input type='text' placeholder="Add a Comment...."/>
        <button>Post</button>
      </div>
      <h2>hello</h2>
    </UserPostCss>
  );
};

export default FeedPage;

export const UserPostCss = styled.div`
  //   width: 50%;
  //   margin: auto;
  height: auto;
  padding: 1rem;
  border: 1px solid gray;

  .userProfile {
    display: grid;
    grid-template-columns: 60px auto 110px;
    height: 3.8rem;
    width: 100%;
  }
  .profileImg {
    border: 1px solid transparent;
    border-radius:2rem;
    height : 3.7rem;
    width :100%;
    overflow : hidden;
    img{
        width : 100%;
        height : 100%;
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

.commentLike{
    display : grid;
    grid-template-columns : 32% 32% 32%;
    justify-content: space-between;
    height : 4rem;
    div{
      background-color : #f7f7f7;
      border-radius : 0.8rem;
  }
}

.likeDiv{
  display : flex;
  justify-content : space-around;
  align-items : center;
  div{
    display : flex;
    justify-content : space-around;
    align-items : center;
  }
}
.commentDiv{
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    display: flex;
    margin : 0 0.2rem;
  }
  .arrow{
    margin : 0 0.8rem;
  }
}

.commentInput{
  position : relative;

  input{
    width : 100%;
    height : auto;
    font-size : 0.9rem;
    border : 1px solid white;
  }
}
`;
