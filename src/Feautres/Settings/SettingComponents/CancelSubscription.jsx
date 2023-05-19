import React from "react";
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

const CancelSubscription = () => {
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
          {upgradeArr.map((ele) => {
            return (
              <>
                <Cancelsub ele={ele} />
              </>
            );
          })}
        </div>
      </Upgrade>
      <UpdateBtn>
        <ButtonUpdate background="linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%)">
          Cancel Subscription
        </ButtonUpdate>
      </UpdateBtn>
    </>
  );
};

export default CancelSubscription;
