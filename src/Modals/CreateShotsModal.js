import React from "react";
import styled from "styled-components";
import { upload } from "../Utils/images/Modalsimg";
import { exit } from "../Utils/icons-folder/Modalsicons";
import StyledButton from "../Components/Button";

export default function CreateShotsModal({next}) {
  return (
    <>
      <StyledCreateShortModal>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
            <div className="delete-icon">
                <img src={exit} alt="exit" id="exit" />
              </div>
              <div className="content-container">
                {/********* MODAL UPLOAD IMAGE-SECTION STARTS ********/}

                <div className="upload-image-section">
                  <div className="upload-image-head">
                    <div className="heading">Take the Floor</div>
                  </div>
                  <div className="image-section">
                    <div className="image-section-content">
                      <div className="upload-pic">
                        <img src={upload} alt="upload" id="upload"></img>
                      </div>
                      <div className="head">Upload Images</div>
                    </div>
                  </div>
                </div>

                {/********* MODAL UPLOAD IMAGE-SECTION ENDS ********/}

                {/********* MODAL WRITE-SECTION STARTS **********/}

                <div className="write-something-section">
                  <div className="write-head">
                    <div className="heading">Take the Mic</div>
                  </div>
                  <div className="write-section">
                    <div className="write-section-content">
                      <div className="head"> Write Something...</div>
                    </div>
                  </div>
                </div>

                {/********** MODAL WRITE-SECTION ENDS **********/}

                {/******* MODAL TAG-SECTION STARTS ********/}

                <div className="tag-section">
                  <div className="tag-head">
                    <div className="heading">Tag</div>
                  </div>
                  <div className="add-tag-section">
                    <div className="tags">
                      <div className="tag-content">
                        <div className="tag-name">Julia Roberts</div>
                        <div className="exit-icon">
                          <img src={exit} alt="exit" id="exit" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/******* MODAL TAG-SECTION ENDS ********/}

                {/******* MODAL BUTTON-SECTION STARTS *****/}

                <div className="modal-button">
                  <div className="buttons-content">
                    <div className="submit-btn">
                      <StyledButton onClick={()=>{next()}}
                        text="white"
                        bg="linear-gradient(#ff483c 100%, #ff2c5a 100%)"
                      >
                        Submit
                      </StyledButton>
                    </div>
                  </div>
                </div>

                {/****** MODAL BUTTON-SECTION-ENDS *******/}
              </div>
            </div>
          </div>
        </div>
      </StyledCreateShortModal>
    </>
  );
}

export const StyledCreateShortModal = styled.div`
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
    width: 39%;
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
    padding: 15px;
  }

  .content-container>div{
    margin-top: 10px;
  }

  

  /********* MODAL UPLOAD IMAGE-SECTION STARTS ********/

  .heading {
    font-size: 12px;
    text-align: start;
    font-weight: 500;
    line-height: 20px;
    color: #242424;

  }

  .image-section {
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    height: 140px;
    display: flex;
  }

  .image-section-content {
    margin: auto;
  }

  .upload-pic {
    display: flex;
  }

  img#upload {
    margin: auto;
  }

  .head {
    font-size: 12px;
    font-weight: 400;
    line-height: 100%;
    margin-top: 10px;
    color: #7b7f91;
  }

  /********* MODAL UPLOAD IMAGE-SECTION ENDS ********/

  /********* MODAL UPLOAD WRITE-SECTION STARTS ********/
  .write-section {
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    display: flex;
    height: 100px;
  }

  .write-section-content {
    width: 95%;
    margin: auto;
    margin-top: 0px;
  }
  /********* MODAL UPLOAD WRITE-SECTION ENDS ********/

  /********* MODAL TAG-SECTION STARTS **********/

  .add-tag-section {
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    display: flex;
    padding: 12px;
  }

  .tags {
    width: 30%;
    /* margin: auto; */
    border: 1px solid transparent;
    background-color: #a8580f;
    color: white;
    padding: 7px;
    display: flex;
    border-radius: 10px;
  }

  .tag-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .tag-name {
    font-size: 12px;
    font-weight: 400;
    line-height: 100%;
  }

  /********** MODAL TAG-SECTION ENDS ***********/

  /******* MODAL BUTTON-SECTION STARTS *****/

  .buttons-content {
    display: flex;
    justify-content: end;
  }

  .submit-btn {
    width: 31%;
    display: flex;
    justify-content: end;
  }

  /******* MODAL BUTTON-SECTION ENDS *****/
`;
