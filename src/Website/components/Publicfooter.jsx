import React from "react";
import styled from "styled-components";
import {
  LikePlaylogo,
  linkedin,
  facebook,
  instagram,
  twitter,
  youtube,
} from "../../Utils/images/Publichomeimg";
import footerdata from "../../Data/footerdata";
import { useNavigate } from "react-router-dom";
export default function Publicfooter() {
  const navigate = useNavigate();
  const MatchesDetailPage = (name) => {
    navigate("/Safety", { state: { id: name } });
  };
  const Country = (name) => {
    navigate("/Nigeria", { state: { id: name } });
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
        img {
          margin: 2px;
          cursor: pointer;
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
              {footerdata.map((ele) => {
                return (
                  <>
                    {ele.company &&
                      ele.company.map((e) => {
                        return (
                          <li onClick={() => MatchesDetailPage(e.page)}>
                            {e.page}
                          </li>
                        );
                      })}
                  </>
                );
              })}
            </ul>
          </div>
          <div className="list">
            <ul>
              {footerdata.map((ele) => {
                return (
                  <>
                    {ele.terms &&
                      ele.terms.map((e) => {
                        return (
                          <li onClick={() => MatchesDetailPage(e.page)}>
                            {e.page}
                          </li>
                        );
                      })}
                  </>
                );
              })}
            </ul>
          </div>
          <div className="list">
            <h2>Countries</h2>
            <ul>
              {footerdata.map((ele) => {
                return (
                  <>
                    {ele.coutry &&
                      ele.coutry.map((ele) => {
                        return (
                          <>
                            <li
                              onClick={() => Country(ele.conturyimageheading)}
                            >
                              {ele.conturyimageheading}
                            </li>
                          </>
                        );
                      })}
                  </>
                );
              })}
            </ul>
          </div>
          <div className="list5">
            <div>
              <h2>Follow us on</h2>
              <div className="social_logo">
                <img src={linkedin} alt="" />
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
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
