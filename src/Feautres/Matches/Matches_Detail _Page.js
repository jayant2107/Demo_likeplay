import React from 'react'
import styled from 'styled-components';
import MatchesCard2 from '../../Components/MatchesCard2';
import search from "../../Assets/Images/Matches Image/search.png"
import { useLocation } from 'react-router-dom';

const MatchesDetailPage = () => {
  let location=useLocation()
  let data = location.state.about
  // console.log(data)
 
    return (
    <MatchesDetailsStyle>
      <div className="Header">
        <div className="HDiv">
          <p className="Matches">Matches</p>
          <img src={search} alt="" className="SLogo" />
        </div>
      </div>
      <div className='Card'>
        { data.map((value)=>(
            <MatchesCard2 key={value.id} props={value}/>
        ))}
      </div>
      
    </MatchesDetailsStyle>
  )
}

export default MatchesDetailPage;

const MatchesDetailsStyle = styled.div`
width: 100%;


.Card{
margin: 27px 20px 0 20px ;
}
.Header {
    height: 88px;
    width: 100%;
    background: #f0f0f0;
  }
  .HDiv {
    position: relative;
    width: 90%;
    margin: auto;
    top: 48px;
    display: flex;
    justify-content: space-between;
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
