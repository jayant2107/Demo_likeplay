import React, { useState } from "react";
import ResHeaderComponent from "./RegistrationPage/ResHeader";
import { Logimg } from "../Utils/RegistrationImg/Registrationflie";
import { LoginBg } from "../Utils/RegistrationImg/Registrationflie";
import { Formik, Form, Field } from "formik";
import ForgetPage from "./ForgetPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Input, Spin } from "antd";

import {
  RisgistionBgImg,
  FromStyleDiv,
  ButtonStyle,
  RisgistationPage1,
} from "../Auth/RegistrationPage/style";
import { useNavigate } from "react-router-dom";
import Inputfield from "../Validation/Inputfield";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { ValidUser, TempValidUser } from "../Redux/SliceOfRedux/LoginSlice";
import styled from "styled-components";
import { LoginApi } from "Services/collection";
import { AddUserId } from "Redux/SliceOfRedux/UserId";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {countAdd} from "../Redux/SliceOfRedux/RegistrationSlice";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [loading, setloading] = useState(false);
  const [passEye, setPassEye] = useState(false);

  const value = useSelector((e) => e);
  console.log(value, "vvv");

  const count  = useSelector((state)=>state.RegistrationSlice.count)

  const [forgot, setForgot] = useState(false);
  const OpenFogot = () => setForgot(true);
  const CloseFogot = () => setForgot(false);
  // const CloseFogot =()=>setForgot(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginvalidation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(" Email is Required*"),
    password: Yup.string().required(" Password is Required*"),
  });

  const handleSubmit = async (values) => {
    setloading(true);
    const res = await LoginApi(values);
    console.log("res    :", res);
    if (res?.status === 200) {
      setloading(false);
      userStatus(res);
    } else {
      setloading(false);
      console.log(res, "ressssssss");
      toast.error(res?.message || "Enter correct password and email");
    }
  };

  const userStatus = (res) => {
    dispatch(AddUserId(res?.data?.id))
    if (res.data.profile_status < 9) {
      if (res.data.profile_status === 0) {
        dispatch(countAdd(1));
        navigate("/Registration");
      } else if (res.data.profile_status === 1) {
        dispatch(countAdd(3));
        navigate("/ResgistPage4");
      } else if (res.data.profile_status === 2) {
        dispatch(countAdd(5));
        navigate("/ResgistPage6");
      } else if (res.data.profile_status === 3) {
        dispatch(countAdd(6));
        navigate("/ResgistPage7");
      } else if (res.data.profile_status === 4) {
        dispatch(countAdd(7));
        navigate("/ResgistPage8");
      } else if (res.data.profile_status === 5) {
        dispatch(countAdd(8));
        navigate("/ResgistPage9");
      }
      dispatch(TempValidUser(res?.data));
    } else {
      dispatch(ValidUser(res?.data));
    }
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  // Test comment

  return (
    <>
      {forgot ? (
        <ForgetPage />
      ) : (
        <RisgistionBgImg height="100vh" imgUrl={LoginBg}>
          <ResHeaderComponent />
          <RisgistationPage1>
            <div className="Risgistation_content">
              <div className="risgistation_img_log">
                <img src={Logimg} className="rig_img_log" alt="empty" />
                <h1>The #Dating Site in Nigeria</h1>
              </div>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={loginvalidation}
              >
                <Form>
                  <FromStyleDiv>
                    <div className="registation_form">
                      <h2 className="loginHeading">Login</h2>
                      <lable>Username/Email</lable>
                      <Field
                        name="email"
                        type="text"
                        className="resgistation_input"
                        placeholder="Username/Email"
                        component={Inputfield}
                      />
                      <br></br>
                      <lable>Password</lable>
                      <div className="password-div">
                        <Field
                          name="password"
                          type={passEye === false ? "password" : "type"}
                          className="resgistation_input"
                          placeholder="Password"
                          component={Inputfield}
                        />
                        <span onClick={() => setPassEye(!passEye)}>
                          {passEye === false ? (
                            <AiFillEyeInvisible className="eyeLogo" />
                          ) : (
                            <AiFillEye className="eyeLogo" />
                          )}
                        </span>
                      </div>
                      <p className="fogotpassword" onClick={OpenFogot}>
                        Forgot Password
                      </p>
                      <br></br>
                      <br></br>
                      <div className="btn">
                        {loading ? (
                          <LoaderWrapper>
                            <Spin indicator={antIcon} />
                          </LoaderWrapper>
                        ) : (
                          <ButtonStyle
                            width="26rem"
                            margin="1rem 0"
                            type="submit"
                          >
                            Login
                          </ButtonStyle>
                        )}

                        <p style={{ cursor: "pointer" }}>
                          Don't have a account{" "}
                          <span onClick={() => navigate("/Register")}>
                            Register
                          </span>
                        </p>
                      </div>
                    </div>
                  </FromStyleDiv>
                </Form>
              </Formik>
            </div>
          </RisgistationPage1>
        </RisgistionBgImg>
      )}
    </>
  );
};

export default LoginPage;
export const LoaderWrapper = styled.div`
  width: 100%;
  padding: 10px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
