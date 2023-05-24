import React from "react";
import styled from "styled-components";

export default function AdmirerCards({ props }) {
  return (
    <MatchesCardStyle>
      <div className="MainCard">
        <div className="MainDiv">
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
        <AdmirerCardFooter>
       <button className="admire-back">Admire Back</button>
     
        </AdmirerCardFooter>
      </div>
    </MatchesCardStyle>
  );
}

const AdmirerCardFooter = styled.div`
padding:10px 5px;
.admire-back{
  height:24px;
  width:105px;
  background:linear-gradient(to right,#FF2C5A 100%,#FF483C 0%);
  border:none;
  color:white;
  border-radius:5px;
  

}




`;

const MatchesCardStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px 0;

  .MainCard {
    width: 100%;
    height: 100%;
  }

  .type {
    position: absolute;
    top: 14px;
    left: 5px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border-radius: 10px;
  }
  .type p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    text-transform: capitalize;
    color: #ffffff;
    padding: 3px 8px;
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
    align-items:center;
    gap:10px;
  
  }
  .dot {
    border: 1px solid #7b7f91;
    border-radius: 5rem;
    background: #7b7f91;
    width: 4px;
    height: 4px;
   
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
      border-style: none;
    }
  }
  .ImgDiv {
    width: 100%;
    height: 100%;

    .imgClass {
      width: 100%;
      height: 170px;
      object-fit: fill;
    }
  }
`;
