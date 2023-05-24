import React from "react";
import styled from "styled-components";
import { Logimg } from "../../Utils/RegistrationImg/Registrationflie";
import secoundnavbar from "../../Data/Publicsecondnavbardata";
import { NavLink, useNavigate } from "react-router-dom";
const ResHeader = styled.div`
  color: white;
  align-items: center;
  display: flex;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem 0px;
  gap: 17rem;
  .imgLogheader img {
    width: 4rem;
  }

  .header_pages {
    display: flex;
    gap: 74px;
  }
  .header_pages p {
    display: flex;
    font-size: larger;
    gap: 5px;
    cursor: pointer;
    &:hover {
      color: rgb(255, 72, 60);
    }
  }
  .header_pages a {
    color: white;
    text-decoration: none;
    display: flex;
    font-size: larger;
    gap: 5px;
    &:hover {
      color: rgb(255, 72, 60);
    }
  }
`;

const ResHeaderComponent = () => {
  // navigate to another page with id match
  const navigate = useNavigate();
  const MatchesDetailPage = (name) => {
    navigate("/Safety", { state: { id: name } });
  };

  return (
    <div className="Navber_header">
      <ResHeader>
        <div className="imgLogheader">
          <img src={Logimg} alt="ff"></img>
        </div>
        <div className="header_pages">
          <NavLink to="/">Home</NavLink>
          {secoundnavbar.map((ele) => {
            return (
              <p onClick={() => MatchesDetailPage(ele.page)}>{ele.page}</p>
            );
          })}
        </div>
      </ResHeader>
    </div>
  );
};

export default ResHeaderComponent;
