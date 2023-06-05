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
import styled from "styled-components";

import {useDispatch,useSelector} from 'react-redux';
import { page2 } from '../../Redux/SliceOfRedux/FormDataSlice';
import {countAdd} from "../../Redux/SliceOfRedux/RegistrationSlice";

const OnBtn = { bgcolour: "#a8580f", color: "white", border: "none" };
const OffBtn = {
  bgcolour: "white",
  color: "gray",
  border: "1px solid #e2e2e2",
};

const ResgistPage2 = () => {
  let percentage = "16%";
  const [active, setActive] = useState(OffBtn);
  const [active2, setActive2] = useState(OffBtn);
  const [interest, setInterest] = useState("");

  const dispatch = useDispatch();
  const userData = useSelector((state)=>state?.FormData)
   const count = useSelector((state)=>state?.RegistrationSlice?.count);

   const Next = () => {
        dispatch(countAdd(count+1));
    }

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
  const handleSubmit = (values) => {
    dispatch(page2(values))
    Next();
  };


  return (
    <>
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
                <Formik initialValues={{name:userData?.name,age:userData?.age}} onSubmit={handleSubmit}>
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
                        type="button"
                          width="11rem"
                          margin="1rem"
                          border={active.border}
                          bgcolour={active.bgcolour}
                          color={active.color}
                          onClick={ActiveButton}
                        >
                          Male{" "}
                        </ButtonStyle>
                        <ButtonStyle
                        type="button"
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
                      <Field
                      name='interest'
                        type="text"
                        className="resgistation_input"
                        placeholder="willmith1234221"
                        value = {interest}
                      />
                      <div className="btn">
                        <SubmitButton>
                        <button className="button" type="submit">Next</button>
                        </SubmitButton>
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

const SubmitButton = styled.div`
.button{
  border:1px solid transparent;
  border-radius: 0.5rem;
  color: white;
  background: linear-gradient( 268.55deg, #FF483C 0%, #FF2C5A 100%);
  width: 8rem;
  height: 3rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: "1rem";
  cursor: pointer;
}
`
