import React from "react";
import ResHeaderComponent from "./ResHeader";

// import bgimg from "./imgss/Artboard1.png"
import Artboard1 from "../../Utils/RegistrationImg/Registrationflie";
import { Logimg } from "../../Utils/RegistrationImg/Registrationflie";
import { RisgistionBgImg, RisgistationPage1 } from "./style";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RestEmailPage = ({passEmail}) => {
    const navigate = useNavigate();
  return (
    <>
      <RisgistionBgImg height="auto" imgUrl={Artboard1}>
        <ResHeaderComponent />
        <RisgistationPage1>
          <div className="Risgistation_content">
            <div className="risgistation_img_log">
              <img src={Logimg} className="rig_img_log" alt="empty" />
              <h1>The #Dating Site in Nigeria</h1>
            </div>
            <EmailCss>
              <span>
                Please click the link sent to <b>{passEmail}</b>
                <p>
                  to verify your email address and complete your registration.{" "}
                </p>
              </span>
              <p id="p" onClick={()=>navigate('/Login')} >Back</p>
            </EmailCss>
          </div>
        </RisgistationPage1>
      </RisgistionBgImg>
    </>
  );
};

export default RestEmailPage;

const EmailCss = styled.div`
  padding: 30px;
  width: 450px;
  height: 150px;
  background: white;
  color: black;
  display: grid;
  align-items: center;
  text-align: center;
  border-radius: 20px;

  font-size: 12px;
  font-family: Poppins;

  b {
    color: red;
  }
  #p {
    text-decoration: underline;
    cursor: pointer;
  }
`;
