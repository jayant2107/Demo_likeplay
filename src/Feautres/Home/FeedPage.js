import React from "react";



//FakeData
import { UsersData } from "./DataPage";
import UserPostCard from "./UserPostCard";

const FeedPage = () => {
  return (
    <>
      {UsersData.map((val, index) => {
        return (
          <>
            <UserPostCard val={val} index={index}/>
          </>
        );
      })}
    </>
  );
};

export default FeedPage;

