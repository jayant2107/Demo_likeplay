import React, { useState } from "react";
import styled from "styled-components";
import { Check, diamond } from "../../../Utils/IconsP";
import UpgradeComp from "../../../Components/UpgradeComp";
import { upgradeArr } from "../../../Data/SettingData";
import { Modal } from "antd";
import GridType from "../../../Layouts/GridLayout";

const UpgradeSubscription = () => {
  const [updatemod, setUpdtemod] = useState(false);
  const UpdateModule = () => {
    setUpdtemod(true);
  };
  const CancelUpdatemodule = () => {
    setUpdtemod(false);
  };
  return (
    <>
      <Plan>Plan details</Plan>
      <Upgrade>
        <div className="innerUpgrade">
          <FlexUpgrade Content="space-between" padding="2% 0%">
            <FlexUpgrade>
              <div>
                <img src={diamond} alt="Something Wrong" />
              </div>
              <div className="Standard">Standard</div>
            </FlexUpgrade>
            <div className="SecondDollar">
              <div className="Dollar">$1,000</div>
              <div className="ClearD">
                Your Pack is Valid till 30 March 2023
              </div>
            </div>
          </FlexUpgrade>
          <hr />
          {upgradeArr &&
            upgradeArr.map((ele) => {
              return (
                <>
                  <UpgradeComp ele={ele} />
                </>
              );
            })}
        </div>
      </Upgrade>
      <UpdateBtn onClick={UpdateModule}>
        <ButtonUpdate background="linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%)">
          Update Subscription
        </ButtonUpdate>
      </UpdateBtn>
      {updatemod && (
        <Modal
          centered
          open={updatemod}
          onOk={CancelUpdatemodule}
          onCancel={CancelUpdatemodule}
          width={1100}
          footer={null}
          style={{ top: 40 }}
        >
          <GridType />
        </Modal>
      )}
    </>
  );
};

export default UpgradeSubscription;
export const Plan = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
export const Upgrade = styled.div`
  width: 95%;
  font-family: "Poppins", sans-serif;
  background: #f0f0f0;
  padding: 2%;
  margin-top: 2%;
  .Standard {
    font-size: 18px;
    margin-left: 5%;
    font-weight: 600;
  }
  .subheader {
    color: #7b7f91;
    font-size: 12px;
  }

  .check {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Dollar {
    color: red;
    float: right;
  }

  .ClearD {
    clear: right;
    font-size: 14px;
    color: gray;
    text-align: center;
  }
  .Comp {
    width: 50%;
    font-size: 12px;
  }
`;
export const UpdateBtn = styled.div`
  text-align: center;
  padding-top: 2rem;
`;

export const FlexUpgrade = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "none"};
  justify-content: ${({ Content }) => Content || "none"};
  flex-direction: ${({ Direction }) => Direction || "none"};
  margin-top: ${({ margin }) => margin || "none"};
  padding: ${({ padding }) => padding || "none"};
`;
export const ButtonUpdate = styled.button`
  background: ${({ background }) => background || "none"};
  width: 226px;
  height: 48px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 16px;
`;
