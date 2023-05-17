import React from "react";
import styled from "styled-components";

export default function CreateShotsModal() {
  return (
    <>
      <StyledCreateShortModal>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="content-container">
                {/********* MODAL UPLOAD IMAGE-SECTION STARTS ********/}

                <div className="upload-image-section">
                  <div className="upload-image-head">
                    <div className="heading">Take the Floor</div>
                  </div>
                  <div className="image-section">
                   <div className="image-section-content">
                    <div className="upload-pic"></div>
                    <div className="upload-pic-head">Upload Images</div>
                   </div>
                  </div>
                </div>

                {/********* MODAL UPLOAD IMAGE-SECTION ENDS ********/}
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

  .content-container {
    padding: 15px;
  }

  /********* MODAL UPLOAD IMAGE-SECTION STARTS ********/

  .heading {
    font-size: 13px;
    text-align: start;
    font-weight: 500;
    line-height: 20px;
    color: #242424;
  }

  .image-section {
    /* width: 95%;
    margin: auto; */
    border: 1px solid #E2E2E2;
    border-radius: 10px;
}

  /********* MODAL UPLOAD IMAGE-SECTION ENDS ********/
`;
