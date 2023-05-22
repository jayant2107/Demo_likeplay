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
    gap: 17rem;
    .imgLogheader img {
    width: 4rem;
    }

    .header_pages {
    display: flex;
    gap: 74px;
    }
    .header_pages p {
      display: flex;
    font-size: larger;
    gap: 5px;
}
`


const ResHeaderComponent = () => {
  return (
      <div className='Navber_header'>
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
      </div>
  )
}


export default ResHeaderComponent;

