import React from "react";
import ResHeaderComponent from "./ResHeader";
import { Artboard5 } from "../../Utils/RegistrationImg/Registrationflie";
import {
  RisgistionBgImg,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";
import { SelectOptionStyle } from "./style";
import { Form, Formik, Field } from "formik";
import { SelectOptionsCss } from "./Rest_page3";
import { Page4Data, Page5Data } from "./RegData";

import { RegisterFirstStep } from "Services/collection";

const ResgistPage5 = ({ Next, Back }) => {
  const { agerange, lookingfor } = Page5Data;
  const { tribe } = Page4Data;
  let percentage = "40%";

  const handleSubmit = async (values) => {
    console.log(values)
    const req = {
      residence_country: "",
      state: "",
      city: "",
      religion: "",
      your_tribe: "",
      age_range_for_date: values.ageRange,
      tribe_to_date: values.tribeTodate,
      tribe_irrelevant: values.irrelevant,
      looking_for: values.lookingfor,
      nationality: "",
      profile_status: 2,
    };

    let res = await RegisterFirstStep(req);
    if(res?.status === 200){
      Next();
    }else{
      console.log('error :',res?.message)
    }

  };

  return (
    <>
      <RisgistionBgImg height="100vh" imgUrl={Artboard5}>
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
                    <span>Step 4/6</span>
                  </p>
                </div>
                <Formik
                  initialValues={{
                    ageRange: "",
                    tribeTodate: "",
                    lookingfor: "",
                    irrelevant: "",
                  }}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <lable>
                      Age Range preferred to date<span>*</span>
                    </lable>
                    <SelectOptionsCss>
                      <Field as="select" className="field" name="ageRange">
                        <option>Select Range</option>
                        {agerange.map((val, index) => {
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
                          Tribe to date<span>*</span>
                        </lable>
                        <SelectOptionsCss>
                          <Field
                            as="select"
                            className="field add"
                            name="tribeTodate"
                          >
                            <option>Select</option>
                            {tribe.map((val, index) => {
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
                          Looking for?<span>*</span>
                        </lable>
                        <SelectOptionsCss>
                          <Field
                            as="select"
                            className="field add"
                            name="lookingfor"
                          >
                            <option>Select</option>
                            {lookingfor.map((val, index) => {
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
                    <div className="trib_irrelevant">
                      <lable>
                        Tribe irrelevant<span>*</span>
                      </lable>
                      <Field type="checkbox" name="irrelevant" />
                    </div>

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

export default ResgistPage5;
