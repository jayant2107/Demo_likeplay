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

  .MainCard {
    width:100%;
    height:100%;
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

    button {
      border-style:none;

    }
  }
  .ImgDiv {
    width: 100%;
    height: 100%;

    .imgClass {
      width: 100%;
    height: 145px;
    object-fit: fill;
    }
    
  }


`;
