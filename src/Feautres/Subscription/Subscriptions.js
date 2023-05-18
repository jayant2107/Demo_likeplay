import React from 'react'
import styled from 'styled-components'
import rectangle from "../../Assets/Images/Akshay/Rect.svg"
import ModalLayout from '../../Modals/ModalLayout'
const Subscription = () => {
  return (
    <>
      <StyledSubcription>
        <div className='Wraper'>
          <div className='images'>
            <img src={rectangle} alt="" className='background-image' />
          </div>
          <ModalLayout/>
        </div>
      </StyledSubcription>
    </>
  )
}

export default Subscription
const StyledSubcription = styled.div`
.background-image{
background: #000000;
width: 100%;
height: 100vh;
}
`

