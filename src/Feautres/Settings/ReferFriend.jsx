import React from "react";
import styled from "styled-components";
import { Refer } from "../../Utils/SettingImgaes/SettingP";
const ReferFriend = () => {
  return (
    <>
      <ReferWrapper>
        <div>
          <img src={Refer} alt="" />
        </div>
        <div className="willsmith">
          <div>
            <input type="text" />
          </div>
          <div>
            <p>Refer to 5 friends and Earn 1 month subscription</p>
          </div>
        </div>
      </ReferWrapper>
    </>
  );
};

export default ReferFriend;

const ReferWrapper = styled.div`
  width: 100%;
  .willsmith {
    border: 1px dotted;
  }
`;
