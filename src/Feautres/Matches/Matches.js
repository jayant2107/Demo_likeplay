import React from 'react'
import styled from 'styled-components';
import MatchesCard from '../../Components/MatchesCard';
import data from '../../Feautres/Matches/Matches_JSON'

const Matches = () => {
  return (
    <MatchesStyle>
         <div className='Tips'><p>Online dating Tips?</p> </div>
        <div className="Cards">
        {data.map((value) => (
          <MatchesCard key={value.id} props={value} />
        ))}
      </div>
    </MatchesStyle>
  )
}

export default Matches;

const MatchesStyle = styled.div`
width: 100%;

.Cards{
    position: relative;
    width: 60%;
   
    margin: auto;
    height: 100vh ;
    margin-top: 2rem;
    display:grid;
    grid-template-columns: auto auto auto auto;
}
.Tips {
    width: 60%;
   
   margin: auto;
font-size: 14px;
text-align: right;
text-decoration-line: underline;
color: #FF384D;
}
`;