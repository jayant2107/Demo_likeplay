import React from "react";
import styled from "styled-components";
import {
  SecondUser,
  SixUser,
  ThirdUser,
  UserBlock,
  fifthUser,
  fourthUser,
} from "../../../Utils/SettingImgaes/SettingP";
import BlockedUserComp from "../../../Components/BlockedUserComp";

const BlockUser = [
  {
    img: UserBlock,
    name: "Kiran",
  },
  {
    img: SecondUser,
    name: "Jasmeen",
  },
  {
    img: ThirdUser,
    name: "Simrela",
  },
  {
    img: fourthUser,
    name: "Julia",
  },
  {
    img: fifthUser,
    name: "Sneha",
  },
  {
    img: SixUser,
    name: "Simrela",
  },
  {
    img: UserBlock,
    name: "Kriti",
  },
  {
    img: SixUser,
    name: "Simrela",
  },
  {
    img: ThirdUser,
    name: "Simrela",
  },
];

const BlockedUser = () => {
  return (
    <>
      <Blocked>Blocked Users</Blocked>
      <WrapperBlock>
        {BlockUser &&
          BlockUser.map((ele) => {
            return (
              <>
                <BlockedUserComp ele={ele} />
              </>
            );
          })}
      </WrapperBlock>
    </>
  );
};

export default BlockedUser;

const Blocked = styled.div`
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
`;
const WrapperBlock = styled.div`
  width: 95%;
  padding: 2%;
  margin-top: 1rem;
  height: 60vh;
  overflow-y: scroll;
  background: #f0f0f0;
  .Unblockdiv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .blockdiv {
    width: 50px;
    height: 50px;
  }
  .blockdiv img {
    height: 100%;
    width: 100%;
  }
  .imgBlock {
    border-radius: 50%;
  }
  .UnBlock {
    width: 109px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border: none;
    height: 33px;
    border-radius: 10px;
    color: #fbfaf8;
    font-size: 15px;
  }
  .name {
    margin-left: 0.5rem;
  }
  .InerMargin:not(:first-child) {
    margin-top: 0.5rem;
  }
`;
const FlexUpgrade = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "none"};
  justify-content: ${({ content }) => content || "none"};
`;
