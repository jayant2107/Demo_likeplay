import React, { useState } from "react";
import { diamond } from "../../../Utils/IconsP";
import {
  ButtonUpdate,
  FlexUpgrade,
  Plan,
  UpdateBtn,
  Upgrade,
} from "./UpgradeSubscription";
import Cancelsub from "../../../Components/Cancelsub";
import { upgradeArr } from "../../../Data/SettingData";
import { Modal } from "antd";
import { StyledDeleteModal } from "../../../Modals/DeleteModal";
import StyledButton from "../../../Components/Button";
import { CancelSubscriptiondata } from "../../../Modals/ModalData/DeleteAccount";

const CancelSubscription = () => {
  const [cancelMod, setCancelMod] = useState(false);
  const CancelSub = () => {
    setCancelMod(true);
  };
  const CloseCancelSub = () => {
    setCancelMod(false);
  };
  return (
    <>
      <Plan>Plan details</Plan>
      <Upgrade>
        <div className="innerUpgrade">
          <FlexUpgrade Content="space-between" padding="2% 0">
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
                  <Cancelsub ele={ele} />
                </>
              );
            })}
        </div>
      </Upgrade>
      <UpdateBtn onClick={CancelSub}>
        <ButtonUpdate background="linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%)">
          Cancel Subscription
        </ButtonUpdate>
      </UpdateBtn>
      {cancelMod && (
        <Modal
          open={cancelMod}
          onOk={CloseCancelSub}
          onCancel={CloseCancelSub}
          className="modalDesign"
          footer={null}
        >
          {CancelSubscriptiondata && (
            <StyledDeleteModal>
              <div className="modal-head">
                <div className="heading">{CancelSubscriptiondata.name}</div>
              </div>
              <div className="modal-para">{CancelSubscriptiondata.para}</div>
              <div className="modal-buttons">
                <div className="buttons-content">
                  <div className="cancel-btn" onClick={CloseCancelSub}>
                    <StyledButton text="#242424" bg="#f0f0f0">
                      Cancel
                    </StyledButton>
                  </div>
                  <div className="yes-btn" onClick={CloseCancelSub}>
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

export default CancelSubscription;
