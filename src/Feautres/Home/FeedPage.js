import React, { useState } from "react";



//FakeData
import { UsersData } from "./DataPage";
import UserPostCard from "./UserPostCard";

const FeedPage = () => {
  const [like,setLike] = useState(false)
  const [heart,setHeart] = useState(false)
  const [star,setStar] = useState(false)
  
  const changeIcon=(val)=>{
    console.log(val);
    val === 'like' ? setLike(!like) : val === 'heart' ? setHeart(!heart) : setStar(!star)
  }
  return (
    <>
      {UsersData.map((val, index) => {
        return (
          <>
            <UserPostCard val={val} index={index} like={like} heart={heart} star={star} changeIcon={changeIcon} />
          </>
        );
      })}
    </>
  );
};

export default FeedPage;

