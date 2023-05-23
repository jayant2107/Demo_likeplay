import styled from "styled-components";
import InfoData1 from "./ModalData/InfoGuidelinesData1";
import InfoData2 from "./ModalData/InfoGuidelinesData2";
import { likep } from "../Utils/images/Modalsimg";

export default function InfoGuidelinesModal() {
  return (
    <>
      <StyledGuideModal>
        <div className="content">
          {/* MODAL HEAD-SECTION STARTS */}
          <div className="head">
            <div className="heading">GUIDELINES FOR THE FLOOR AND MIC</div>
          </div>
          {/* MODAL HEAD-SECTION-ENDS */}
          {/* MODAL HERO-SECTION-STARTS */}
          <div className="hero-section">
            <div className="list-section1">
              {InfoData1.map((data)=>{
                return(<> <div className="list-content">
                
                <div className="img">
                  <img src={likep} alt="bullet" id="bullet"/>
                </div>
                <div className="line">{data.para}</div>
              </div></>)
              })}
              
            </div>
            <div className="list-section2">
              <div className="sub-heading">SHOW OFF (Your Phots) GUIDELINES.</div>
              {InfoData2.map((data2)=>{
                return(<> <div className="list-content">
               
                <div className="img">
                <img src={likep} alt="bullet" id="bullet"/>
                </div>
                <div className="line">{data2.para}</div>
              </div></>)
              })}
              {/* <div className="list-content">
               
                <div className="img">
                <img src={likep} alt="bullet" id="bullet"/>
                </div>
                <div className="line">Any photos that don’t feature yourself</div>
              </div> */}
            </div>
            <div className="admin">***Admin will be monitoring the Floor and the Mic.****</div>
          </div>

          {/* MODAL HERO-SECTION-ENDS */}
        </div>
      </StyledGuideModal>
    </>
  );
}

export const StyledGuideModal = styled.div`

padding: 20px;

.head{
  margin-bottom: 10px;
}

.heading {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    line-height: 45px;
    color: #181818;
}

.list-content{
  display: flex;
  margin-bottom: 5px;
}

.line{
  font-size: 13px;
  margin-left: 7px;
  font-weight: 400;
}

.sub-heading{
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
}

.admin{
  color: #FF384D;
  font-size: 14px;
  font-weight: 400;
}

`;
