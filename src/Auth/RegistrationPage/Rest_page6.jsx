import React from "react";
import ResHeaderComponent from "./ResHeader";
import { Artboard6 } from "../../Utils/RegistrationImg/Registrationflie";

import {
  RisgistionBgImg,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";
import { Field, Form, Formik } from "formik";
import { RegisterFirstStep } from "Services/collection";

import { useDispatch, useSelector } from "react-redux";
import { page6 } from "../../Redux/SliceOfRedux/FormDataSlice";
import {
  countAdd,
  countMinus,
} from "../../Redux/SliceOfRedux/RegistrationSlice";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const ResgistPage6 = () => {
  let percentage = "48%";

  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.FormData);
  const count = useSelector((state) => state?.RegistrationSlice?.count);

  const navigate = useNavigate();
  const location = useLocation();

  const Next = () => {
    dispatch(countAdd(count + 1));
    if (location.pathname !== "/Registration") navigate("/Registration");
  };
  const Back = () => {
    dispatch(countMinus(count - 1));
    if (location.pathname !== "/Registration") navigate("/Registration");
  };

  const handleSubmit = async (values) => {
    dispatch(page6(values));
    let req = {
      about_me: values.aboutme,
      profile_status: 3,
    };

    let res = await RegisterFirstStep(req);
    if (res?.status === 200) {
      Next();
    } else {
      toast.error(res?.message || "something went wrong");
    }
  };
  return (
    <>
      <RisgistionBgImg height="100vh" imgUrl={Artboard6}>
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
                    <b>Welcome!</b>
                  </h3>
                  <p>
                    <span>Step /6</span>
                  </p>
                </div>
                <Formik
                  initialValues={{ aboutme: userData?.aboutme }}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <lable>
                      About me<span>*</span>
                    </lable>
                    <Field
                      name="aboutme"
                      as="textarea"
                      className="textareaa"
                      placeholder="Type something......"
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

export default ResgistPage6;
