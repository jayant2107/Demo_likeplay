import React from "react";
import styled from "styled-components";
import { Check, diamond } from "../../Utils/IconsP";
let upgradeArr = [
  {
    header: "Complimentary: 5 Free Days upon Sign-Up",
    content: true,
  },
  {
    header: "Unlimited Post on Take the FLOOR",
    content: false,
    subheader: "3 PHOTO",
  },
  {
    header: "Audio Voice-Note Messages",
    content: false,
    subheader: "10 MATCHES",
  },
];
const UpgradeSubscription = () => {
  return (
    <>
      <Plan>Plan details</Plan>
      <Upgrade>
        <div className="innerUpgrade">
          <FlexUpgrade Content="space-between">
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
          {upgradeArr.map((ele) => {
            return (
              <>
                <FlexUpgrade Content="space-between">
                  <div className="Comp">{ele.header}</div>
                  <div className="check">
                    {ele.content ? (
                      <img src={Check} alt="Something Wrong" />
                    ) : (
                      <span className="subheader">{ele.subheader}</span>
                    )}
                  </div>
                </FlexUpgrade>
              </>
            );
          })}
        </div>
      </Upgrade>
      <UpdateBtn>
        <ButtonUpdate background="linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%)">
          Update Subscription
        </ButtonUpdate>
      </UpdateBtn>
    </>
  );
};

export default UpgradeSubscription;
const Plan = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const Upgrade = styled.div`
  width: 100%;
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
    width: 15%;
    text-align: center;
  }
  .Dollar {
    color: red;
    float: right;
  }

  .ClearD {
    clear: right;
  }
  .Comp {
    width: 25%;
    font-size: 12px;
  }
`;
const UpdateBtn = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const FlexUpgrade = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "none"};
  justify-content: ${({ Content }) => Content || "none"};
  flex-direction: ${({ Direction }) => Direction || "none"};
  margin-top: 12px;
`;
const ButtonUpdate = styled.button`
  background: ${({ background }) => background || "none"};
  width: 28%;
  height: 48px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 18px;
`;
