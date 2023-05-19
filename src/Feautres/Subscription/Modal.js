import exit from '../../Assets/Icons/exitAk.svg'
import React from 'react'
import styled from 'styled-components'
import Subscription from './Subscriptions'

export const Modal = ({setModal}) => {
  return (
    <Backshadow>    <div className='backshadow'>
        <div className='custom-modal'><Subscription/></div>
        <div className='delete-icon' ><img src={exit} alt="" onClick={()=>setModal(false)}/></div>
    </div>
    </Backshadow>

  )
}

const Backshadow = styled.div`
.backshadow{
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.backshadow .custom-modal{
  width: 500px;
  height: 500px;
  background-color: #fff;
  position: relative;
}
.delete-icon{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: blue;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  top: 10%;
  right: 34%
}
`
