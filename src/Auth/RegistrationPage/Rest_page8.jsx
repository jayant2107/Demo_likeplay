import React, { useState } from "react";
import { Modal } from "antd";
import ResHeaderComponent from "./ResHeader";
import { Artboard8 } from "../../Utils/RegistrationImg/Registrationflie";
import {
  RisgistionBgImg,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";
import {
  facebook,
  email,
  pass,
  photo,
} from "../../Utils/RegistrationImg/Registrationflie";
import CreateShotsModals from "../../Modals/CreateShotsModal";
import GovtIDVerifyModal from "../../Modals/GovtIDVerifyModal";
import OTPVerifyModal from "../../Modals/OTPVerifyModal";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {countAdd} from "../../Redux/SliceOfRedux/RegistrationSlice"

const data = [
  {
    id: "facebook",
    icon: facebook,
    p: "Verify using your facebook account. We will never post to Facebook or message your friends. Any accounts with less than 150 friends is not accepted.",
    btn: "Verifty With Fackbook",
  },
  {
    id: "email",
    icon: email,
    p: "Government Issued ID with your photograph that matches your Full Names (Driver's License, NIN, International Passport Bio page, or PVC) please feel free to scratch out your number, We will not reveal your full names on the website just your user name",
    btn: "Taka photo of my id",
  },
  {
    id: "photo",
    icon: photo,
    p: "Take a picture with a hand signal. Please ensure that your picture is clear, facing front without a mask, nor sideways. There should be no sunglasses or face-cap. We request this information to ensure that bots are not on the platform.",
    btn: "Verifty With Carmera",
  },
  {
    id: "pass",
    icon: pass,
    p: "Verify via sms.Verify your account by providing is the code sent via sms.",
    btn: "Send me the Code",
  },
];

const ResgistPage8 = () => {
  let percentage = "64%";
  const [modal, setModal] = useState(false);
  const [mobileModal, setMobileModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const count = useSelector((state)=>state?.RegistrationSlice?.count);
  
  const Next = () => {
        dispatch(countAdd(count+1));
        if(location.pathname !== '/Registration' ) navigate("/Registration")
    }

  const OpenModal = (el) => { 
    console.log(el)
    if (el === "facebook") {
      setModal(el);
    } else if (el === "email") {
      setModal(el);
    } else if (el === "photo") {
      setModal(el);
    } else if (el === "pass") {
      setMobileModal(el);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const closeMobileModal = () => {
    setMobileModal(false);
  };

  return (
    <>
      {modal === "email" && (
        <Modal
          open={modal}
          close={closeModal}
          maskClosable={true}
          onCancel={closeModal}
          footer={null}
          style={{ top: 65 }}
          width="40%"
        >
          <GovtIDVerifyModal closeModal={closeModal} Next={Next}/>
        </Modal>
      )}
      {mobileModal === "pass" && (
        <Modal
          open={mobileModal}
          close={closeMobileModal}
          onCancel={closeMobileModal}
          footer={null}
          style={{ bottom : 20 }}
        
          maskClosable={true}
          width="30%"
          className="mobilemodal"
        >
                 <OTPVerifyModal closeMobileModal={closeMobileModal} Next={Next}/>
        </Modal>
      )}
      <RisgistionBgImg height="100vh" imgUrl={Artboard8}>
        <div className="wrapperDiv">
        <ResHeaderComponent />
        <RisgistationPage1>
          <div className="Risgistation_content8">
            <div className="progessdiv">
              <ProgessStyleDiv style={{ display: 'grid',
  justifyItems: 'center'}}>
                <p>
                  <b>{percentage}</b> Complete
                </p>
                <ProgessStyleDivline width={'50%'}>
                  <ProgessStyleDivfilline
                    width={percentage}
                  ></ProgessStyleDivfilline>
                </ProgessStyleDivline>
              </ProgessStyleDiv>
              <span  className="h1">
                Use any one or more to verify yourself
                <span style={{ color: "#ff3f45", margin: "1rem" }}>*</span>
              </span>
            </div>
            {/* <FromStyleDiv width="100%" margin="auto"> */}
              {/* <div className="registation_form"> */}
                <div className="registation_form8">
                  {data.map((el) => {
                    return (
                      <>
                        <div className="cartReg">
                          <div className="cartIcon">
                            <img className="cartIconimg" src={el.icon} alt="" />
                          </div>
                          <p>{el.p}</p>
                          <ButtonStyle
                            onClick={() => OpenModal(el.id)}
                            height="2rem"
                            width="70%"
                            margin="0"
                            padding="0"
                            className="btn_buttom"
                            >
                            {el.btn}
                          </ButtonStyle>
                        </div>
                      </>
                    );
                  })}
                </div>
              {/* </div> */}
            {/* </FromStyleDiv> */}
          </div>
        </RisgistationPage1>
        </div>
      </RisgistionBgImg>
    </>
  );
};

export default ResgistPage8;
