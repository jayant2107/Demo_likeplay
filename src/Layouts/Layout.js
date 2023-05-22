import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Rightsidebar from "../Components/Rightsidebar";
import styled from "styled-components";
import FeedPage from "../Feautres/Home/FeedPage";
import Settings from "../Feautres/Settings/Settings";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const [rightnav, setrightnav] = useState();

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
    <>
      <Layoutdesign isRightNav={!rightnav}>
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
    margin-right: ${({ isRightNav }) => isRightNav && "calc(100% - 80%)"};
  }

  .right-sidebar {
    width: 20%;
    position: fixed;
    left: 80%;
    min-height: 100vh;
    border-left: 1px solid #e2e2e2;
  }
`;
