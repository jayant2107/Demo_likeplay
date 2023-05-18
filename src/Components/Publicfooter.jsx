import React from "react";
import styled from "styled-components";
import {
  LikePlaylogo,
  linkedin,
  facebook,
  instagram,
  twitter,
  youtube,
} from "../Utils/images/Publichomeimg";
export default function Publicfooter() {
  const Footer = styled.footer`
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
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
            background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
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
        gap: 4rem;
        img {
          margin: 2px;
          cursor: pointer;
        }
        .copyright {
          position: relative;
          bottom: -30px;
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
              <li>About Us</li>
              <li>Support</li>
              <li>Press & Media</li>
              <li>Contact Us</li>
              <li>Anti-Sex Trafficking</li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>Women’s Rights</li>
              <li>Terms</li>
              <li>Our Refund policy</li>
            </ul>
          </div>
          <div className="list">
            <h2>Countries</h2>
            <ul>
              <li>Nigeria</li>
              <li>Ghana</li>
              <li>Congo</li>
              <li>South Africa</li>
              <li>Cote D'Ivoire.</li>
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
