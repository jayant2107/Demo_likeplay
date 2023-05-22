import React, { useState } from "react";
import ResHeaderComponent from "./RegistrationPage/ResHeader";
import { Logimg } from "../Utils/RegistrationImg/Registrationflie";
import { LoginBg } from "../Utils/RegistrationImg/Registrationflie";
import { Formik, Form, Field } from "formik";
import ForgetPage from "./ForgetPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  Input, Spin } from "antd";

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
import { ValidUser } from "../Redux/SliceOfRedux/LoginSlice";
import styled from "styled-components";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [loading,setloading]=useState(false)
  const value= useSelector((e)=>e)
  console.log(value,"vvv")

  const [forgot,setForgot] = useState(false)
  const OpenFogot =()=>setForgot(true)
  const CloseFogot =()=>setForgot(false)
  // const CloseFogot =()=>setForgot(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginvalidation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(" Email is Required*"),
    password: Yup.string().required(" Password is Required*"),
  });

  const handleSubmit = (values) => {
    setloading(true)
   
    console.log(values,"--------");
    setTimeout(() => {
      if(values.email==='admin123@gmail.com' && values.password==='admin123'){
        dispatch(ValidUser(true));
        setloading(false)
      }
      else{
        setloading(false)
        console.log("eror")
        toast.error("enter correct password and email")
        
       
      }
      
    }, 2000);


  };


  return (
    <>
      {forgot ? (
        <ForgetPage />
      ) : (
        <RisgistionBgImg height="100vh" imgUrl={LoginBg}>
          <ResHeaderComponent />
          <RisgistationPage1>
            <div className="Risgistation_content">
              <div className="risgistation_img_log" >
                <img src={Logimg}  className="rig_img_log" alt="empty" />
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
                      <Field
                        name="password"
                        type="Password"
                        className="resgistation_input"
                        placeholder="Password"
                        component={Inputfield}
                      />
                      <p className="fogotpassword" onClick={OpenFogot}>
                        Forgot Password
                      </p>
                      <br></br>
                      <br></br>
                      <div className="btn">
                        {
                          loading?
                          <LoaderWrapper>
                            <Spin size='large' />
                          </LoaderWrapper>:  <ButtonStyle
                          width="27rem"
                          margin="1rem 0"
                          type="submit"
                        >
                          Login
                        </ButtonStyle>
                        }

                    
                      
                        <p style={{ cursor: "pointer" }}>
                          Don't have a account{" "}
                          <span onClick={() => navigate("/Registration")}>
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
const LoaderWrapper = styled.div`
width: 100%;

display: flex;
align-items: center;
justify-content: center;
`;
