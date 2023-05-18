import React, { useState } from "react";
import styled from "styled-components";

//FakeData
import { UsersData } from "./DataPage";
import UserPostCard from "./UserPostCard";

const FeedPage = () => {
  const [like, setLike] = useState(false);
  const [heart, setHeart] = useState(false);
  const [star, setStar] = useState(false);

  const changeIcon = (val) => {
    console.log(val);
    val === "like"
      ? setLike(!like)
      : val === "heart"
      ? setHeart(!heart)
      : setStar(!star);
  };
  return (
    <Feedpagewrapper>
      {UsersData.map((val, index) => {
        return (
          <>
            <UserPostCard
              val={val}
              index={index}
              like={like}
              heart={heart}
              star={star}
              changeIcon={changeIcon}
            />
          </>
        );
      })}
    </Feedpagewrapper>
  );
};

export default FeedPage;
const Feedpagewrapper = styled.div`
  border-right: 1px solid #e2e2e2;
  border-left: 1px solid #e2e2e2;
`;
