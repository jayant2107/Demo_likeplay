import styled from "styled-components";
import StyledButton from "../Components/Button";
import { useRef, useState } from "react";
import { report_reasons } from "Utils/constant";

export const StyledReportModal = styled.div`
  /* MODAL HEADING-SECTION STARTS */

  .heading {
    color: #242424;
    font-size: 26px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
  }

  /* MODAL PARA-SECTION STARTS */

  .para {
    color: #7b7f91;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-top: 10px;
  }

  /*MODAL PARA-SECTION ENDS*/

  /* MODAL HEADING-SECTION ENDS */

  /* MODAL HERO-SECTION STARTS */

  .modal-hero-section {
    margin-top: 20px;
  }

  .complaints-section {
    display: flex;
    flex-direction: column;
  }

  .complaint {
    padding: 15px;
    background-color: #f0f0f0;
    font-size: 12px;
    margin-bottom: 10px;
    font-weight: 400;
    line-height: 18px;
    // border: 1px solid ${props=>props.status?"orange":"transparent"};
    border-radius: 10px;
  }

  input[type="text"] {
    width: 100%;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    padding: 10px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    padding-top: 15px;
    padding-bottom: 30px;
  }

  /* MODAL HERO-SECTION ENDS */

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

export default function ReportUserModal({ closeReportModal, reportUserPost }) {
  let [reportReason,SetReportReason] = useState("");
  let [userReportReason,setUserReportReason]=useState("");

  const handleChange = (e) => {
    SetReportReason(e.target.value);
    setUserReportReason(e.target.value);
    console.log("content", reportReason);
  };

  const selectedReason = (list) => {
    SetReportReason(list.value)
    setUserReportReason("")
    console.log("selected",reportReason)
  };

  return (
    <>
      <StyledReportModal>
        {/* MODAL HEADING-SECTION STARTS */}
        <div className="modal-head">
          <div className="heading">Report User</div>
          <div className="para">
            Kindly Select why you want to report this user
          </div>
        </div>

        {/* MODAL HEADING-SECTION ENDS */}

        {/* MODAL HERO-SECTION STARTS */}

        <div className="modal-hero-section">
          <div className="complaints-section">
            {report_reasons.map((list, index) => (
              <div style={{border:`${reportReason===list.value?"1px solid orange":"1px solid transparent"}`}} className="complaint" key={index} onClick={()=>selectedReason(list)}>
                <div className="complaint-content">{list.value}</div>
              </div>
            ))}
            {/* <div className="complaint">
              <div className="complaint-content">Bullying or harassment</div>
            </div>
            <div className="complaint">
              <div className="complaint-content">Scam or fraud</div>
            </div>
            <div className="complaint">
              <div className="complaint-content">Nudity or sexual activity</div>
            </div>
            <div className="complaint">
              <div className="complaint-content">False information</div>
            </div> */}
          </div>
          <div className="other-reason">
            <div className="reason-head"></div>
            <div className="reason-input">
              <input
                type="text"
                value={userReportReason}
                placeholder="Type something..."
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* MODAL HERO-SECTION STARTS */}

        {/* MODAL BUTTONS-SECTION STARTS  */}
        <div className="modal-buttons">
          <div className="buttons-content">
            <div className="cancel-btn" onClick={closeReportModal}>
              <StyledButton text="#242424" bg="#f0f0f0">
                Cancel
              </StyledButton>
            </div>
            <div className="yes-btn" onClick={()=>reportUserPost(reportReason)}>
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
      </StyledReportModal>
    </>
  );
}
