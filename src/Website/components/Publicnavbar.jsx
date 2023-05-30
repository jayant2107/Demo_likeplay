import React, { useState } from "react";
import styled from "styled-components";
import navbarlist from "../../Data/navbardata";
// import { LikePlaylogo } from "../Utils/images/Publichomeimg";
import {
  LikePlaylogo,
  hamburgericon,
  crossicon,
} from "../../Utils/images/Publichomeimg";
import { useNavigate } from "react-router-dom";
const Navbar = styled.nav`
  /* hamburger css  */
  .hamburger {
    display: none;
    position: fixed;
    top: 0;
    left: 0px;
    width: 100%;
    height: 100vh;
    z-index: 6;
    overflow: hidden;
    background-color: white;
    scroll-behavior: none;
    /* transition: 3s ease-in-out; */
    .cross {
      position: absolute;
      right: 20px;
      top: 20px;
      img {
        width: 40px;
      }
    }
    .right_content {
      /* align-items: center !important; */
      /* position: absolute;
      left: 10%;
      top: 10%; */
      ul {
        display: flex;
        flex-direction: column;
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
  .open {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 400;
    width: 100%;
    height: 100vh;
    z-index: 6;
    overflow: hidden;
    background-color: white;
    scroll-behavior: none;
    ul {
      li {
        color: black;
      }
    }
  }
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
      img {
        display: none;
        width: 40px;
        height: 40px;
      }
    }
  }

  /* media quary for Smart Phones responsive  */

  @media (min-width: 320px) and (max-width: 480px) {
    .nav {
      gap: 8rem;
      img {
        width: 50px;
      }
      .right_content {
        ul {
          display: none;
        }
        img {
          display: block !important;
        }
      }
    }
  }

  /* media quary for Tablats responsive  */
  @media (min-width: 481px) and (max-width: 768px) {
    .nav {
      img {
        width: 50px;
      }
      .right_content {
        ul {
          display: none;
        }
        img {
          display: block !important;
        }
      }
    }
  }
  /* media quary for laptop responsive  */
  @media (min-width: 769px) and (max-width: 1024px) {
    .nav {
      img {
        width: 50px;
      }
      .right_content {
        ul {
          display: none;
        }
        img {
          display: block !important;
        }
      }
    }
  }
`;

export default function Publicnavbar() {
  // hamburger logic
  const [isOpen, setIsOpen] = useState(false);

  const hamburger = () => {
    setIsOpen(!isOpen);
  };

  // navigate to another page with id match 
  const navigate = useNavigate();
  const MatchesDetailPage = (name) => {
    navigate("/Safety", { state: { id: name } });
  };
  return (
    <>
      <Navbar>
        {/* hamburger */}
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <div className="cross">
            <img src={crossicon} alt="" onClick={hamburger} />
          </div>
          <div className="right_content">
            <ul>
              <img src={LikePlaylogo} alt="" />
              {navbarlist.map((ele) => {
                return (
                  <>
                    <li onClick={() => MatchesDetailPage(ele.page)}>
                      {ele.page}
                    </li>
                  </>
                );
              })}

              <div className="btn_div">
                <button className="btn1" onClick={() => navigate("/login")}>
                  Login
                </button>
                <button className="btn2">Join Now</button>
              </div>
            </ul>
          </div>
        </div>
        <div className="nav">
          <img src={LikePlaylogo} alt="" />
          <div className="right_content">
            <ul>
              {navbarlist.map((ele) => {
                return (
                  <>
                    <li onClick={() => MatchesDetailPage(ele.page)}>
                      {ele.page}
                    </li>
                  </>
                );
              })}

              <div className="btn_div">
              

                <button className="btn1"  onClick={()=>navigate("/login")}>
                  Login 
                </button>
              
              <a href='https://delta.likeplaylikeplay.com/#/'>

                <button className="btn2"  >Join Now</button>
             
              </a>
              </div>
            </ul>
            <img src={hamburgericon} alt="" onClick={hamburger} />
          </div>
        </div>
      </Navbar>
    </>
  );
}
