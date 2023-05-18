import React, {useState} from 'react'
import styled from 'styled-components'
import GridType from '../Layouts/GridLayout'
import exit from '../Assets/Icons/exitAk.svg'
const ModalLayout = () => {
  const [modal, setModal] = useState(false);
  return (
    <>

    <StyledLayout>
    <div className='con'>
      <br></br>
      <button setModal={setModal}/>
      {modal===true&&(
        <ModalLayout setModal={setModal}/>
         )}
    </div>
    <div className="outer">
   
        <div className="inner">
        <div className='delete-icon' ><img src={exit} alt="" onClick={()=>setModal(false)}/></div>
        <div className='inner-subscription'>
        <GridType/>
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
  background-color: rgb(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.inner{
  width: 60%;
  height: 100vh;
  background-color: white;
  box-shadow: rgba(0,0,0,0.5) 0px 1px 20px 0px;
  margin: auto;
  position: relative;
  top:55%;
  /* height: 50vh; */
  overflow: visible;
  font-size: small;
  left: 33%;
  transform: translate(-50% , -50%);
}
.delete-icon{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  top: -30px;
  right: -14px;
}

`