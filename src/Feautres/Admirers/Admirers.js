import React from "react";
import styled from "styled-components";
import { searchIcon } from "../../Utils/Images";
import data from "../Matches/Matches_JSON";
import MatchesCard from "../../Components/MatchesCard";
import AdmirerCards from "./AdmirerCards";

export default function Admirers() {
  return (
    <div>
      <AdmirerHeader>
        <div>
        <header>
          Admirers<span>(They want me, I dey enter their eye)</span>
        </header>
        </div>
        <div>
        <img src={searchIcon} alt="" className="SLogo" />

        </div>
      
        
      </AdmirerHeader>

      <CardWrapper>
        {data.map((value) => (
          <AdmirerCards key={value.id} props={value} />
        ))}
      </CardWrapper>
    </div>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  padding: 20px 8px;
  @media(max-width:1200px){
    grid-template-columns:repeat(3,1fr);

}
`;

const AdmirerHeader = styled.div`
  width: 100%;
 
  background: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items:center;
  align-items: end;
  padding: 20px;

  header {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #a8580f;
    display: flex;
    align-items: center;

    span {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      color: #242424;
      background: transparent;
      padding: 0 5px;
    }

    @media (max-width: 800px) {
      color: red;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4.5px 20px;
    background: #ffffff;
    border-radius: 6px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #242424;
  }
`;
