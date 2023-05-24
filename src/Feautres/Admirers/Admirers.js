import React from "react";
import styled from "styled-components";
import { searchIcon } from "../../Utils/Images";
import data from "../Matches/Matches_JSON";
import MatchesCard from "../../Components/MatchesCard";
import AdmirerCards from "./AdmirerCards";
import {  AiOutlineSearch } from "react-icons/ai";

export default function Admirers() {
  return (
    <div>
      <AdmirerHeader>
        <div className="header">
          <div>
            <p>Admires <span>(They Want Me, I Dey Enter Their Eye)</span></p>

          </div>
          <div>
          <AiOutlineSearch style={{
            width:'18px',height:'18px'
          }}/>

          </div>
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
height:88px;
background: #f0f0f0;
display:flex;
align-items:end;
.header{
  width:100%;
  padding:20px;
  display:flex;
  justify-content:space-between;
  align-items:center;

  p{
    font-size:16px;
    font-family:"Poppins";
    font-weight:500;
    color:#A8580F;
    letter-spacing:0.05em;
    line-height:24px;
  }
  span{
    color:#242424;
    font-size:14px;
    font-family:"Poppins";
    font-weight:400;
  }
 

}



`;
