import styled from "styled-components";
import StyledButton from "../Components/Button";
import { useLocation } from "react-router-dom";

export const StyledDeleteModal = styled.div`
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
    padding: 12px;
  }
  /* MODAL HEADING-SECTION STARTS */

  .heading {
    color: #242424;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
  }

  /* MODAL HEADING-SECTION ENDS */

  /* MODAL PARA-SECTION STARTS  */

  .modal-head {
    text-align: center;
  }

  .modal-para {
    font-size: 16px;
    line-height: 24px;
    color: #7b7f91;
    text-align: center;
    margin: auto;
    margin-top: 10px;
  }

  /* MODAL PARA-SECTION ENDS  */

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

  .modalDesign {
    text-align: center;
    footer {
      width: 100%;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }

  /* MODAL BUTTON-SECTION ENDS  */
`;

export default function DeleteModal({ closeModal, prop, closeDelete, close }) {
  console.log(closeDelete, "jkdfnsdjk");
  const location = useLocation();
  console.log(location);
  const path = location?.pathname;

  return (
    <>
      {prop && (
        <StyledDeleteModal>
          {/* MODAL HEADING-SECTION STARTS */}

          <div className="modal-head">
            <div className="heading">{prop.name}</div>
          </div>

          {/* MODAL HEADING-SECTION ENDS */}

          {/* MODAL PARA-SECTION STARTS  */}

          <div className="modal-para">{prop.para}</div>

          {/* MODAL PARA-SECTION ENDS  */}

          {/* MODAL BUTTONS-SECTION STARTS  */}
          <div className="modal-buttons">
            <div className="buttons-content">
              <div
                className="cancel-btn"
                onClick={() => {
                  if (path === "/Layout/FeedPage") {
                    closeModal();
                  } else if (path === "/Layout/Settings") {
                  }
                  closeDelete();
                }}
              >
                <StyledButton text="#242424" bg="#f0f0f0">
                  Cancel
                </StyledButton>
              </div>
              <div
                className="yes-btn"
                onClick={() => {
                  if (path === "/Layout/FeedPage") {
                    closeModal();
                  } else if (path === "/Layout/Settings") {
                    closeDelete();
                  }
                }}
              >
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
        </StyledDeleteModal>
      )}
    </>
  );
}
