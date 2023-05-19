import React from 'react'
import exit from '../../Assets/Icons/exitAk.svg'

export const SubscriptionLayoutModal = (setModal) => {
  return (
    <div className='backshadow'>
        <div className='custom-modal'>Modal</div>
        <div className='delete-icon' ><img src={exit} alt="" onClick={()=>setModal(false)}/></div>
    </div>
  )
}
