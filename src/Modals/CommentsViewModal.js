import React from "react";
import styled from "styled-components";
import { exit } from "../Utils/icons-folder/Modalsicons";
import { comment } from "../Utils/images/Modalsimg";

export default function CommentsViewModal() {
  return (
    <>
      <StyledCommentsViewModal>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="delete-icon">
                <img src={exit} alt="exit" id="exit" />
              </div>
              <div className="content-container">
                <div className="left-section">
                  <div className="photo">
                    <img src={comment} alt="comment" id="comment"></img>
                  </div>
                </div>
                <div className="right-section">dfgh</div>
              </div>
            </div>
          </div>
        </div>
      </StyledCommentsViewModal>
    </>
  );
}

export const StyledCommentsViewModal = styled.div`
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
    width: 50%;
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
    display: flex;
  }

  .left-section {
    width: 50%;
    margin: auto;
  }

  img#comment {
   display: flex;
    width: 100%;
}

.right-section{
    width: 50%;
    border: 1px solid transparent;
    border-radius: 10px;
}


`;
