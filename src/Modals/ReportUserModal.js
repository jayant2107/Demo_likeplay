import React from "react";
import styled from "styled-components";
import StyledButton from "../Components/Button";
import { useEffect } from "react";

export default function ReportUserModal({ closeReportModal }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <>
      <StyledReportModal>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="content-container">
                {/* MODAL HEADING-SECTION STARTS */}
                <div className="modal-head">
                  <div className="heading">Report User</div>
                  <div className="para">
                    Kindly Select why you want to report this user
                  </div>
                </div>

                {/* MODAL HEADING-SECTION ENDS */}

                {/* MODAL HERO-SECTION STARTS */}

                <div className="modal-hero-section">
                  <div className="complaints-section">
                    <div className="complaint">
                      <div className="complaint-content">
                        Bullying or harassment
                      </div>
                    </div>
                    <div className="complaint">
                      <div className="complaint-content">Scam or fraud</div>
                    </div>
                    <div className="complaint">
                      <div className="complaint-content">
                        Nudity or sexual activity
                      </div>
                    </div>
                    <div className="complaint">
                      <div className="complaint-content">False information</div>
                    </div>
                  </div>
                  <div className="other-reason">
                    <div className="reason-head"></div>
                    <div className="reason-input">
                      <input type="text" placeholder="Type something..." />
                    </div>
                  </div>
                </div>

                {/* MODAL HERO-SECTION STARTS */}

                {/* MODAL BUTTONS-SECTION STARTS  */}
                <div className="modal-buttons">
                  <div className="buttons-content">
                    <div className="cancel-btn" onClick={closeReportModal}>
                      <StyledButton text="#242424" bg="#f0f0f0">
                        Cancel
                      </StyledButton>
                    </div>
                    <div className="yes-btn" onClick={closeReportModal}>
                      <StyledButton
                        text="white"
                        bg="linear-gradient(#ff483c 100%, #ff2c5a 100%)"
                      >
                        Yes
                      </StyledButton>
                    </div>
                  </div>
                </div>
                {/* MODAL BUTTONS-SECTION ENDS  */}
              </div>
            </div>
          </div>
        </div>
      </StyledReportModal>
    </>
  );
}

export const StyledReportModal = styled.div`
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
    padding: 15px;
  }
  /* MODAL HEADING-SECTION STARTS */

  .heading {
    color: #242424;
    font-size: 26px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
  }

  /* MODAL PARA-SECTION STARTS */

  .para {
    color: #7b7f91;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-top: 10px;
  }

  /*MODAL PARA-SECTION ENDS*/

  /* MODAL HEADING-SECTION ENDS */

  /* MODAL HERO-SECTION STARTS */

  .modal-hero-section {
    margin-top: 20px;
  }

  .complaints-section {
    display: flex;
    flex-direction: column;
  }

  .complaint {
    padding: 15px;
    background-color: #f0f0f0;
    font-size: 12px;
    margin-bottom: 10px;
    font-weight: 400;
    line-height: 18px;
    border: 1px solid transparent;
    border-radius: 10px;
  }

  input[type="text"] {
    width: 100%;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    padding: 10px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    padding-top: 15px;
    padding-bottom: 30px;
  }

  /* MODAL HERO-SECTION ENDS */

  /* MODAL BUTTON-SECTION STARTS  */

  .modal-buttons {
    margin-top: 20px;
  }

  .buttons-content {
    display: flex;
  }

  .cancel-btn,
  .yes-btn {
    width: 45%;
    margin: auto;
  }

  /* MODAL BUTTON-SECTION ENDS  */
`;
