import React from 'react'
import styled from 'styled-components';
import MatchesCard2 from '../../Components/MatchesCard2';
import Details from "./Matches_JSON2"

const MatchesDetailPage = () => {
 console.log(Details)
    return (
    <MatchesDetailsStyle>
      <div className='Card'>
        { Details.map((value)=>(
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
  /* width: 60%; */
 /* margin: auto; */
}
`;
