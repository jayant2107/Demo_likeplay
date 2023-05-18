import React from "react";
import styled from "styled-components";



//FakeData
import { UsersData } from "./DataPage";
import UserPostCard from "./UserPostCard";

const FeedPage = () => {
  return (
    <Feedpagewrapper>
      {UsersData.map((val, index) => {
        return (
          <>
            <UserPostCard val={val} index={index}/>
          </>
        );
      })}
    </Feedpagewrapper>
  );
};

export default FeedPage;
const Feedpagewrapper=styled.div`
border-right: 1px solid #e2e2e2;
border-left:1px solid #e2e2e2;
`
