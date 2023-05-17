import React from "react";
import styled from "styled-components";
import { arrow, trash } from "../../Utils/IconsP";
import ReferFriend from "./ReferFriend";
import ResetPassword from "./ResetPassword";
import UpgradeSubscription from "./UpgradeSubscription";
const Settings = () => {
  return (
    <>
      <Wrapper>
        <div className="Header">
          <div className="Setting">Settings</div>
        </div>
        <div className="mainContainer">
          <div className="SetLeft">
            <div className="Setfir">
              <div>
                <button className="NormalBtn">
                  <FlexCustom Content="space-between" Align="center">
                    <div>Reset Password</div>
                    <div>
                      <img src={arrow} alt="Something wrong" />
                    </div>
                  </FlexCustom>
                </button>
              </div>
              <div>
                <button className="NormalBtn">
                  <FlexCustom Content="space-between" Align="center">
                    <div>Refer Friends</div>
                    <div>
                      <img src={arrow} alt="Something wrong" />
                    </div>
                  </FlexCustom>
                </button>
              </div>
              <div>
                <button className="NormalBtn">
                  <FlexCustom Content="space-between" Align="center">
                    <div className="Upgrade">
                      Upgrade my
                      <div>subscription</div>
                    </div>
                    <div>
                      <img src={arrow} alt="Something wrong" />
                    </div>
                  </FlexCustom>
                </button>
              </div>
              <div>
                <button className="NormalBtn">
                  <FlexCustom Content="space-between" Align="center">
                    <div>Blocked Users</div>
                    <div>
                      <img src={arrow} alt="Something wrong" />
                    </div>
                  </FlexCustom>
                </button>
              </div>
              <div>
                <button className="NormalBtn">
                  <FlexCustom Content="space-between" Align="center">
                    <div>Cancel Subscription</div>
                    <div>
                      <img src={arrow} alt="Something wrong" />
                    </div>
                  </FlexCustom>
                </button>
              </div>
            </div>
            <div>
              <div className="innerFlexBtn">
                <div>
                  <img src={trash} alt="Something Wrong" />
                </div>
                <div className="deleteac">Delete Account</div>
              </div>
            </div>
          </div>
          <div className="SetRight">
            <UpgradeSubscription />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Settings;

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  .Header {
    background-color: #f0f0f0;
    font-weight: 600;
    font-size: 18px;
    height: 10vh;
  }
  .Setfir {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .Header .Setting {
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    padding-left: 22px;
  }
  .mainContainer {
    display: flex;
    align-items: start;
    padding: 2rem 0;
  }
  .SetLeft {
    width: 25%;
    display: flex;
    /* justify-content: space-around; */
    flex-direction: column;
  }
  .SetLeft > div:not(:first-child) {
    margin-top: 26%;
  }

  /* .SetLeft > div div:not(:first-child) {
    margin-top: 4%;
  } */
  .NormalBtn {
    width: 80%;
    height: 58px;
    padding: 3% 5%;
    border: none;
    font-weight: 600;
  }
  //css for Active btn
  .ActiveState {
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
  }

  .gradient {
    border-image-source: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
  }
  .SetRight {
    width: 65%;
  }

  .left {
    border-top: 0;
    border-bottom: 0;
    border-right: 0;
  }

  .innerFlexBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 3rem;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border: none;
    border-radius: 10px;
    color: white;
  }
  .deleteac {
    padding-left: 6px;
  }
`;
const FlexCustom = styled.div`
  display: flex;
  align-items: ${({ Align }) => Align || "none"};
  justify-content: ${({ Content }) => Content || "none"};
  flex-direction: ${({ Direction }) => Direction || "none"};
`;
