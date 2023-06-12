import React from "react";
import styled from "styled-components";
// import { Logimg } from "../../Utils/RegistrationImg/Registrationflie";
// import secoundnavbar from "../../Data/Publicsecondnavbardata";
// import { NavLink, useNavigate } from "react-router-dom";

import Navbar from "./NavBar";

const ResHeaderComponent = () => {
  // navigate to another page with id match
  // const navigate = useNavigate();
  // const MatchesDetailPage = (name) => {
  //   navigate("/Safety", { state: { id: name } });
  // };

  return (
    <ResHeader>
      {/* <div className="Navber_header">
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
      </div> */}
      <Navbar/>
    </ResHeader>
  );
};

export default ResHeaderComponent;

const ResHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width : 100%; 

  // .Navber_header {
  //   width: 80%;
  //   margin: auto;
  //   display: grid;
  //   grid-template-columns: 20% 80%;
  //   align-items: center;
  //   padding: 1rem 0;
  // }

  // .imgLogheader {
  //   img {
  //     width: 4rem;
  //   }
  // }

  // .header_pages {
  //   display: flex;
  //   gap: 6rem;
  //   justify-content: end;
  //   color: white;
  // }
  // @media (min-width: 481px) and (max-width: 834px) {
  //   .header_pages {
  //     display: flex;
  //     gap: 2rem;
  //   }
  // }
  // .header_pages p {
  //   display: flex;
  //   font-size: larger;
  //   gap: 5px;
  //   cursor: pointer;
  //   &:hover {
  //     color: rgb(255, 72, 60);
  //   }
  // }
  // .header_pages a {
  //   color: white;
  //   text-decoration: none;
  //   display: flex;
  //   font-size: larger;
  //   gap: 5px;
  //   &:hover {
  //     color: rgb(255, 72, 60);
  //   }
  // }
`;