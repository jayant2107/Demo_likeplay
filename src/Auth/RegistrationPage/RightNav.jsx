import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import secoundnavbar from "../../Data/Publicsecondnavbardata";

const RightNav = ({ open, handleChange }) => {
  const navigate = useNavigate();
  const MatchesDetailPage = (name) => {
    navigate("/Safety", { state: { id: name } });
  };

  return (
    <Ul open={open}>
      <li>
        <NavLink className="navlink" to="/" onClick={handleChange}>
          Home
        </NavLink>
      </li>
      {secoundnavbar.map((ele) => {
        return <li onClick={() => {handleChange();MatchesDetailPage(ele.page)}}>{ele.page}</li>;
      })}
    </Ul>
  );
};

export default RightNav;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  gap: 5rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    gap: 3rem;
  }

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #ffffff;
  cursor: pointer;

  .navlink {
    color: white;
    text-decoration: none;
    &:hover {
      color: rgb(255, 72, 60);
    }
  }
  li {
    padding: 18px 10px;
    &:hover {
      color: rgb(255, 72, 60);
    }
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
    justify-content: flex-start;
    gap: 0;

    flex-flow: column nowrap;
    background-color: rgb(0 0 0 / 90%);
    position: fixed;
    z-index: 1;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding: 4rem 2rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
