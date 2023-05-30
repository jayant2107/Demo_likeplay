import React, { useState } from "react";
import ResHeaderComponent from "./ResHeader";
import { Formik, Form, Field } from "formik";

// import bgimg from "./imgss/Artboard1.png"
import Artboard1 from "../../Utils/RegistrationImg/Registrationflie";
import { Logimg } from "../../Utils/RegistrationImg/Registrationflie";
import {
  RisgistionBgImg,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";
import Inputfield from "../../Validation/Inputfield";
import * as Yup from "yup";
import RestEmailPage from "./Rest_emailPage";
import { registerApi } from "Services/collection";
import { toast } from "react-toastify";
import {LoaderWrapper} from 'Auth/LoginPage'
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const ResgistPage1 = () => {
  const [emailVer , setEmailVer] = useState(false);
  const [passEmail , setPassEmail] = useState();
  const [loading,setLoading] = useState(false);

  let percentage = "10%";

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const handlesubmit = async (values) => {
    setLoading(true);
    console.log("vvvv", values);  
    const req={
      "user_name":values.username,
      'email':values.email,
      'password':values.password,
      'refer_code': values.referralcode,
      'profile_status':0,
      'country':'Nigeria'
    }
    const res = await registerApi(req)
    console.log('res   ',res.message)
    console.log('res   ',res.status)
  
    if(res.status ===200){
      setLoading(false);
      setEmailVer(!emailVer);
      setPassEmail(values.email);
    }else{
      setLoading(false);
      toast.error(res?.message || "Enter correct user, password and email")
    }
  };
  const validationschema = Yup.object().shape({
    username: Yup.string().required("Username is Required*"),
    email: Yup.string().email("Invalid email").required(" Email is Required*"),
    password: Yup.string().required("Password is Required*"),
  });
  return (
    <>
    {
      emailVer === false ? 
      <RisgistionBgImg height="auto" imgUrl={Artboard1}>
        <ResHeaderComponent />
        <RisgistationPage1>
          <div className="Risgistation_content">
            <div className="risgistation_img_log">
              <img src={Logimg} className="rig_img_log" alt="empty" />
              <h1>The #Dating Site in Nigeria</h1>
            </div>
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
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  password: "",
                }}
                onSubmit={handlesubmit}
                validationSchema={validationschema}
              >
                <Form>
                  <div className="registation_form">
                    <div className="Welcome">
                      <h3>
                        <b>Registration</b>
                      </h3>
                    </div>
                    <lable>
                      Username<span>*</span>
                    </lable>
                    <Field
                      name="username"
                      type="text"
                      className="resgistation_input"
                      placeholder="Username"
                      component={Inputfield}
                    />
                    <br></br>
                    <lable>
                      Email<span>*</span>
                    </lable>
                    <Field
                      name="email"
                      type="Email"
                      className="resgistation_input"
                      placeholder="Email"
                      component={Inputfield}
                    />
                    <br></br>
                    <lable>
                      Password<span>*</span>
                    </lable>
                    <Field
                      name="password"
                      type="Password"
                      className="resgistation_input"
                      placeholder="Password"
                      component={Inputfield}
                    />
                    <br></br>
                    <lable>
                      Enter Referral code if referred by a friend<span>*</span>
                    </lable>
                    <Field
                    name="referralcode"
                      type="text"
                      className="resgistation_input"
                      placeholder="willmith1234221"
                    />
                    <div className="btn">
                      {
                        loading ? (
                        <LoaderWrapper>
                          <Spin indicator={antIcon} />
                        </LoaderWrapper>
                        ):
                      <ButtonStyle type="submit"> Next </ButtonStyle>
                      }
                      <p>
                        <span>Terms and Conditions</span>
                      </p>
                      <p>
                        How it works <span>www.likeplaylikeplay.com</span>
                      </p>
                    </div>
                  </div>
                </Form>
              </Formik>
            </FromStyleDiv>
          </div>
        </RisgistationPage1>
      </RisgistionBgImg>
      :
      <RestEmailPage passEmail={passEmail} />
              }
    </>
  );
};

export default ResgistPage1;

// <div className='Regisration_1_stap'>
//         <div>
//           <img src='' alt='empty'></img>
//           <h1>The #Dating Site in Nigeria</h1>
//         </div>
//       </div>

// <FromStyleDiv>
//   <ProgessStyleDiv>
//     <p> <b>{percentage}</b> Complete</p>
//     <ProgessStyleDivline>
//       <ProgessStyleDivfilline width={percentage}>
//       </ProgessStyleDivfilline>
//     </ProgessStyleDivline>
//   </ProgessStyleDiv>
//   <div className='registation_form'>
//     <lable>Username<span>*</span></lable>
//     <input type="text" className='resgistation_input' placeholder='Username' />
//     <br></br>
//     <lable>Username<span>*</span></lable>
//     <input type="text" className='resgistation_input' placeholder='Username' />
//     <br></br>
//     <lable>Username<span>*</span></lable>
//     <input type="text" className='resgistation_input' placeholder='Username' />
//     <br></br>
//     <lable>Username<span>*</span></lable>
//     <input type="text" className='resgistation_input' placeholder='Username' />
//   </div>

// </FromStyleDiv>
