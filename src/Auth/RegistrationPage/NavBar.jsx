import React from "react";
import Burger from "./Burger";
import styled from "styled-components";

import { Logimg } from "../../Utils/RegistrationImg/Registrationflie";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={Logimg} alt="" />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
width: 100%;
background-color: #00000052;
padding: 0 10%;
position : fixed;
top: 0;
right: 0;
left: 0;
height: 5rem;
display: grid;
grid-template-columns: 10% 90%;
align-items: center;

  .logo {
    padding: 15px 0;
    img {
      width: 3rem;
    }
  }
`;
