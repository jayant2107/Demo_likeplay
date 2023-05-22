import React from 'react'
import styled from 'styled-components'
import rectangle from "../../Assets/Images/Akshay/Rect.svg"
import ModalLayout from '../../Modals/ModalLayout'
import { SubscriptionFooter } from './SubscriptionFooter'
const Subscription = () => {
  return (
    <>
      <StyledSubcription>
        
          <div className='images'>
            <img src={rectangle} alt=""  className='backgrnd' />
          </div>
          <ModalLayout/>
      
    {/* <SubscriptionFooter/> */}
    <div className='footersub'>
           <SubscriptionFooter/>
           </div>
      </StyledSubcription>

    </>
  )
}

export default Subscription
const StyledSubcription = styled.div`
.images{
  /* height: 100vh; */
  filter: brightness(100%);
  /* object-fit: contain; */
}
.backgrnd{
  width: 100%;
/* height: 140vh; */

}
`

