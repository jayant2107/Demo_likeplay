import React from "react";
import styled from "styled-components";
import { LikePlaylogo } from "../Utils/images/Publichomeimg";
export default function Publicnavbar2() {
  const Navwrapper = styled.section`
    background: transparent;
    padding: 1rem;
    nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .left {
        img {
          width: 70px;
        }
      }
      .right {
        ul {
          display: flex;
          list-style: none;
          li {
            font-size: 1.2rem;
            margin: 20px;
            &:hover {
              color: red;
            }
          }
        }
      }
    }
  `;
  return (
    <>
      <Navwrapper>
        <nav>
          <div className="left">
            <img src={LikePlaylogo} alt="" />
          </div>
          <div className="right">
            <ul>
              <li>Home000</li>
              <li>About us</li>
              <li>Help</li>
              <li>Contect us</li>
            </ul>
          </div>
        </nav>
      </Navwrapper>
    </>
  );
}
