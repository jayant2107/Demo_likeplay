import React, { useState } from "react";
import ResHeaderComponent from "./ResHeader";
import { Artboard2 } from "../../Utils/RegistrationImg/Registrationflie";
import { Formik, Form, Field } from "formik";
import {
  RisgistionBgImg,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";
import Inputfield from "Validation/Inputfield";
import Resgistpage3 from "../RegistrationPage/Rest_page3";
import styled from "styled-components";

const OnBtn = { bgcolour: "#a8580f", color: "white", border: "none" };
const OffBtn = {
  bgcolour: "white",
  color: "gray",
  border: "1px solid #e2e2e2",
};

const ResgistPage2 = ({ Next }) => {
  let percentage = "16%";
  const [active, setActive] = useState(OffBtn);
  const [active2, setActive2] = useState(OnBtn);
  const [interest, setInterest] = useState("Men");
  const [nextPage, setNextPage] = useState(false);
  const [data, setData] = useState();

  const ActiveButton = () => {
    if (active === OffBtn) {
      setActive(OnBtn);
      setActive2(OffBtn);
      setInterest("Women");
    }
  };

  const ActiveButton2 = () => {
    if (active2 === OffBtn) {
      setActive2(OnBtn);
      setActive(OffBtn);
      setInterest("Men");
    }
  };

  const changePage = () => {
    setNextPage(!nextPage);
  };

  const handleSubmit = (values) => {
    setData(values);
    changePage();
  };

  return (
    <>
      {nextPage === false ? (
        <RisgistionBgImg height="auto" imgUrl={Artboard2}>
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
                <Formik initialValues={{}} onSubmit={handleSubmit}>
                  <Form>
                    <div className="registation_form">
                      <div className="Welcome">
                        <h3>
                          <b>Welcome!</b>
                        </h3>
                        <p>
                          <span>Step 1/2</span>
                        </p>
                      </div>
                      <lable>
                        Full Name<span>*</span>
                      </lable>
                      <Field
                        name="name"
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
                        type="text"
                        className="resgistation_input"
                        placeholder="Age"
                        component={Inputfield}
                      />
                      <br></br>
                      <lable>
                        Gender<span>*</span>
                      </lable>
                      <div className="gender_btn">
                        <ButtonStyle
                        type="reset"
                          width="11rem"
                          border={active.border}
                          bgcolour={active.bgcolour}
                          color={active.color}
                          onClick={ActiveButton}
                        >
                          Male{" "}
                        </ButtonStyle>
                        <ButtonStyle
                          width="11rem"
                          margin="1rem"
                          border={active2.border}
                          bgcolour={active2.bgcolour}
                          color={active2.color}
                          onClick={ActiveButton2}
                        >
                          Female{" "}
                        </ButtonStyle>
                      </div>
                      <lable>
                        Interested In<span>*</span>
                      </lable>
                      <input
                        type="text"
                        className="resgistation_input"
                        placeholder="willmith1234221"
                        value={interest}
                      />
                      <div className="btn">
                        <SubmitButton type="submit"> Next </SubmitButton>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </FromStyleDiv>
            </div>
          </RisgistationPage1>
        </RisgistionBgImg>
      ) : (
        <Resgistpage3 formData={data} changePage={changePage} />
      )}
    </>
  );
};

export default ResgistPage2;

const SubmitButton = styled.div`
border-radius: 0.5rem;
  color: white;
  background: linear-gradient( 268.55deg, #FF483C 0%, #FF2C5A 100%);
  width: "8rem";
  padding: "1rem";
  margin: "1rem";
`
