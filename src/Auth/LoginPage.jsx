import React from "react";
import ResHeaderComponent from "./RegistrationPage/ResHeader";
import { Logimg } from "../Utils/RegistrationImg/Registrationflie";
import { LoginBg } from "../Utils/RegistrationImg/Registrationflie";

import {
  RisgistionBgImg,
  FromStyleDiv,
  ButtonStyle,
  RisgistationPage1,
} from "../Auth/RegistrationPage/style";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <RisgistionBgImg height="100vh" imgUrl={LoginBg}>
        <ResHeaderComponent />
        <RisgistationPage1>
          <div className="Risgistation_content">
            <div className="risgistation_img_log">
              <img src={Logimg} className="rig_img_log" alt="empty" />
              <h1>The #Dating Site in Nigeria</h1>
            </div>
            <FromStyleDiv>
              <div className="registation_form">
                <h2 className="loginHeading">Login</h2>
                <lable>Username/Email</lable>
                <input
                  type="text"
                  className="resgistation_input"
                  placeholder="Username/Email"
                />
                <br></br>
                <lable>Password</lable>
                <input
                  type="Password"
                  className="resgistation_input"
                  placeholder="Password"
                />
                <p className="fogotpassword">Forgot Password</p>
                <br></br>
                <br></br>
                <div className="btn">
                  <ButtonStyle width="27rem" margin="1rem 0">
                    {" "}
                    Login{" "}
                  </ButtonStyle>
                  <p>
                    Don't have a account{" "}
                    <span onClick={() => navigate("/Registration")}>
                      Register
                    </span>
                  </p>
                </div>
              </div>
            </FromStyleDiv>
          </div>
        </RisgistationPage1>
      </RisgistionBgImg>
    </>
  );
};

export default LoginPage;
