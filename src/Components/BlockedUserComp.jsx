import React from "react";
import { FlexUpgrade } from "../Feautres/Settings/SettingComponents/UpgradeSubscription";

const BlockedUserComp = ({ ele }) => {
  return (
    <>
      <FlexUpgrade Content="space-between" className="InerMargin">
        <FlexUpgrade align="center" className="SecondFlex">
          <div>
            <img src={ele.img} alt="Something Wrong" />
          </div>
          <div className="name">{ele.name}</div>
        </FlexUpgrade>
        <div>
          <button className="UnBlock">Unblock</button>
        </div>
      </FlexUpgrade>
    </>
  );
};

export default BlockedUserComp;
