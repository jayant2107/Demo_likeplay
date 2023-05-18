import React from 'react'
import Sidebar from '../Components/Sidebar'
import Rightsidebar from '../Components/Rightsidebar'
import styled from 'styled-components'
import FeedPage from '../Feautres/Home/FeedPage'
import Settings from '../Feautres/Settings/Settings'
import { Outlet } from 'react-router-dom'


export default function Layout() {
    return (
        <>
            <Layoutdesign>
                <div className='left-sidebar'>
                    <Sidebar/>
                </div>
                <div className='center-content'>
                <Outlet></Outlet>
                </div>
                <div className='right-sidebar'>

                <Rightsidebar/>
                </div>
            </Layoutdesign>

        </>

    )
}
const Layoutdesign = styled.div `
display:flex;
width:100%;
.left-sidebar{
  width:22%;
 position:fixed;
 border-right: 1px solid #e2e2e2;

}
.center-content{
  width:56%;
  position: absolute;
  left: 22%;
}
 
}
.right-sidebar{
  width:22%;
  position:fixed;
  left:78%;
  min-height:100vh;
  border-left: 1px solid #e2e2e2;

}

`

