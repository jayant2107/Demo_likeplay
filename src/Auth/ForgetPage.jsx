import React, { useState } from "react";
import ResHeaderComponent from "./RegistrationPage/ResHeader";
import { forgotbg } from "../Utils/RegistrationImg/Registrationflie";
import {
  RisgistionBgImg,
  FromStyleDiv,
  ButtonStyle,
  RisgistationPage1,
} from "../Auth/RegistrationPage/style";
import ForgetPageMessage from "./ForgetPageMessage";
// import Rest_page15 from './RegistrationPage/Rest_page15'

const ForgetPage = () => {
  const [open,setOpen] = useState(false);

  const changePassword = () => {
    setOpen(!open);
  }

  return (
    <>
    {
      open ? <ForgetPageMessage/> :
      <RisgistionBgImg height="100vh" imgUrl={forgotbg}>
        <ResHeaderComponent />
        <RisgistationPage1>
          <div className="Risgistation_content2">
            <div style={{ margin: "4rem 0" }}>
              <FromStyleDiv>
                <div className="registation_form">
                  <div className="Welcome">
                    <h3>
                      <b>Forgot Password</b>
                    </h3>
                  </div>
                  <div className="registation_form">
                    <lable>Email</lable>
                    <input
                      type="Email"
                      className="resgistation_input"
                      placeholder="Email"
                    />
                  </div>
                  <div className="btn">
                    <ButtonStyle width="25rem" onClick={changePassword}>Send Varification</ButtonStyle>
                  </div>
                </div>
              </FromStyleDiv>
            </div>
          </div>
        </RisgistationPage1>
      </RisgistionBgImg>
}
    </>
  );
};

export default ForgetPage;
