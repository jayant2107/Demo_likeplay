import React, { useState } from "react";
import styled from "styled-components";
import logo1 from "../Assets/Images/Matches Image/logo1 (1).png";
import logo2 from "../Assets/Images/Matches Image/logo1 (2).png";
import CommentModal from "../Modals/CommentModal";


const MatchesCard = ({ props }) => {


  const [showDiv, setShowDiv] = useState(false);

  const handleOpenDiv = () => {
    setShowDiv(true);
  };

  const handleClose = () => {
    setShowDiv(false);
  };
  return (
    <MatchesCardStyle>
      <div className="MainCard">
        {showDiv && (
          <CommentModal props={props} show={showDiv} close={handleClose} />
        )}
        <div className="MainDiv" onClick={handleOpenDiv}>
          <div className="ImgDiv">
            <img className="imgClass" src={props.Image} alt="" />{" "}
          </div>
          {props.Type && (
            <div className="type">
              <p>{props.Type}</p>
            </div>
          )}
          <p className="Name">{props.Name}</p>
          <div className="Div1">
            <p className="common">{props.Age}</p>
            <span className="dot"></span>
            <p className="common">{props.City} </p>
            <span className="dot"></span>
            <p className="common">{props.Country}</p>
          </div>
        </div>
        <div className="MainDiv2">
          <button className="Button1">
            <img src={logo1} alt="" />
          </button>
          <button className="Button2">
            <img src={logo2} alt="" />
          </button>
        </div>
      </div>
    </MatchesCardStyle>
  );
};

export default MatchesCard;

const MatchesCardStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:0 0 40px 0;
  * {
    border: none;
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
  }

  .type {
    position: absolute;
    top: 4%;
    left: 4%;
    width: 41px;
    height: 16px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border-radius: 10px;
  }
  .type p {
    font-size: 12px;
    text-align: center;
    color: #ffffff;
  }
  .MainDiv {
    position: relative;
  }
  .img {
    background: url(.jpg), #d9d9d9;
    border-radius: 9px;
  }
  .Name {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #242424;
  }
  .Name:hover{
    font-size:18px;

  }
  .common {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #7b7f91;
  }
  .Div1 {
    display: flex;
    justify-content: space-around;
  }
  .dot {
    border: 1px solid #7b7f91;
    border-radius: 5rem;
    background: #7b7f91;
    width: 4px;
    height: 4px;
    margin: auto;
  }
  .Button1 {
    width: 67.5px;
    height: 24px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border-radius: 5px;
    z-index: 0;
  }
  .Button2 {
    width: 67.5px;
    height: 24px;
    background: #f2f2f2;
    border-radius: 5px;
    /* z-index: 0; */
  }
  .MainDiv2 {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  }
  .ImgDiv {
    width: 100%;
    height: 100%;

    .imgClass {
      width: 145px;
      height: 145px;
    }
      .imgClass:hover{
        width:147px;
        height: 147px;
      }
    
  }

  
@media (max-width: 769px) {
  .MainCard {
    width: 340px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    background: #ffffff;

    div {
      padding-top: 0;
    }
    div {
      padding-bottom: 0;
    }
  }
}
@media (max-width: 620px) {
  .MainCard {
    width: 30%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 9px;

    background: #ffffff;
  }
}
@media (max-width: 569px) {
  .MainCard {
    width: 40%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    background: #ffffff;
  }
}
@media (max-width: 431px) {
  .MainCard {
    width: 60%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    background: #ffffff;
  }
  .Marked {
    right: 10%;
  }
}
@media (max-width: 364px) {
  .MainCard {
    width: 65%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    background: #ffffff;
  .Name {
    font-size: 15px;
  }
  .MainDiv2 {
    margin-top: 0.5rem;
  }
  .common {
    font-size: 13px;
  }}
}
@media (max-width: 332px) {
  .MainCard {
    width: 70.3%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    background: #ffffff;
  }
}
@media (max-width: 274px) {
  .MainCard {
    width: 75%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    background: #ffffff;
  }
  .Name {
    font-size: 14px;
  }
  .common {
    font-size: 12px;
  }
  .Button1 {
    width: 51.3px;
    height: 18px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border-radius: 5px;
    z-index: 0;
  }
  .Button2 {
    width: 51.3px;
    height: 18px;
    background: #f2f2f2;
    border-radius: 5px;
    /* z-index: 0; */
  }
  .MainDiv2 {
    margin-top: 0.5rem;
  }
}
@media (max-width: 263px) {
  .MainCard {
    width: 76.5%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    background: #ffffff;
  }
}

@media (max-width: 224px) {
  .MainCard {
    width: 79%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    background: #ffffff;
  }
}
@media (max-width: 187px) {
  .MainCard {
    width: 81%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    background: #ffffff;
  .MainDiv2 {
    margin-top: 7px;
  }
  }
  }

@media (max-width: 358px) {
  .MainCard {
    width: 65%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    background: #ffffff; 
  }
  .common {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #7b7f91;
  }
  .Name {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #242424;
  }
}
`;
