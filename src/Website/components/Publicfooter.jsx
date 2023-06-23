import React from "react";
import styled from "styled-components";
import {
  LikePlaylogo,
  facebook,
  instagram,
  twitter,
  youtube,
} from "../../Utils/images/Publichomeimg";
import footerdata from "../../Data/footerdata";
import { useNavigate } from "react-router-dom";
import { appstore, playstore } from "Utils/Images";
export default function Publicfooter() {
  const navigate = useNavigate();
  const MatchesDetailPage = (name) => {
    console.log(name, "nameeeee");
    if (name == "Contact Us") {
      window.location.href = "mailto:hello@likeplaylikeplay.com";
    }
    else if (name =="Press & Media"){
      window.location.href="mailto: press@likeplaylikeplay.com";

    }
    else if(name=="Support"){
      window.location.href="mailto:support@likeplaylikeplay.com";

    }
    else if(name=="Terms"){
      navigate("/Terms")
    }
    else if(name=="Help"){
      window.location.href="mailto:support@likeplaylikeplay.com";

    }
    else {
      navigate("/Safety", {
        state: {
          id: name,
        },
      });
    }
  };
  const Country = (name) => {
    navigate("/country", {
      state: {
        id: name,
      },
    });
  };

  const Footer = styled.footer`
    section {
      background-color: #242424;
      font-family: Poppins;
      font-weight: lighter;
      padding: 4rem;
      color: white;
      display: flex;
      flex-wrap: wrap;
      flex-grow: calc();
      align-items: center;
      justify-content: space-around;
      h2 {
        margin-bottom: 10px;
      }
      ul {
        list-style: none;
        li {
          margin: 12px 0;
          cursor: pointer;
          &:hover {
            color: rgb(255, 40, 90);
          }
        }
      }
      .list1 {
        width: 23%;
        img {
          margin-bottom: 1rem;
        }
      }
      .list5 {
        display: flex;
        flex-direction: column;
        margin-top: -2rem;
        gap: 4rem;
        .download-icons{
          display:flex;
          gap:10px;
        }
       
        

        }
        .social_logo{
          display:flex;
          gap:10px;
        }
        .copyright {
          position: relative;
          bottom: -50px;
          h5 {
            &:nth-of-type(2) {
              color: gray;
            }
          }
        }
      }
    }
    /*  Media quary for Smart Phone responsive  */

    @media (min-width: 320px) and (max-width: 480px) {
      section {
        padding: 4rem 1rem;
        .list1 {
          width: 100%;
          margin-bottom: 15px;
        }
        .list {
          width: 100%;
        }
        .list5 {
          margin-top: 3rem;
          width: 100%;
          img{
            width:50px;
            height:50px;
          }
          .social_logo{
            display: flex;
            gap:5px;
          }
          .copyright {
            bottom: 0px;
          }
         
        }
      }
    }
    /* media quary for Tablats responsive  */
    @media (min-width: 481px) and (max-width: 768px) {
      section {
        padding: 4rem 1rem;
        .list1 {
          width: 40%;
          margin-bottom: 15px;
        }
        .list {
          width: 37%;
        }
        .list5 {
          margin-top: 3rem;
          width: 86%;
          .copyright {
            bottom: 0px;
          }
        }
      }
    }
    /* media quary for laptop responsive  */
    @media (min-width: 769px) and (max-width: 1024px) {
      section {
        padding: 4rem 1rem;
        .list1 {
          width: 40%;
          margin-bottom: 15px;
        }
        .list {
          width: 37%;
        }
        .list5 {
          margin-top: 3rem;
          width: 86%;
          .copyright {
            bottom: 0px;
          }
        }
      }
    }
    /* media quary for large laptop responsive  */
    @media (min-width: 1025px) and (max-width: 1200px) {
      section {
        justify-content: space-between;
        padding: 4rem 1rem;
        .list1 {
          width: 40%;
          margin-bottom: 15px;
        }
        .list {
          width: 20%;
        }
        .list5 {
          margin-top: 3rem;
          width: 50%;
          .copyright {
            bottom: 0px;
          }
        }
      }
    }
  `;
  return (
    <>
      <Footer>
        <section>
          <div className="list1">
            <img src={LikePlaylogo} alt="" />
            <p>
              Get your true matches with our Character and Physical attributes
              to get a great chance at true love. Referring friends is a way to
              enjoy the experience.
            </p>
          </div>
          <div className="list">
            <h2>Our Company</h2>
            <ul>
              {" "}
              {footerdata.map((ele) => {
                return (
                  <>
                    {" "}
                    {ele.company &&
                      ele.company.map((e) => {
                        return (
                          <li onClick={() => MatchesDetailPage(e.page)}>
                            {e.page}{" "}
                          </li>
                        );
                      })}{" "}
                  </>
                );
              })}{" "}
            </ul>
          </div>
          <div className="list">
            <ul>
              {" "}
              {footerdata.map((ele) => {
                return (
                  <>
                    {" "}
                    {ele.terms &&
                      ele.terms.map((e) => {
                        return (
                          <li onClick={() => MatchesDetailPage(e.page)}>
                            {e.page}{" "}
                          </li>
                        );
                      })}{" "}
                  </>
                );
              })}{" "}
            </ul>
          </div>
          <div className="list">
            <h2>Countries</h2>
            <ul>
              {" "}
              {footerdata.map((ele) => {
                return (
                  <>
                    {" "}
                    {ele.coutry &&
                      ele.coutry.map((ele) => {
                        return (
                          <>
                            <li
                              onClick={() => Country(ele.conturyimageheading)}
                            >
                              {ele.conturyimageheading}{" "}
                            </li>
                          </>
                        );
                      })}{" "}
                  </>
                );
              })}{" "}
            </ul>
          </div>
          <div className="list5">
            <div>
              <h2>Follow us on</h2>
              <div className="social_logo">
                <a href="https://www.facebook.com/likeplaylikeplaydating/">

                <img src={facebook} alt="" />
                </a>
                  <a href="https://www.instagram.com/likeplaylikeplaydating_/"> 

                <img src={instagram} alt="" />
                  </a>
                <a href="https://twitter.com/LikePlaydating_">

                <img src={twitter} alt="" />
                </a>
                <a href="https://www.youtube.com/channel/UC4MLcFox6aZ8pDt7BrICJSQ">

                <img src={youtube} alt="" />
                </a>
              </div>
            </div>
            <div className="storeicons">
              <h2>Download App</h2>
              <div className="download-icons">
                <a href="https://play.google.com/store/apps/details?id=com.sfs.likeplay">
                  <img src={playstore} alt="" style={{ width: "120px" }} />
                </a>
                <a href="https://apps.apple.com/us/app/like-play-like-play/id6443514088">
                  <img src={appstore} alt="" style={{ width: "120px" }} />
                </a>
              </div>
            </div>

            <div className="copyright">
              <h5>WhatGodcannotdodoesnotexist</h5>
              <h5>copyright@likeplaylikeplay</h5>
            </div>
          </div>
        </section>
      </Footer>
    </>
  );
}
