import React, { useState } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import { page4 } from "../../Redux/SliceOfRedux/FormDataSlice";
import {
  countAdd,
  countMinus,
} from "../../Redux/SliceOfRedux/RegistrationSlice";
import { useLocation, useNavigate } from "react-router-dom";

import { Country, State, City } from "country-state-city";

const ResgistPage4 = () => {
  const { tribe, religionlist } = Page4Data;
  let percentage = "32%";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector((state) => state?.FormData);
  const count = useSelector((state) => state?.RegistrationSlice?.count);
  const countries = Country.getAllCountries();
  const [countryCode, setCountryCode] = useState();
  const [states, setStates] = useState();
  const [city, setCity] = useState();
  const [countryName,setCountryName] = useState();
  const [stateName,setStateName] = useState();

  const Next = () => {
    dispatch(countAdd(count + 1));
    if (location.pathname !== "/Registration") navigate("/Registration");
  };
  const Back = () => {
    dispatch(countMinus(count - 1));
    if (location.pathname !== "/Registration") navigate("/Registration");
  };

  const handleSubmit = (values) => {
    let req = {
      country: `${countryName !==undefined ? countryName : userData?.country}`,
      stateName: `${stateName !==undefined ? stateName : userData?.userState}`,
      city: values.city,
      nationality: values.nationality,
      religion: values.religion,
      tribe: values.tribe,
    };
    dispatch(page4(req));
    Next();
  };

  const handleCountry = (e) => {
    const code = countries?.find((val) => val.name === e?.target?.value);
    setCountryCode(code.isoCode);
    setCountryName(code.name);
    const states = State.getStatesOfCountry(code.isoCode);
    setStates(states);
  };
  const handleState = (e) => {
    const code = states?.find((val) => val.name === e?.target?.value);
    setStateName(code.name)
    const city = City.getCitiesOfState(countryCode, code.isoCode);
    setCity(city);
  };
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
                  initialValues={{
                    country:countryName,
                    state: stateName,
                    city: userData.city,
                    nationality: userData.nationality,
                    religion: userData.religion,
                    tribe: userData.tribe,
                  }}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <lable>
                      Country of Resisdence<span>*</span>
                    </lable>
                    <SelectOptionsCss>
                      <Field
                        as="select"
                        className="field"
                        name="country"
                        id="country"
                        onChange={handleCountry}
                      >
                        <option selected disabled>
                          Select Country
                        </option>
                        {countries?.map((val, index) => {
                          return (
                            <option value={val.name} key={index}>
                             
                              {val.name} 
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
                          <Field
                            onChange={handleState}
                            as="select"
                            className="field add"
                            name="state"
                          >
                            <option selected disabled>
                              Select State
                            </option>
                            {states?.map((val, index) => {
                              return (
                                <option value={val.name} key={index}>
                                  {val.name}
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
                          <Field as="select" className="field add" name="city" autocomplete={false}>
                            <option >
                              Select City
                            </option>
                            {city?.map((val, index) => {
                              return (
                                <option value={val.name} key={index}>
                                  {val.name}
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
                        <option selected disabled>
                          Select Nationality
                        </option>
                        {countries?.map((val, index) => {
                          return (
                            <option value={val.name} key={index}>
                              {val.name}
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
                        <option selected disabled>
                          Select Religion
                        </option>
                        {religionlist.map((val, index) => {
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
                      Your Tribe<span>*</span>
                    </lable>
                    <SelectOptionsCss>
                      <Field as="select" className="field" name="tribe">
                        <option selected disabled>
                          Select Your tribe
                        </option>
                        {tribe.map((val, index) => {
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
                        onClick={Back}
                        bgcolour="#e5e5e5"
                        color="black"
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
      </RisgistionBgImg>
    </>
  );
};

export default ResgistPage4;
