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

import { Page3Data } from "./RegData";
import { Field, Form, Formik } from "formik";
import styled from "styled-components";

import { RegisterFirstStep } from "Services/collection";

const ResgistPage3 = ({ Next, changePage, formData }) => {
  const { status, bodytypes, education, employment, height } = Page3Data;
  let percentage = "26%";

  const initialObj = {
    status : '',
    bodytype : '',
    height:'',
    education:'',
    employment:'',
  }

  const handleSubmit = async (values) => {
    console.log('fun')
    const req = {
      name: formData.name,
      age: formData.age,
      gender: 0,
      interested_in: 1,
      status: values?.status,
      body_type: values?.bodytype,
      height: values?.height,
      education: values?.education,
      employment: values?.employment,
      profile_status: 1,
    };
    const res = await RegisterFirstStep(req);
    console.log("page3 res    ", res);
    if(res.status === 200){
      Next();
    }
  };
  return (
    <>
      <RisgistionBgImg height="100vh" imgUrl={Artboard3}>
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
                <Formik initialValues={initialObj} onSubmit={handleSubmit}>
                  <Form>
                    <lable>
                      Status<span>*</span>
                    </lable>
                    <SelectOptionsCss>
                      <Field className="field" as="select" name="status">
                        <option>status</option>
                        {status.map((val, index) => {
                          return (
                            <option value={val} key={index}>
                              {val}
                            </option>
                          );
                        })}
                      </Field>
                    </SelectOptionsCss>
                    <br></br>
                    <div className="body_heigth">
                      <div>
                        <lable>
                          Body Type<span>*</span>
                        </lable>
                        <SelectOptionsCss>
                          <Field
                            className="field add"
                            as="select"
                            name="bodytype"
                          >
                            <option>Select Body Type</option>
                            {bodytypes.map((val, index) => {
                              return (
                                <option value={val} key={index}>
                                  {val}
                                </option>
                              );
                            })}
                          </Field>
                        </SelectOptionsCss>
                      </div>
                      <div>
                        <lable>
                          Height<span>*</span>
                        </lable>
                        <SelectOptionsCss>
                          <Field
                            className="field add"
                            as="select"
                            name="height"
                          >
                            <option>Select Height</option>
                            {height.map((val, index) => {
                              return (
                                <option value={val} key={index}>
                                  {val}
                                </option>
                              );
                            })}
                          </Field>
                        </SelectOptionsCss>
                      </div>
                    </div>
                    <lable>
                      Education<span>*</span>
                    </lable>
                    <SelectOptionsCss>
                      <Field className="field" as="select" name="education">
                        <option>Select Education</option>
                        {education.map((val, index) => {
                          return (
                            <option value={val} key={index}>
                              {val}
                            </option>
                          );
                        })}
                      </Field>
                    </SelectOptionsCss>
                    <br></br>
                    <lable>
                      Employment<span>*</span>
                    </lable>
                    <SelectOptionsCss>
                      <Field className="field" as="select" name="employment">
                        <option>Select Employment</option>
                        {employment.map((val, index) => {
                          return (
                            <option value={val} key={index}>
                              {val}
                            </option>
                          );
                        })}
                      </Field>
                    </SelectOptionsCss>
                    <br></br>
                    <div className="btn">
                      <ButtonStyle
                        onClick={changePage}
                        bgcolour="#e5e5e5"
                        color="black"
                      >
                        {" "}
                        Back{" "}
                      </ButtonStyle>
                      <ButtonStyle type="submit">
                        {" "}
                        Next{" "}
                      </ButtonStyle>
                    </div>
                  </Form>
                </Formik>
              </div>
            </FromStyleDiv>
          </div>
        </RisgistationPage1>
      </RisgistionBgImg>
    </>
  );
};

export default ResgistPage3;

export const SelectOptionsCss = styled.div`
  .field {
    width: 26rem;
    height: 3rem;
    margin: "0rem 0px 1rem 0px";
    padding-left: 1rem;
    outline: none;
    font-size: 1rem;
    color: #878784;
    border-radius: 10px;
  }
  .add {
    width: 12rem;
  }
`;
