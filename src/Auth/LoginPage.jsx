import React from "react";
import ResHeaderComponent from "./RegistrationPage/ResHeader";
import { Logimg } from "../Utils/RegistrationImg/Registrationflie";
import { LoginBg } from "../Utils/RegistrationImg/Registrationflie";
import { Formik, Form, Field } from 'formik';

import {
  RisgistionBgImg,
  FromStyleDiv,
  ButtonStyle,
  RisgistationPage1,
} from "../Auth/RegistrationPage/style";
import { useNavigate } from "react-router-dom";
import Inputfield from "../Validation/Inputfield";
import * as Yup from 'yup';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit=(values)=>{
    console.log(JSON.stringify(values),"values")
    console.log("--------")

  }
 const loginvalidation=Yup.object().shape({
  email:Yup.string().email("Invalid email").required(" Email is Required*"),
  password:Yup.string().required(" Password is Required*")

 })

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
            <Formik
            initialValues={{
              email:'',
              password:''
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
                  name='email'
                  
                  type="text"
                  className="resgistation_input"
                  placeholder="Username/Email"
                  component={Inputfield}
                />
                <br></br>
                <lable>Password</lable>
                <Field 
                  name='password'
                  type="Password"
                  className="resgistation_input"
                  placeholder="Password"
                  component={Inputfield}
                />
                <p className="fogotpassword">Forgot Password</p>
                <br></br>
                <br></br>
                <div className="btn">
                  <ButtonStyle  type="submit" width="27rem" margin="1rem 0">
                    
                    Login
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
            </Form>
            </Formik>
          </div>
        </RisgistationPage1>
      </RisgistionBgImg>
    </>
  );
};

export default LoginPage;
