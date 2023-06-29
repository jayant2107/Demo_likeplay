import React from "react";
import styled from "styled-components";
// import bgimg from "../Assets/Registration/forgetEmailBg.png";
import ResHeaderComponent from "./RegistrationPage/ResHeader";
import { RisgistionBgImg } from "./RegistrationPage/style";

const ForgetPageMessage = () => {
  return (
    <>
      <RisgistionBgImg height="100vh" >
        <ResHeaderComponent />
        <ForgetrPageMessageCss>
          <div>
            <p>Please check you email</p>
            <span>
              We have sent you a verification mail to your registered email.
            </span>
          </div>
        </ForgetrPageMessageCss>
      </RisgistionBgImg>
    </>
  );
};

export default ForgetPageMessage;

const ForgetrPageMessageCss = styled.div`
  div {
    text-align: center;
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
  }
  font-weight: 500;
  font-style: normal;
  color: white;
  p {
    font-family: "RockoUltraFLF";
    font-size: 40px;
    line-height: 52px;
    text-align: center;
  }
  span {
    font-family: "Poppins";
    font-size: 30px;
    line-height: 45px;
    letter-spacing: 0.05em;
  }
`;
