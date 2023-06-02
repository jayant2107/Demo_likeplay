import React from "react";
import ResHeaderComponent from "./ResHeader";
import { Artboard4 } from "../../Utils/RegistrationImg/Registrationflie";
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
import { SelectOptionsCss } from "./Rest_page3";
import { Page4Data } from "./RegData";
import { Field, Form, Formik } from "formik";

import ResgistPage5 from "./Rest_page5";

const ResgistPage4 = ({ Next, Back }) => {
  const { tribe, religionlist } = Page4Data;
  let percentage = "32%";

  return (
    <>
      <RisgistionBgImg height="auto" imgUrl={Artboard4}>
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
            <div className="registation_form">
              <div className="Welcome">
                <h3>
                  <b>Wellcome!</b>
                </h3>
                <p>
                  <span>Step 3/6</span>
                </p>
              </div>
              <Formik
                initialValues={{country:'',state:'',city:'',nationality:'',religion:'',tribe:'' }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <lable>
                    Country of Resisdence<span>*</span>
                  </lable>
                  <SelectOptionsCss>
                        <Field as="select" className="field" name="country">
                        <option>Select Country</option>
                          {religionlist.map((val, index) => {
                            return (
                              <option value="val" key={index}>
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
                        State of Resisdence<span>*</span>
                      </lable>
                      <SelectOptionsCss>
                        <Field as="select" className="field add" name="state">
                          <option>Select State</option>
                          {religionlist.map((val, index) => {
                            return (
                              <option value="val" key={index}>
                                {val}
                              </option>
                            );
                          })}
                        </Field>
                      </SelectOptionsCss>
                    </div>
                    <div>
                      <lable>
                        City of Residence<span>*</span>
                      </lable>

                      <SelectOptionsCss>
                        <Field as="select" className="field add" name="city">
                          <option>Select City</option>
                          {religionlist.map((val, index) => {
                            return (
                              <option value="val" key={index}>
                                {val}
                              </option>
                            );
                          })}
                        </Field>
                      </SelectOptionsCss>
                    </div>
                  </div>
                  <lable>
                    Nationality<span>*</span>
                  </lable>
                  <SelectOptionsCss>
                    <Field as="select" className="field" name="nationality">
                      <option>Select Nationality</option>
                      {religionlist.map((val, index) => {
                        return (
                          <option value="val" key={index}>
                            {val}
                          </option>
                        );
                      })}
                    </Field>
                  </SelectOptionsCss>
                  <br></br>
                  <lable>
                    Religion<span>*</span>
                  </lable>
                  <SelectOptionsCss>
                    <Field as="select" className="field" name="religion">
                      <option>Select Religion</option>
                      {religionlist.map((val, index) => {
                        return (
                          <option value="val" key={index}>
                            {val}
                          </option>
                        );
                      })}
                    </Field>
                  </SelectOptionsCss>

                  <br></br>
                  <lable>
                    Your Tribe<span>*</span>
                  </lable>
                  <SelectOptionsCss>
                    <Field as="select" className="field" name="tribe">
                      <option>Select Your tribe</option>
                      {tribe.map((val, index) => {
                        return (
                          <option value="val" key={index}>
                            {val}
                          </option>
                        );
                      })}
                    </Field>
                  </SelectOptionsCss>
                  <br></br>
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
                      onClick={() => {
                        Next();
                      }}
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
     <ResgistPage5/>
    </>
  );
};

export default ResgistPage4;
