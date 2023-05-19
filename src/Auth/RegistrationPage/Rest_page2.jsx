import React from "react";
import ResHeaderComponent from "./ResHeader";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
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
import { Input } from "antd";
import Inputfield from "../../Validation/Inputfield";

const ResgistPage2 = ({ Next, Back }) => {
  let percentage = "16%";
  const handleSubmit=(values)=>{
    console.log(values)
    Next()

  }
  const validationschema=Yup.object().shape({
    fullname:Yup.string().required("FullName is required"),
    age:Yup.string().required("Age is required"),
    interested:Yup.string().required("Interest is required")

  })
  

  return (
    <>
      <RisgistionBgImg height="100vh" imgUrl={Artboard2}>
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
              <Formik
                initialValues={{
                  fullname: "",
                  age: "",
                  interested: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationschema}
              >
                <Form>
                  <div className="registation_form">
                    <div className="Welcome">
                      <h3>
                        <b>Wellcome!</b>
                      </h3>
                      <p>
                        <span>Step 1/2</span>
                      </p>
                    </div>
                    <lable>
                      Full Name<span>*</span>
                    </lable>
                    <Field
                      name="fullname"
                      type="text"
                      className="resgistation_input"
                      placeholder="Username"
                      component={Inputfield}
                    />
                    <br></br>
                    <lable>
                      Age<span>*</span>
                    </lable>
                    <Field
                      name="age"
                      type="Email"
                      className="resgistation_input"
                      placeholder="Email"
                      component={Inputfield}
                    />
                    <br></br>
                    <lable>
                      Gender<span>*</span>
                    </lable>
                    <div className="gender_btn">
                      <ButtonStyle
                        width="11rem"
                        border="1px black solid"
                        bgcolour="white"
                        color="black"
                      >
                        {" "}
                        Male{" "}
                      </ButtonStyle>
                      <ButtonStyle
                        width="11rem"
                        margin="1rem"
                        bgcolour="#A8580F"
                      >
                        {" "}
                        Female{" "}
                      </ButtonStyle>
                    </div>
                    <lable>
                      Interested In<span>*</span>
                    </lable>
                    <Field
                      name='interested'
                      type="text"
                      className="resgistation_input"
                      placeholder="willmith1234221"
                      component={Inputfield}
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
                        type="submit"
                      >
                        {" "}
                        Next{" "}
                      </ButtonStyle>
                    </div>
                  </div>
                </Form>
              </Formik>
            </FromStyleDiv>
          </div>
        </RisgistationPage1>
      </RisgistionBgImg>
    </>
  );
};

export default ResgistPage2;
