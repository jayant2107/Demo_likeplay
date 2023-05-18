import React, { useState } from "react";
import styled from "styled-components";
import { arrow, trash } from "../../Utils/IconsP";
import ReferFriend from "./SettingComponents/ReferFriend";
import ResetPassword from "./SettingComponents/ResetPassword";
import UpgradeSubscription from "./SettingComponents/UpgradeSubscription";
import BlockedUser from "./SettingComponents/BlockedUser";
import CancelSubscription from "./SettingComponents/CancelSubscription";

const Settings = () => {
  const [btn, setBtn] = useState("Reset");
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
                <button
                  className={
                    btn === "Reset" ? "gradient ActiveState left" : "NormalBtn"
                  }
                  onClick={() => setBtn("Reset")}
                >
                  <FlexCustom Content="space-between" Align="center">
                    <div>Reset Password</div>
                    <div>
                      <img src={arrow} alt="Something wrong" />
                    </div>
                  </FlexCustom>
                </button>
              </div>
              <div>
                <button
                  className={
                    btn === "Refer" ? "gradient ActiveState left" : "NormalBtn"
                  }
                  onClick={() => setBtn("Refer")}
                >
                  <FlexCustom Content="space-between" Align="center">
                    <div>Refer Friends</div>
                    <div>
                      <img src={arrow} alt="Something wrong" />
                    </div>
                  </FlexCustom>
                </button>
              </div>
              <div>
                <button
                  className={
                    btn === "Upgrade"
                      ? "gradient ActiveState left"
                      : "NormalBtn"
                  }
                  onClick={() => setBtn("Upgrade")}
                >
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
                <button
                  className={
                    btn === "Blocked"
                      ? "gradient ActiveState left"
                      : "NormalBtn"
                  }
                  onClick={() => setBtn("Blocked")}
                >
                  <FlexCustom Content="space-between" Align="center">
                    <div>Blocked Users</div>
                    <div>
                      <img src={arrow} alt="Something wrong" />
                    </div>
                  </FlexCustom>
                </button>
              </div>
              <div>
                <button
                  className={
                    btn === "Cancel" ? "gradient ActiveState left" : "NormalBtn"
                  }
                  onClick={() => setBtn("Cancel")}
                >
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
            {btn === "Refer" ? (
              <ReferFriend />
            ) : btn === "Reset" ? (
              <ResetPassword />
            ) : btn === "Upgrade" ? (
              <UpgradeSubscription />
            ) : btn === "Blocked" ? (
              <BlockedUser />
            ) : (
              <CancelSubscription />
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Settings;

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  height: 100vh;
  .Header {
    background-color: #f0f0f0;
    font-weight: 600;
    font-size: 18px;
    height: 10vh;
  }
  .Setfir {
    display: flex;
    flex-direction: column;
  }
  .Setfir > div:not(:first-child) {
    margin-top: 5%;
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
    height: 85vh;
  }
  .SetLeft {
    width: 25%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
  }
  .SetLeft > div:not(:first-child) {
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
    width: 80%;
    height: 58px;
    padding: 3% 5%;
    font-weight: 600;
    background: pink;
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
