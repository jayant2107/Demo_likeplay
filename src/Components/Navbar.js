
import { opensidebar } from 'Redux/SliceOfRedux/Sidebar'
import { sidebarimage } from 'Utils/Images'
import { Menu, Messanger } from 'Utils/Logo'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

export default function Navbar() {
  const dispatch=useDispatch();
  const [openbar,setopenbar]=useState(true);


  const onclickhandle=()=>{
    setopenbar(!openbar)
    dispatch(opensidebar(openbar))

  }
  console.log(openbar,"openbar")
  return (
   <Main>
    <div className='menu-btn' >
      <a onClick={onclickhandle}>

        <Menu color={"#242424"}   />
      </a>

    </div>
    <div>
    <img src={sidebarimage} alt="" style={{ width:'40px' } } 
 
   
    
    />


    </div>
    <div>
   <Messanger/>


    </div>


   </Main>
  )
}
const Main=styled.div`
display:flex;
justify-content:space-between;
padding:10px 10px;
align-items:center;

.menu-btn{
  display:flex;
  align-items:center;
  justify-content:end;
  width:${({openbar})=>openbar?'150px':'30px'}
}

`

