import React, { useState } from "react";
import ResHeaderComponent from "./RegistrationPage/ResHeader";
import { Logimg } from "../Utils/RegistrationImg/Registrationflie";
import { LoginBg } from "../Utils/RegistrationImg/Registrationflie";
import ForgetPage from "./ForgetPage";
import {  Input } from "antd";

import {
  RisgistionBgImg,
  FromStyleDiv,
  ButtonStyle,
  RisgistationPage1,
} from "../Auth/RegistrationPage/style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ValidUser } from "../Redux/SliceOfRedux/LoginSlice";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const [forgot,setForgot] = useState(false)
  const OpenFogot =()=>setForgot(true)
  const CloseFogot =()=>setForgot(false)
  // const CloseFogot =()=>setForgot(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginFun = () => {
    dispatch(ValidUser("token"));
  };
  return (
    <>
    { forgot ? <ForgetPage/>:
      <RisgistionBgImg height="100vh" imgUrl={LoginBg}>
        <ResHeaderComponent />
        <RisgistationPage1>
          <div className="Risgistation_contentlogin">
            <div className="risgistation_img_log_login">
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
                <Input.Password
                placeholder="input password"
                className="InputMethpassword"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
              />
                      <div className='bottomtext'>
                <p className="fogotpassword" onClick={OpenFogot}>Forgot Password</p>
                <br></br>
                <br></br>
                </div>
                <div className="btn">
                  <ButtonStyle width="27rem" margin="1rem 0" onClick={LoginFun}>
                    Login
                  </ButtonStyle>
                  <div className='bottomtext'>
                  <p style={{cursor:"pointer"}}>
                    Don't have a account{" "}
                    <span onClick={() => navigate("/Registration")}>
                      Register
                    </span>
                  </p>
                </div>
                </div>
              </div>
            </FromStyleDiv>
          </div>
        </RisgistationPage1>
      </RisgistionBgImg>}
    </>
  );
};

export default LoginPage;
