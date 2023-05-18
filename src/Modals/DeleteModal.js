import styled from "styled-components";
import StyledButton from "../Components/Button";
import { exit } from "../Utils/icons-folder/Modalsicons";

export default function DeleteModal() {
  return (
    <>
      <StyledDeleteModal>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
            <div className="delete-icon">
                <img src={exit} alt="exit" id="exit" />
              </div>
              <div className="content-container">
                {/* MODAL HEADING-SECTION STARTS */}

                <div className="modal-head">
                  <div className="heading">Report User</div>
                </div>

                {/* MODAL HEADING-SECTION ENDS */}

                {/* MODAL PARA-SECTION STARTS  */}

                <div className="modal-para">
                  Are you sure you want to block user?
                </div>

                {/* MODAL PARA-SECTION ENDS  */}

                {/* MODAL BUTTONS-SECTION STARTS  */}
                <div className="modal-buttons">
                  <div className="buttons-content">
                    <div className="cancel-btn">
                      <StyledButton text="#242424" bg="#f0f0f0">
                        Cancel
                      </StyledButton>
                    </div>
                    <div className="yes-btn">
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
      </StyledDeleteModal>
    </>
  );
}

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

  .modal-para {
    font-size: 16px;
    line-height: 24px;
    color: #7b7f91;
    width: 75%;
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

  /* MODAL BUTTON-SECTION ENDS  */
`;
