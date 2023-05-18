import React from "react";
import styled from "styled-components";
import StyledButton from "../Components/Button";
import { add } from "../Utils/images/Modalsimg";
import { exit } from "../Utils/icons-folder/Modalsicons";

export default function GovtIDVerifyModal() {
  return (
    <>
      <StyledIDModal>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="delete-icon">
                <img src={exit} alt="exit" id="exit" />
              </div>
              <div className="content-container">
                {/******* MODAL HEADER-SECTION STARTS ********/}

                <div className="modal-head">
                  <div className="heading">Verification of Government ID</div>
                </div>
                {/******* MODAL HEADER-SECTION ENDS ********/}

                {/******* MODAL HERO-SECTION STARTS ********/}

                <div className="front-side">
                  <div className="add-icon">
                    <img src={add} alt="add"></img>
                  </div>
                  <div className="para">Front Side</div>
                </div>
                <div className="back-side">
                  <div className="add-icon">
                    <img src={add} alt="add"></img>
                  </div>
                  <div className="para">Back Side</div>
                </div>
                {/******* MODAL HERO-SECTION ENDS ********/}

                {/******* MODAL BUTTON-SECTION STARTS ********/}

                <div className="modal-button">
                  <div className="button-content">
                    <StyledButton
                      text="white"
                      bg="linear-gradient(#ff483c 100%, #ff2c5a 100%)"
                    >
                      Submit
                    </StyledButton>
                  </div>
                </div>

                {/******* MODAL BUTTON-SECTION ENDS ********/}
              </div>
            </div>
          </div>
        </div>
      </StyledIDModal>
    </>
  );
}

export const StyledIDModal = styled.div`
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
    width: 29%;
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

  .delete-icon {
    width: 24px;
    height: 24px;
    color: green;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    top: -25px;
    right: 0px;
  }

  .content-container {
    padding: 25px;
  }

  /******* MODAL HEADER-SECTION STARTS ********/

  .heading {
    font-size: 26px;
    font-weight: 600;
    color: #242424;
    line-height: 39px;
  }

  /******* MODAL HEADER-SECTION ENDS ********/

  /******* MODAL HERO-SECTION ENDS ********/

  .front-side,
  .back-side {
    display: flex;
    flex-direction: column;
    border: 1px solid transparent;
    background: #f1f1f1;
    border-radius: 12px;
    margin-top: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .add-icon {
    margin: auto;
  }

  .para {
    margin: auto;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }

  /******* MODAL HERO-SECTION ENDS ********/

  /******* MODAL BUTTON-SECTION STARTS ********/

  .modal-button {
    margin-top: 15px;
  }

  .button-content {
    width: 50%;
    margin: auto;
  }

  /******* MODAL BUTTON-SECTION ENDS ********/
`;
