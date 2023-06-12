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
  width: 80%;
  margin: auto;
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
