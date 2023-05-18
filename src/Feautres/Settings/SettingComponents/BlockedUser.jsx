import React from "react";
import styled from "styled-components";
import { UserBlock } from "../../../Utils/SettingImgaes/SettingP";

const BlockUser = [
  {
    img: UserBlock,
    name: "Kiran",
  },
  {
    img: UserBlock,
    name: "Jasmeen",
  },
  {
    img: UserBlock,
    name: "Simrela",
  },
  {
    img: UserBlock,
    name: "Julia",
  },
];

const BlockedUser = () => {
  return (
    <>
      <Blocked>Blocked Users</Blocked>
      <WrapperBlock>
        <div>
          {BlockUser.map((ele) => {
            return (
              <>
                <FlexUpgrade content="space-between" className="InerMargin">
                  <FlexUpgrade align="center" className="SecondFlex">
                    <div>
                      <img src={ele.img} alt="Something Wrong" />
                    </div>
                    <div className="name">{ele.name}</div>
                  </FlexUpgrade>
                  <div>
                    <button className="UnBlock">Unblock</button>
                  </div>
                </FlexUpgrade>
              </>
            );
          })}
        </div>
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
  width: 100%;
  padding: 1% 2%;
  background: #f0f0f0;
  .UnBlock {
    width: 180px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border: none;
    height: 48px;
    border-radius: 10px;
    color: #fbfaf8;
    font-size: 15px;
  }
  .name {
    margin-left: 0.5rem;
  }

  .InerMargin {
    margin-top: 0.5rem;
  }
`;
const FlexUpgrade = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "none"};
  justify-content: ${({ content }) => content || "none"};
`;
