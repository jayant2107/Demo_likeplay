import React, { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import footercontentdata from "../../Data/footercontentdata";
import { footerbg, footerheart } from "../../Utils/images/Publichomeimg";
import Publicfooter from "../components/Publicfooter";
import ResHeaderComponent from "../../Auth/RegistrationPage/ResHeader";

export default function Footercontent() {
  let location = useLocation();
  console.log(location,"lll");
  let footerContent = footercontentdata.filter(
    (ele) => ele.page === location.state.id
  );
  console.log(footerContent);

  // page start on the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  // ----------------------------styleing--------------------------
  const Footercontent = styled.section`
    section {
      position: relative;
      z-index: -2;
      margin-top: -92px;
      width: 100%;
      height: 100vh;
      background-image: url(${footerbg});
      background-repeat: no-repeat;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-size:cover;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(
          0,
          0,
          0,
          0.8
        ); /* Adjust the alpha value to control the darkness */
        z-index: -1;
      }
      .head {
        margin-top: 5rem;
        font-family: "Oregano", cursive;
        letter-spacing:0.05em;
        line-height:45px;
        margin-bottom: 1rem;
        text-align: center;
        .heading2{
          font-size:30px;
          font-family:"Poppins"
        }
        .heading1{
          font-size:40px;
          font-weight:500;
          font-family:"Poppins";
          padding:10px 0px;
        }
      }
      .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: start;
        width: 70%;
        text-align: center;
        margin-bottom: 1rem;
        gap: 5px;
        z-index: 1;
        img {
          position: relative;
          top: 2px;
        }
        p {
          font-size: 13px;
          font-family: poppins;
          font-weight: 300;
          color: white;
        }
      }
    }
  `;

  return (
    <>
      <Footercontent>
        <ResHeaderComponent />
        <section>
          {footerContent.map((ele) => {
            return (
              <>
                <div className="head">
                  <p className="heading1">{ele.page}</p>
                  <p className="heading2">{ele.heading}</p>
                </div>
                {ele.paragraph.map((e) => {
                  return (
                    <>
                      <div className="content">
                        <img src={footerheart} alt="" />
                        <p>{e}</p>
                      </div>
                    </>
                  );
                })}
              </>
            );
          })}
        </section>
      </Footercontent>
      <Publicfooter />
    </>
  );
}
