import React, { useState } from "react";
import { FlexUpgrade } from "../Feautres/Settings/SettingComponents/UpgradeSubscription";
import { Modal } from "antd";
import { BlockUserdata } from "../Modals/ModalData/DeleteAccount";
import { StyledDeleteModal } from "../Modals/DeleteModal";
import StyledButton from "./Button";

const BlockedUserComp = ({ ele }) => {
  const [unblock, setUnblock] = useState(false);
  const Unblock = () => {
    setUnblock(true);
  };
  const closeUnblock = () => {
    setUnblock(false);
  };
  return (
    <>
      <FlexUpgrade Content="space-between" className="InerMargin">
        <FlexUpgrade align="center" className="SecondFlex">
          <div className="blockdiv">
            <img src={ele.img} alt="Something Wrong" className="imgBlock" />
          </div>
          <div className="name">{ele.name}</div>
        </FlexUpgrade>
        <div className="Unblockdiv" onClick={Unblock}>
          <button className="UnBlock">Unblock</button>
        </div>
      </FlexUpgrade>
      {unblock && (
        <Modal
          open={unblock}
          onOk={closeUnblock}
          onCancel={closeUnblock}
          className="modalDesign"
          footer={null}
        >
          {BlockUserdata && (
            <StyledDeleteModal>
              <div className="modal-head">
                <div className="heading">{BlockUserdata.name}</div>
              </div>
              <div className="modal-para">{BlockUserdata.para}</div>
              <div className="modal-buttons">
                <div className="buttons-content">
                  <div className="cancel-btn" onClick={closeUnblock}>
                    <StyledButton text="#242424" bg="#f0f0f0">
                      Cancel
                    </StyledButton>
                  </div>
                  <div className="yes-btn" onClick={closeUnblock}>
                    <StyledButton
                      text="white"
                      bg="linear-gradient(#ff483c 100%, #ff2c5a 100%)"
                    >
                      Yes
                    </StyledButton>
                  </div>
                </div>
              </div>
            </StyledDeleteModal>
          )}
        </Modal>
      )}
    </>
  );
};

export default BlockedUserComp;
