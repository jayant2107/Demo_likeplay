import React from 'react'
import styled from 'styled-components'
import SubscriptionLayout from '../Layouts/SubscriptionLayout'

const ModalLayout = () => {
  return (
    <>
    <StyledLayout>
    <div className="outer">
        <div className="inner">
        <div className='inner-subscription'>
        <SubscriptionLayout/>
        </div>
         
        </div>
      </div>
       
      </StyledLayout>
    </>
  )
}

export default ModalLayout
const StyledLayout = styled.div`
.outer{
  width: 100%;
  /* height: 100vh; */
  background-color: rgb(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
}

.inner{
  width: 74%;
  background-color: white;
  box-shadow: rgba(0,0,0,0.5) 0px 1px 20px 0px;
  margin: auto;
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50% , -50%);
}
`