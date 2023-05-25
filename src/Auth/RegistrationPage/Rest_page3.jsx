import React from "react";
import ResHeaderComponent from "./ResHeader";
import { Artboard3 } from "../../Utils/RegistrationImg/Registrationflie";
import {
  RisgistionBgImg,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";
import { SelectOptionStyle } from "./style";

const ResgistPage3 = ({ Next, Back }) => {
  let percentage = "26%";
  return (
    <>
      <RisgistionBgImg height="auto" imgUrl={Artboard3}>
        <ResHeaderComponent />
        <RisgistationPage1>
          <div className="Risgistation_content2">
            {/* <div className='risgistation_img_log'>
            <img src={logg}  className='rig_img_log' alt='empty'/>
            <h1>The #Dating Site in Nigeria</h1>
          </div>  */}
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
                    <span>Step 2/6</span>
                  </p>
                </div>
                <lable>
                  Status<span>*</span>
                </lable>
                <SelectOptionStyle>
                  <option>Select Status</option>
                </SelectOptionStyle>
                <br></br>
                <div className="body_heigth">
                  <div>
                    <lable>
                      Body Type<span>*</span>
                    </lable>
                    <SelectOptionStyle width="12rem">
                      <option>Select Body Type</option>
                    </SelectOptionStyle>
                  </div>
                  <div>
                    <lable>
                      Height<span>*</span>
                    </lable>
                    <SelectOptionStyle width="12rem">
                      <option>Select Height</option>
                    </SelectOptionStyle>
                  </div>
                </div>
                <lable>
                  Education<span>*</span>
                </lable>
                <SelectOptionStyle>
                  <option>Select Education</option>
                </SelectOptionStyle>
                <br></br>
                <lable>
                  Empoyment<span>*</span>
                </lable>
                <SelectOptionStyle>
                  <option>Select Employment</option>
                </SelectOptionStyle>
                <br></br>
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

export default ResgistPage3;
