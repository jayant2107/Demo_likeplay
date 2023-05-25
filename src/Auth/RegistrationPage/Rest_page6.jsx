import React from "react";
import ResHeaderComponent from "./ResHeader";
import { Artboard6 } from "../../Utils/RegistrationImg/Registrationflie";

import {
  RisgistionBgImg,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";

const ResgistPage6 = ({ Next, Back }) => {
  let percentage = "48%";
  return (
    <>
      <RisgistionBgImg height="auto" imgUrl={Artboard6}>
        <ResHeaderComponent />
        <RisgistationPage1>
          <div className="Risgistation_content2">
            <FromStyleDiv>
              <ProgessStyleDiv>
                <p>
                  <b>{percentage}</b> Complete
                </p>
                <ProgessStyleDivline>
                  <ProgessStyleDivfilline
                    width={percentage}
                  ></ProgessStyleDivfilline>
                </ProgessStyleDivline>
              </ProgessStyleDiv>
              <div className="registation_form">
                <div className="Welcome">
                  <h3>
                    <b>Welcome!</b>
                  </h3>
                  <p>
                    <span>Step /6</span>
                  </p>
                </div>
                <lable>
                  About me<span>*</span>
                </lable>
                <textarea
                  type="textarea"
                  className="textareaa"
                  placeholder="Type something......"
                ></textarea>
                <div className="btn">
                  <ButtonStyle
                    onClick={() => {
                      Back();
                    }}
                    bgcolour="#e5e5e5"
                    color="black"
                  >
                    {" "}
                    Back{" "}
                  </ButtonStyle>
                  <ButtonStyle
                    onClick={() => {
                      Next();
                    }}
                  >
                    {" "}
                    Next{" "}
                  </ButtonStyle>
                </div>
              </div>
            </FromStyleDiv>
          </div>
        </RisgistationPage1>
      </RisgistionBgImg>
    </>
  );
};

export default ResgistPage6;
