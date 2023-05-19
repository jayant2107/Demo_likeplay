import React, { useState } from 'react'
import Card from './CardModal'
import { Modal } from './Modal'

const MainModal = () => {
    const [modal, setModal] = useState(false)
  return (
   <>
     <Card setModal = {setModal}/>
   {modal===true&&(
    <Modal setModal = {setModal}/>
   )}
   </>
  )
}

export default MainModal