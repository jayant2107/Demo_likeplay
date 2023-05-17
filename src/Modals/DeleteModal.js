import styled from "styled-components";

export default function DeleteModal() {
  return (
    <>
      <StyledDeleteModal>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="content-container">
                <div className="modal-head">
                  <div className="heading">Block User</div>
                </div>
                <div className="modal-para">
                  Are you sure you want to block user?
                </div>
                <div className="modal-buttons">
                  <div className="buttons-content">
                    <div className="cancel-btn">
                      <button className="cancel">Cancel</button>
                    </div>
                    <div className="yes-btn">
                      <button className="yes">Yes</button>
                    </div>
                  </div>
                </div>
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

  .content-container {
    padding: 12px;
  }

  .heading {
    color: #242424;
    font-size: 26px;
    font-weight: 500;
  }

  .modal-para {
    font-size: 16px;
    line-height: 24px;
    color: #7b7f91;
    width: 75%;
    margin: auto;
  }

  .buttons-content {
    display: flex;
  }

  .cancel-btn, .yes-btn {
    width: 50%;
  }

  button.yes, button.cancel{
    width: 85%;
    padding: 15px;
    border: 1px solid transparent;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }

  button.cancel{
    background-color: #F0F0F0;
  }

`;