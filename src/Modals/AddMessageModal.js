import styled from "styled-components";

export const StyledMessageModal = styled.div`
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
`;

export default function AddMessageModal() {
  return (
    <>
      <StyledMessageModal>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="content-container">
                  {/******* MODAL HEADER-SECTION STARTS ********/}

                  <div className="modal-head">
                  <div className="heading">Add your message</div>
                </div>
                {/******* MODAL HEADER-SECTION ENDS ********/}
              </div>
            </div>
          </div>
        </div>
      </StyledMessageModal>
    </>
  );
}
