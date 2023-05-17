import React from "react";
import styled from "styled-components";
import { arrow, trash } from "../../Utils/IconsP";
const Settings = () => {
  return (
    <>
      <Wrapper>
        <div className="Header">
          <div className="Setting">Settings</div>
        </div>
        <FlexCustom className="mainContainer">
          <div className="SetLeft">
            <div>
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
              <button className="Delete">
                <div className="innerFlexBtn">
                  <div>
                    <img src={trash} alt="Something Wrong" />
                  </div>
                  <div className="deleteac">Delete Account</div>
                </div>
              </button>
            </div>
          </div>
          <div className="SetRight">jkhjk</div>
        </FlexCustom>
      </Wrapper>
    </>
  );
};

export default Settings;

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  height: 100vh;
  .Header {
    background-color: #f0f0f0;
    font-weight: 600;
    font-size: 18px;
    height: 10vh;
  }
  .Header .Setting {
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    padding-left: 22px;
  }
  .Delete {
    width: 75%;
    height: 3rem;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border: none;
    border-radius: 10px;
    color: white;
  }
  .mainContainer {
    height: 90vh;
  }
  .SetLeft {
    width: 25%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 50px 0%;
    height: 100%;
  }

  .SetLeft > div div:not(:first-child) {
    margin-top: 5%;
  }
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

  .left {
    border-top: 0;
    border-bottom: 0;
    border-right: 0;
  }

  .innerFlexBtn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .deleteac {
    padding-bottom: 12px;
    padding-left: 6px;
  }
`;
const FlexCustom = styled.div`
  display: flex;
  align-items: ${({ Align }) => Align || "none"};
  justify-content: ${({ Content }) => Content || "none"};
  flex-direction: ${({ Direction }) => Direction || "none"};
`;
