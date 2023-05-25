import React, { useState } from "react";
import ResHeaderComponent from "./ResHeader";
import { Artboard2 } from "../../Utils/RegistrationImg/Registrationflie";
import {
  RisgistionBgImg,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";

const OnBtn = { bgcolour: "#a8580f", color: "white", border: "none" };
const OffBtn = {
  bgcolour: "white",
  color: "gray",
  border: "1px solid #e2e2e2",
};

const ResgistPage2 = ({ Next, Back }) => {
  let percentage = "16%";
  const [active, setActive] = useState(OffBtn);
  const [active2, setActive2] = useState(OnBtn);
  const [interest,setInterest] = useState('Men');

  const ActiveButton = () => {
    if (active === OffBtn) {
      setActive(OnBtn);
      setActive2(OffBtn);
      setInterest('Women');
    }
  };

  const ActiveButton2 = () => {
    if (active2 === OffBtn) {
      setActive2(OnBtn);
      setActive(OffBtn);
      setInterest('Men')
    }
  };

  return (
    <>
      <RisgistionBgImg height="auto" imgUrl={Artboard2}>
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
                    <span>Step 1/2</span>
                  </p>
                </div>
                <lable>
                  Full Name<span>*</span>
                </lable>
                <input
                  type="text"
                  className="resgistation_input"
                  placeholder="Username"
                />
                <br></br>
                <lable>
                  Age<span>*</span>
                </lable>
                <input
                  type="Email"
                  className="resgistation_input"
                  placeholder="Age"
                />
                <br></br>
                <lable>
                  Gender<span>*</span>
                </lable>
                <div className="gender_btn">
                  <ButtonStyle
                    width="11rem"
                    border={active.border}
                    bgcolour={active.bgcolour}
                    color={active.color}
                    onClick={ActiveButton}
                  >
                    {" "}
                    Male{" "}
                  </ButtonStyle>
                  <ButtonStyle
                    width="11rem"
                    margin="1rem"
                    border={active2.border}
                    bgcolour={active2.bgcolour}
                    color={active2.color}
                    onClick={ActiveButton2}
                  >
                    {" "}
                    Female{" "}
                  </ButtonStyle>
                </div>
                <lable>
                  Interested In<span>*</span>
                </lable>
                <input
                  type="text"
                  className="resgistation_input"
                  placeholder="willmith1234221"
                  value={interest}
                />
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

export default ResgistPage2;
