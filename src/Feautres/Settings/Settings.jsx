import React from "react";
import styled from "styled-components";
import "../../Style/Settings/Setting.css";
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
`;
const FlexCustom = styled.div`
  display: flex;
  align-items: ${({ Align }) => Align || "none"};
  justify-content: ${({ Content }) => Content || "none"};
  flex-direction: ${({ Direction }) => Direction || "none"};
`;
