import React from "react";
import ResHeaderComponent from "./ResHeader";
import { Artboard9 } from "../../Utils/RegistrationImg/Registrationflie";

import {
  RisgistionBgImg,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import {
  countAdd,
} from "../../Redux/SliceOfRedux/RegistrationSlice";
import { Field, Form, Formik } from "formik";

import { toast } from "react-toastify";
import { userVerificationApi } from "../../Services/collection";
import { useLocation, useNavigate } from "react-router-dom";

const ResgistPage9 = () => {
  let percentage = "64%";
  const dispatch = useDispatch();
  const count = useSelector((state) => state?.RegistrationSlice?.count);
  const navigate=useNavigate()
  let location = useLocation()

  const Next = () => {
    dispatch(countAdd(count + 1));
    if(location.pathname !== '/Registration' ) navigate("/Registration")
  };

  const handleSubmit = async (values) => {
    let req ={
        Taking_hard_drugs: values?.Taking_hard_drugs,
        criminal_activity: values?.criminal_activity,
        sexual_harassment: values?.sexual_harassment,
        domestic_violence: values?.domestic_violence,
        any_criminal_activity_hard_drugs_and_financial_crimes: values?.any_criminal_activity_hard_drugs_and_financial_crimes,
        activity_involving_sexual_harassment_domestic_violence: values?.activity_involving_sexual_harassment_domestic_violence,
        serious_crime: values?.serious_crime,
        additional_details: values?.additional_details,
        profile_status: 5
    }
    let res = await userVerificationApi(req);
   if(res?.status===200){
    Next()
   }else{
    toast.error(res?.message  || "something went wrong")
   }
    
  };
  return (
    <>
      <RisgistionBgImg height="auto" padding='2rem' imgUrl={Artboard9}>
        <div className="wrapperDiv">
        <ResHeaderComponent />
        <RisgistationPage1>
          <div className="Risgistation_content2">
            <FromStyleDiv width="37rem">
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
                  <h4>
                    <b>Verifiaction</b>
                    <span>*</span>
                  </h4>
                </div>
                <Formik
                  initialValues={{
                    Taking_hard_drugs: "",
                    criminal_activity: "",
                    sexual_harassment: "",
                    domestic_violence: "",
                    any_criminal_activity_hard_drugs_and_financial_crimes: "",
                    activity_involving_sexual_harassment_domestic_violence: "",
                    serious_crime: "",
                    additional_details: "",
                  }}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div className="verificationdiv">
                      <div>
                        <p className="paarapag9">
                          Have you been involved in taking hard drugs?
                          <span>*</span>
                        </p>
                      </div>
                      <div className="checkboxs">
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="Taking_hard_drugs"
                            value="no"
                          />
                          <b>No</b>
                        </p>
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="Taking_hard_drugs"
                            value="yes"
                          />
                          <b>Yes</b>
                        </p>
                      </div>
                    </div>
                    <div className="verificationdiv">
                      <div>
                        <p className="paarapag9">
                          Have you been involved in crimaial activity?
                          <span>*</span>
                        </p>
                      </div>
                      <div className="checkboxs">
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="criminal_activity"
                            value="no"
                          />
                          <b>No</b>
                        </p>
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="criminal_activity"
                            value="yes"
                          />
                          <b>Yes</b>
                        </p>
                      </div>
                    </div>
                    <div className="verificationdiv">
                      <div>
                        <p className="paarapag9">
                          Have you been involved in sexual harassment?
                          <span>*</span>
                        </p>
                      </div>
                      <div className="checkboxs">
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="sexual_harassment"
                            value="no"
                          />
                          <b>No</b>
                        </p>
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="sexual_harassment"
                            value="yes"
                          />
                          <b>Yes</b>
                        </p>
                      </div>
                    </div>
                    <div className="verificationdiv">
                      <div>
                        <p className="paarapag9">
                          Have you been involved in domestic violence?
                          <span>*</span>
                        </p>
                      </div>
                      <div className="checkboxs">
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="domestic_violence"
                            value="no"
                          />
                          <b>No</b>
                        </p>
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="domestic_violence"
                            value="yes"
                          />
                          <b>Yes</b>
                        </p>
                      </div>
                    </div>
                    <div className="verificationdiv">
                      <div>
                        <p className="paarapag9">
                          Have you been convicted of any criminal activity
                          involving hard drugs and financial crimes?
                          <span>*</span>
                        </p>
                      </div>
                      <div className="checkboxs">
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="any_criminal_activity_hard_drugs_and_financial_crimes"
                            value="no"
                          />
                          <b>No</b>
                        </p>
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="any_criminal_activity_hard_drugs_and_financial_crimes"
                            value="yes"
                          />
                          <b>Yes</b>
                        </p>
                      </div>
                    </div>
                    <div className="verificationdiv">
                      <div>
                        <p className="paarapag9">
                          Have you been convicted in activity involving sexual
                          harassment or domestic violence? *<span>*</span>
                        </p>
                      </div>
                      <div className="checkboxs">
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="activity_involving_sexual_harassment_domestic_violence"
                            value="no"
                          />
                          <b>No</b>
                        </p>
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="activity_involving_sexual_harassment_domestic_violence"
                            value="yes"
                          />
                          <b>Yes</b>
                        </p>
                      </div>
                    </div>
                    <div className="verificationdiv">
                      <div>
                        <p className="paarapag9">
                          Have been involved in other serious crimes?
                          <span>*</span>
                        </p>
                      </div>
                      <div className="checkboxs">
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="serious_crime"
                            value="no"
                          />
                          <b>No</b>
                        </p>
                        <p className="checkoxIn">
                          <Field
                            className="checkboxsN"
                            type="radio"
                            name="serious_crime"
                            value="yes"
                          />
                          <b>Yes</b>
                        </p>
                      </div>
                    </div>

                    <div className="btn">
                      <div className="btn9">
                        <Field
                          as="textarea"
                          placeholder="Add Additional detials....."
                          className="textarea9"
                          name="additional_details"
                        />
                        {/* <ButtonStyle onClick={() => { Back() }} bgcolour="#e5e5e5" color="black"> Back </ButtonStyle> */}
                        <ButtonStyle type="submit" height="3rem" padding="0">
                          {" "}
                          Next{" "}
                        </ButtonStyle>
                      </div>
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

export default ResgistPage9;
