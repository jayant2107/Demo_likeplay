import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Rightsidebar from "../Components/Rightsidebar";
import styled from "styled-components";
import FeedPage from "../Feautres/Home/FeedPage";
import Settings from "../Feautres/Settings/Settings";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "Components/Navbar";
import { useSelector } from "react-redux";


export default function Layout() {
  const location = useLocation();
  const [rightnav, setrightnav] = useState();
  const open=useSelector(e=>e?.Sidebar?.sidebarstate  )
 

  useEffect(() => {
    if (
      location?.pathname === "/Layout/Settings" ||
      location?.pathname === "/Layout/Subscriptions"
    ) {
      setrightnav(true);
    } else {
      setrightnav(false);
    }
  }, [location]);

  return (
    <Mainwrapper>
      <div className="topnavbar">

    <Navbar />
      </div>
      <Layoutdesign isRightNav={!rightnav} open={open}>
        <div className="left-sidebar">
          <Sidebar />
        </div>
        <div className="center-content">
          <Outlet></Outlet>
        </div>
        {!rightnav && (
          <div className="right-sidebar">
            <Rightsidebar />
          </div>
        )}
      </Layoutdesign>
    </Mainwrapper>
  );
}
const Mainwrapper=styled.div`
.topnavbar{
  display:none;

}
@media(max-width:786px){
  .topnavbar{
    position: fixed;
    z-index: 99;
    width: 100%;
    background: white;
    display:block;
    border-bottom:1px solid #E2E2E2;
  }
}

`
const Layoutdesign = styled.div`
  display: flex;
  width: 100%;
  .left-sidebar {
    width: 18%;
    position: fixed;
    border-right: 1px solid #e2e2e2;
  }
  .center-content {
   width:${({isRightNav})=>isRightNav?"62%":"100%"};
    margin-left: calc(100% - 82%);
    margin-right: ${({ isRightNav }) => isRightNav && "calc(100% - 80%)"};
    
  }

  .right-sidebar {
    width: 20%;
    position: fixed;
    left: 80%;
    min-height: 100vh;
    border-left: 1px solid #e2e2e2;
  }
  @media(max-width:768px){
    .left-sidebar{
      display:${({open})=>open?"absolute":"none"};
      top:8%;
      width:150px;
      z-index:2;
      height:92vh;
    }
    .right-sidebar{
      display:none;
    }
    .center-content{
      width:100%;
      margin-left:0%;
      margin-right:0%;
      margin-top:50px;
    }

  }
`;
