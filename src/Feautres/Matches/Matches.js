import React from 'react'
import styled from 'styled-components';
import MatchesCard from '../../Components/MatchesCard';
import data from '../../Feautres/Matches/Matches_JSON'
import search from "../../Assets/Images/Matches Image/search.png"

const Matches = () => {

  
  return (
    <MatchesStyle>
              <div className='Header'>
                <div className='HDiv'>
                <p className='Matches'>Matches</p>
                <img src={search} alt='' className='SLogo'/>
                </div>
              </div>
      <div className='Main'>

         <div className='Tips'><p>Online dating Tips?</p> </div>
        <div className="Cards">
        {data.map((value) => (
          <MatchesCard key={value.id} props={value} />
        ))}
      </div></div>
    </MatchesStyle>
  )
}

export default Matches;

const MatchesStyle = styled.div`
width: 100%;
height: 100%;
.Main{
width: 90%;
margin: 20px auto;

}
.Header{
  height: 88px;
  width: 100%;
  background: #F0F0F0;
}

.Cards{
 height :100vh ;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    margin-top: 29px;
}
.Tips {
  width: auto;
font-size: 14px;
text-align: right;
text-decoration-line: underline;
color: #FF384D;
}
.HDiv{
  position: relative;
  width: 90%;
  margin: auto;
  top:48px;
display: flex;
justify-content: space-between;

}
.Matches{
  letter-spacing: 0.05em;
  color: #A8580F;
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
}
.SLogo{
height: 17.49px;
width: 17.49px;
}
`;