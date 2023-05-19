import React from 'react'
import styled from 'styled-components'
import { Logimg } from '../../Utils/RegistrationImg/Registrationflie'

const ResHeader = styled.div`
       color: white;
    align-items: center;
    display: flex;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 1rem 0px;


    .imgLogheader img {
    width: 4rem;
    }

    .header_pages {
    display: flex;
    }
    .header_pages p {
    margin-left: 5rem;
    font-size: larger;
}
`


const ResHeaderComponent = () => {
  return (
    <ResHeader>
      <div className='imgLogheader'>
        <img src={Logimg} alt='ff'></img>
      </div>
      <div className='header_pages'>
        <p>Home</p>
        <p>About us</p>
        <p>Help</p>
        <p>Contact us</p>
      </div>

    </ResHeader>
  )
}


export default ResHeaderComponent;

