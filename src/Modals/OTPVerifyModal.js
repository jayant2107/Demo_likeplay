import styled from "styled-components";
import StyledButton from "../Components/Button";
import OtpInput from "react-otp-input";
import { useState } from "react";

export default function OTPVerifyModal({ closeMobileModal ,next }) {
  const [code, setCode] = useState("");
  const handleChange = (code) => {
    setCode(code);
  };
  return (
    <>
      <StyledOTPModal>
        {/******* MODAL HEADER-SECTION STARTS ********/}

        <div className="modal-head">
          <div className="heading">OTP Verification</div>
        </div>
        {/******* MODAL HEADER-SECTION ENDS ********/}

        {/* MODAL HERO-SECTION STARTS  */}

        <div className="modal-hero-section">
          <div className="hero-section-head"> Enter OTP</div>
          <div className="hero-section-main">
            <OtpInput
              value={code}
              onChange={handleChange}
              numInputs={6}
              renderSeparator={<span style={{ width: "13px" }}></span>}
              isInputNum={true}
              inputType="tel"
              renderInput={(props) => <input {...props} />}
              shouldAutoFocus={true}
              inputStyle={{
                border: "1px solid #cfcfcf",
                borderRadius: "10px",
                width: "48px",
                height: "48px",
                fontSize: "12px",
                backgroundColor: "#F8F8F8",
                fontWeight: "400",
              }}
            />
            {/* {OTP.map((data, index) => {
              return (
                <>
                  <input
                    type="number"
                    name="otp"
                    key={index}
                    maxLength="1"
                    className="number"
                    placeholder="-"
                    value={data}
                    onChange={e => handleChange(e.target, index)}
                  />
                </>
              );
            })} */}
          </div>
          <div className="hero-section-para">
            <div className="timer">
              <u>00.45</u>
            </div>
            <div className="para">Resend</div>
          </div>
        </div>

        {/* MODAL HERO-SECTION ENDS  */}

        {/* MODAL BUTTON-SECTION STARTS  */}

        <div className="modal-button">
          <div className="button-content">
            <StyledButton
              onClick={()=>{closeMobileModal();next()}}
              text="white"
              bg="linear-gradient(#ff483c 100%, #ff2c5a 100%)"
            >
              Verify
            </StyledButton>
          </div>
        </div>

        {/* MODAL BUTTON-SECTION ENDS  */}
      </StyledOTPModal>
    </>
  );
}

export const StyledOTPModal = styled.div`
  margin: 25px;

  .modal-container {
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }

  .modal-content {
    width: 27%;
    border: 1px solid transparent;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 20px 0px;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content-container {
    padding: 30px;
  }

  /******* MODAL HEADER-SECTION STARTS ********/

  .heading {
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color: #242424;
  }

  /******* MODAL HEADER-SECTION ENDS ********/

  /* MODAL HERO-SECTION STARTS  */

  .modal-hero-section {
    margin-top: 20px;
  }

  .hero-section-head {
    font-size: 12px;
    font-weight: 400;
  }

  .hero-section-main {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }

  input.number {
    width: 48px;
    height: 48px;
    border: 1px solid #cfcfcf;
    border-radius: 10px;
    background-color: #f8f8f8;
    margin-right: 10px;
    text-align: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .hero-section-para {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .timer {
    color: #e94057;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
  }

  .para {
    color: #7b7f91;
    cursor: pointer;
  }

  /* MODAL HERO-SECTION ENDS  */

  /* MODAL BUTTON-SECTION STARTS  */

  .modal-button {
    margin-top: 20px;
  }

  .button-content {
    width: 97%;
  }

  /* MODAL BUTTON-SECTION ENDS  */
`;

// export const OTP = [1, 2, 3, 4, 5, 6];
