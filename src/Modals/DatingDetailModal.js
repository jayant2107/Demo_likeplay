import styled from "styled-components";
import { likep } from "../Utils/images/Modalsimg";
import DatingData from "./ModalData/DatingDetailData";

export default function DatingDetailModal({ closeDetailModal }) {
  return (
    <>
      <StyledDatingDetails>
        <div className="content">
          {DatingData.map((data) => {
            return (
              <>
                <div className="list-section">
                  <div className="list-content">
                    <img src={likep} alt="likep" id="likep" />
                    <div className="line">
                      <div className="head">{data.head}</div>
                      <div className="para">{data.para}</div>
                      <div className="para1">{data.para1}</div>
                      <div className="para2">{data.para2}</div>
                      <div className="para3">{data.para3}</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
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
    position: relative;
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
    position: absolute;
    top: 95%;
    left: 50%;
    padding: 1rem 0 1rem 8rem;

    transform: translate(-50%, -50%);
    p {
      width: 73%;
      margin-left: 25px;
      font-size: 14px;
    }
  }

  p {
    width: 73%;
    margin-left: 25px;
    font-size: 14px;
  }

  .content-container {
    padding: 12px;
  }

  .list-section {
    width: 86%;
    margin: auto;
    margin-bottom: 3px;
  }

  .list-content {
    display: flex;
    width: 100%;
  }

  .line {
    margin-left: 3px;
  }

  img#likep {
    width: 14px;
    height: 12px;
    margin-top: 3px;
  }

  .head {
    display: flex;
    align-items: center;
    /* margin-bottom: 3px; */
    font-size: 13px;
    font-weight: 600;
  }

  .para,
  .para1,
  .para2,
  .para3 {
    font-size: 13px;
    font-weight: 400;
    width: 98%;
    color: #484848;
  }
`;
