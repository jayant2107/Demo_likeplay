import styled from "styled-components";
import { likep } from "../Utils/images/Modalsimg";

export default function DatingDetailModal() {
  return (
    <>
      <StyledDatingDetails>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="content-container">
                {/* MODAL LIST-SECTION STARTS */}

                <div className="list-section">
                  <div className="list-content">
                    <div className="like-pic">
                      <img src={likep} alt="likep" id="likep" />
                    </div>
                    <div className="line">
                      <div className="head">
                        Online Dating Tips:- Dating Safety Tips
                      </div>
                      <div className="para">
                        We want to make sure you stay safe during your online
                        dating experience with Seeking. Keep these tips in mind
                        when you are talking/texting with someone or setting up
                        a Meet & Greet.
                      </div>
                    </div>
                  </div>
                </div>

                {/* MODAL LIST-SECTION ENDS */}
              </div>
            </div>
          </div>
        </div>
      </StyledDatingDetails>
    </>
  );
}

export const StyledDatingDetails = styled.div`
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
    width: 97%;
    border: 1px solid transparent;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 20px 0px;
    margin: auto;
    position: fixed;
    top: 12%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content-container {
    padding: 12px;
  }

  .list-section {
    width: 90%;
    margin: auto;
}

  .list-content {
    display: flex;
    width: 76%;
    justify-content: space-around;
  }

  .head {
    font-size: 13px;
    font-weight: 600;
}

.para {
    font-size: 13px;
    font-weight: 400;
    width: 92%;
    padding: 2px;

}
`;
