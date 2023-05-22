import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Rightsidebar from "../Components/Rightsidebar";
import styled from "styled-components";
import FeedPage from "../Feautres/Home/FeedPage";
import Settings from "../Feautres/Settings/Settings";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const path =location?.pathname !== (("/Layout/Settings") || ( "Layout/FeedPage"))
  console.log(path,"path")


  return (
    <>
      <Layoutdesign isRightNav={location?.pathname !== "/Layout/Settings" } >
        <div className="left-sidebar">
          <Sidebar />
        </div>
        <div className="center-content" >
          <Outlet></Outlet>
        </div>
        {location?.pathname !== "/Layout/Settings"&& (
          <div className="right-sidebar">
            <Rightsidebar />
          </div>
        )}
      </Layoutdesign>
    </>
  );
}
const Layoutdesign = styled.div`
  display: flex;
  width: 100%;
  .left-sidebar {
    width: 20%;
    position: fixed;
    border-right: 1px solid #e2e2e2;
  }
  .center-content {
    width: 100%;
    margin-left: calc(100% - 80%);
    margin-right: ${({isRightNav})=> isRightNav && 'calc(100% - 80%)'};
  }

  .right-sidebar {
    width: 20%;
    position: fixed;
    left: 80%;
    min-height: 100vh;
    border-left: 1px solid #e2e2e2;
  }
`;
