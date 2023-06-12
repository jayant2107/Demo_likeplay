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

import { useDispatch, useSelector } from "react-redux";
import { page3 } from "../../Redux/SliceOfRedux/FormDataSlice";
import {
  countAdd,
  countMinus,
} from "../../Redux/SliceOfRedux/RegistrationSlice";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const ResgistPage3 = () => {
  const { status, bodytypes, education, employment, height } = Page3Data;
  let percentage = "26%";

  const count = useSelector((state) => state?.RegistrationSlice?.count);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.FormData);

  const navigate = useNavigate();
  const location = useLocation();

  const Next = () => {
    dispatch(countAdd(count + 1));
    if (location.pathname !== "/Registration") navigate("/Registration");
  };
  const Back = () => {
    dispatch(countMinus(count - 1));
  };

  const initialObj = {
    status: userData?.status,
    bodytype: userData?.bodytype,
    height: userData?.height,
    education: userData?.education,
    employment: userData?.employment,
  };

  const handleSubmit = async (values) => {
    dispatch(page3(values));

    const req = {
      name: userData?.name,
      age: userData?.age,
      gender: userData?.gender,
      interested_in: `${userData?.gender === "0" ? 1 : 2}`,
      status: values?.status,
      body_type: values?.bodytype,
      height: values?.height,
      education: values?.education,
      employment: values?.employment,
      profile_status: 1,
    };
    const res = await RegisterFirstStep(req);
    if (res.status === 200) {
      Next();
    } else {
      toast.error(res?.message || "something went wrong");
    }
  };
  return (
    <>
      <RisgistionBgImg height="100vh" imgUrl={Artboard3}>
        <div className="wrapperDiv"> 
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
                        <option  selected disabled>status</option>
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
                        <SelectOptionsCss>
                        <lable>
                          Body Type<span>*</span>
                        </lable>
                          <Field
                            className="field add"
                            as="select"
                            name="bodytype"
                          >
                            <option  selected disabled>Select Body Type</option>
                            {bodytypes.map((val, index) => {
                              return (
                                <option value={val} key={index}>
                                  {val}
                                </option>
                              );
                            })}
                          </Field>
                        </SelectOptionsCss>
                        <SelectOptionsCss>
                        <lable>
                          Height<span>*</span>
                        </lable>
                          <Field
                            className="field add"
                            as="select"
                            name="height"
                          >
                            <option  selected disabled>Select Height</option>
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
                    <lable>
                      Education<span>*</span>
                    </lable>
                    <SelectOptionsCss>
                      <Field className="field" as="select" name="education">
                        <option  selected disabled>Select Education</option>
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
                        <option  selected disabled>Select Employment</option>
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
                        bgcolour="#e5e5e5"
                        color="black"
                        onClick={() => {
                          Back();
                        }}
                      >
                        {" "}
                        Back{" "}
                      </ButtonStyle>
                      <ButtonStyle type="submit"> Next </ButtonStyle>
                    </div>
                  </Form>
                </Formik>
              </div>
            </FromStyleDiv>
          </div>
        </RisgistationPage1>
        </div>
      </RisgistionBgImg>
    </>
  );
};

export default ResgistPage3;

export const SelectOptionsCss = styled.div`
  .field {
    // width: 26rem;
    width: 100%;
    height: 3rem;
    margin: "0rem 0px 1rem 0px";
    padding-left: 1rem;
    outline: none;
    font-size: 1rem;
    color: #878784;
    border-radius: 10px;
  }
  .add {
    // width: 12rem;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .field {
      width  :100%;
    }
  }
`;
