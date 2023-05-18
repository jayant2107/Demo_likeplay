import React from "react";
import Sidebar from "../Components/Sidebar";
import Rightsidebar from "../Components/Rightsidebar";
import styled from "styled-components";

export default function Layout() {
  return (
    <Layoutdesign>
      <Sidebar />
      <Rightsidebar />
    </Layoutdesign>
  );
}
const Layoutdesign = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
