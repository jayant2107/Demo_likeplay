import React from "react";
import styled from "styled-components";
import { Check, diamond } from "../../../Utils/IconsP";
import {
  ButtonUpdate,
  FlexUpgrade,
  Plan,
  UpdateBtn,
  Upgrade,
} from "./UpgradeSubscription";
let upgradeArr = [
  {
    header: "Complimentary: 5 Free Days upon Sign-Up",
    content: true,
  },
  {
    header: "Unlimited Post on Take the FLOOR",
    content: false,
    subheader: "3 PHOTO",
  },
  {
    header: "Audio Voice-Note Messages",
    content: true,
    subheader: "10 MATCHES",
  },
  {
    header: "Audio Voice-Note Messages",
    content: false,
    subheader: "10 MATCHES",
  },
  {
    header: "Audio Voice-Note Messages",
    content: true,
    subheader: "10 MATCHES",
  },
  {
    header: "Audio Voice-Note Messages",
    content: false,
    subheader: "Nil",
  },
];
const CancelSubscription = () => {
  return (
    <>
      <Plan>Plan details</Plan>
      <Upgrade>
        <div className="innerUpgrade">
          <FlexUpgrade Content="space-between">
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
                <FlexUpgrade Content="space-between">
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
