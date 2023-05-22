import styled from "styled-components";
import { bullet } from "../Utils/images/Modalsimg";
import StyledButton from "../Components/Button";

export default function InformationModal() {
  return (
    <>
      <StyledInfoModal>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="content-container">
                {/* MODAL HEADING-SECTION STARTS */}

                <div className="modal-head">
                  <div className="heading">Information</div>
                </div>

                {/* MODAL HEADING-SECTION ENDS */}

                {/* MODAL HERO-SECTION STARTS */}

                <diV className="hero-section">
                  <div className="info1">
                    <div className="info-content">
                      <div className="bullet">
                        <img src={bullet} id="bullet" alt="bullet" />
                      </div>
                      <div className="line">
                        <div className="left">Yeah 100% : </div>
                        <div className="right">100% No questions asked</div>
                      </div>
                    </div>
                  </div>
                  <div className="info2">
                    <div className="info-content">
                      <div className="bullet">
                        <img src={bullet} id="bullet" alt="bullet" />
                      </div>
                      <div className="line">
                        <div className="left"> Occasionally 50-50 : </div>
                        <div className="right">
                          It can be either for me no hard & fast rule
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info3">
                    <div className="info-content">
                      <div className="bullet">
                        <img src={bullet} id="bullet" alt="bullet" />
                      </div>
                      <div className="line">
                        <div className="left">No Way : </div>
                        <div className="right">
                          Never, Not me or at least not something i go for.
                        </div>
                      </div>
                    </div>
                  </div>
                </diV>

                {/* MODAL HERO-SECTION ENDS */}

                {/* MODAL BUTTON-SECTION STARTS */}

                <div className="modal-button">
                  <StyledButton
                    text="white"
                    bg="linear-gradient(#ff483c 100%, #ff2c5a 100%)"
                  >
                    ok
                  </StyledButton>
                </div>

                {/* MODAL BUTTON-SECTION ENDS */}
              </div>
            </div>
          </div>
        </div>
      </StyledInfoModal>
    </>
  );
}

export const StyledInfoModal = styled.div`
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
    width: 28%;
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
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    padding: 5px;
  }

  /* MODAL HEADING-SECTION ENDS */

  /** MODAL HERO-SECTION STARTS*/

  .hero-section{
    margin-top: 15px;
  }

  .info-content {
    display: flex;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: #7b7f91;
  }

  .line {
    display: flex;
    justify-content: start;
  }

  .left {
    color: #a8580f;
  }

  .right {
    margin-left: 5px;
  }

  /** MODAL HERO-SECTION ENDS */

   /** MODAL BUTTON-SECTION STARTS */

  .modal-button{
    margin-top: 15px;
  }

 /** MODAL BUTTON-SECTION ENDS */
`;
