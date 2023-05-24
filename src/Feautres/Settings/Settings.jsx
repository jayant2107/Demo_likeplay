import React, { useState } from "react";
import styled from "styled-components";
import { arrow, trash } from "../../Utils/IconsP";
import ReferFriend from "./SettingComponents/ReferFriend";
import ResetPassword from "./SettingComponents/ResetPassword";
import UpgradeSubscription from "./SettingComponents/UpgradeSubscription";
import BlockedUser from "./SettingComponents/BlockedUser";
import CancelSubscription from "./SettingComponents/CancelSubscription";
import { message, Modal, Space } from "antd";
import DeleteModal from "../../Modals/DeleteModal";
import DeleteAccount from "../../Modals/ModalData/DeleteAccount";
const Settings = () => {
  const [btn, setBtn] = useState("Reset");
  const [messageApi, contextHolder] = message.useMessage();
  const [deletemod, setDelete] = useState(false);
  const warning = () => {
    setDelete(true);
  };
  const closeDelete = () => {
    setDelete(false);
  };
  return (
    <>
      {contextHolder}
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
            <div className="DivDele" onClick={() => warning()}>
              <button className="deltebtn">
                <div className="innerFlexBtn">
                  <div>
                    <img src={trash} alt="Something Wrong" />
                  </div>
                  <div className="deleteac">Delete Account</div>
                </div>
              </button>
            </div>
            {deletemod && (
              <Modal
                open={deletemod}
                onOk={closeDelete}
                onCancel={closeDelete}
                className="modalDesign"
                footer={null}
              >
                <DeleteModal prop={DeleteAccount} closeDelete={closeDelete} />
              </Modal>
            )}
          </div>
          <div className="SetRight">
            {btn === "Refer" ? (
              <div>
                <ReferFriend />
              </div>
            ) : btn === "Reset" ? (
              <div>
                <ResetPassword />
              </div>
            ) : btn === "Upgrade" ? (
              <div>
                <UpgradeSubscription />
              </div>
            ) : btn === "Blocked" ? (
              <div>
                <BlockedUser />
              </div>
            ) : (
              <div>
                <CancelSubscription />
              </div>
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
  .deleteac {
    margin-left: 0.5rem;
  }
  .DivDele {
    width: 80%;
  }
  .Header {
    background-color: #f0f0f0;
    font-weight: 600;
    font-size: 18px;
    height: 88px;
  }
  .deltebtn {
    width: 100%;
    height: 3rem;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
  }
  .SetRight > div {
    margin: 0 2rem;
  }
  .Setfir {
    display: flex;
    flex-direction: column;
  }
  .Setfir > div:not(:first-child) {
    margin-top: 7%;
  }
  .Setfir > div button {
    cursor: pointer;
  }
  .Header .Setting {
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    padding-left: 22px;
    border-right: 1px solid #e2e2e2;
  }
  .mainContainer {
    display: flex;
    align-items: start;

    height: 90vh;
  }
  .mainContainer > div {
    padding: 3rem 0rem;
  }
  .SetLeft {
    width: 30%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    padding: 0rem 0.3px;
    border-right: 1px solid #e2e2e2;
  }
  .NormalBtn {
    width: 228px;
    height: 58px;
    padding: 3% 5%;
    border: none;
    font-weight: 600;
  }
  .ActiveState {
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    width: 228px;
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
  }
`;
const FlexCustom = styled.div`
  display: flex;
  align-items: ${({ Align }) => Align || "none"};
  justify-content: ${({ Content }) => Content || "none"};
  flex-direction: ${({ Direction }) => Direction || "none"};
`;
