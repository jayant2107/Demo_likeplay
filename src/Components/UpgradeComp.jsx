import React from "react";
import { FlexUpgrade } from "../Feautres/Settings/SettingComponents/UpgradeSubscription";
import { Check } from "../Utils/IconsP";

const UpgradeComp = ({ ele }) => {
  return (
    <>
      <FlexUpgrade Content="space-between" margin="6px">
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
};

export default UpgradeComp;
