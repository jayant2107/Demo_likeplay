import React from "react";
import styled from "styled-components";
import { LikePlaylogo } from "../../Utils/images/Publichomeimg";
import { useNavigate } from "react-router-dom";
const Navbar = styled.nav`
  .nav {
    /* position: fixed; */
    width: 100%;
    /* top: 0; */
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-around;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    background: linear-gradient(
      110.97deg,
      rgba(255, 255, 255, 0.3) -4.87%,
      rgba(255, 255, 255, 0) 103.95%
    );
    img {
      height: 60px;
    }
    .right_content {
      ul {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        list-style: none;
        li {
          font-size: 1rem;
          cursor: pointer;
          &:hover {
            color: #ff2c5a;
          }
        }
      }
      .btn_div {
        border-left: 1.5px solid rgba(0, 0, 0, 0.29);
        height: 76px;
        button {
          width: 127px;
          height: 49.2px;
          border-radius: 10px;
          border: none;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
        .btn1 {
          margin: 1rem;
          background-color: #181818;
        }
        .btn2 {
          background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
        }
      }
    }
  }
`;

export default function Publicnavbar() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar>
        <div className="nav">
          <img src={LikePlaylogo} alt="" />
          <div className="right_content">
            <ul>
              <li>About Us</li>
              <li>Features</li>
              <li>How it Works</li>
              <li>Safety</li>
              <div className="btn_div">
                <button className="btn1" onClick={() => navigate("/login")}>
                  Login
                </button>
                <button className="btn2">Join Now</button>
              </div>
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
}
