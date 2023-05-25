import React, { useState }  from "react";
import styled from "styled-components";
import { Modal } from "antd";
import MatchesCard from "../../Components/MatchesCard";
import data from "../../Feautres/Matches/Matches_JSON";
import search from "../../Assets/Images/Matches Image/search.png";
import DatingDetailModal from "../../Modals/DatingDetailModal";




const Matches = () => {

  const [detailModal, setDetailModal] = useState(false);

  const closeDetailModal = () =>{
    setDetailModal(false);
  }
  
  return (
    <MatchesStyle>
      <div className="Header">
        <div className="HDiv">
          <p className="Matches">Matches</p>
          <img src={search} alt="" className="SLogo" />
        </div>
      </div>
      <div className="Main">
        <div className="Tips">
          <p onClick={()=>{setDetailModal(true)}}>Online dating Tips?</p>
          {detailModal && (<Modal
          open={detailModal}
          onCancel={closeDetailModal}
          close={closeDetailModal}
          maskClosable = {true}
          footer={null}
          width="80%"
          style={{ top: 20 }}
          >
            <DatingDetailModal/>
          </Modal>)}
        </div>
        <div className="Cards">
          {data.map((value) => (
            <MatchesCard key={value.id} props={value} />
          ))}
        </div>
      </div>
    </MatchesStyle>
  );
};

export default Matches;

const MatchesStyle = styled.div`
  width: 100%;
  height: 100%;
  .Main {
    width: 100%;
    margin: 20px auto;
  }
  .Header {
    /* width: 100%;
    height: 88px;
    background: rgb(240, 240, 240);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: end;
    align-items: end;
    padding: 20px; */
  }

  .Cards {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    padding: 20px 8px;

    @media (max-width: 950px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .Tips {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: end;
    text-decoration-line: underline;
    text-transform: capitalize;
    color: #ff384d;
    padding: 0 20px;
  }
  .HDiv {
    width: 100%;
    height: 88px;
    background: rgb(240, 240, 240);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: end;
    align-items: end;
    padding: 20px;
  }
  .Matches {
    letter-spacing: 0.05em;
    color: #a8580f;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  .SLogo {
    height: 17.49px;
    width: 17.49px;
  }
`;
