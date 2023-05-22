import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import footercontentdata from "../../Data/footercontentdata";
import { footerbg, whylikeheart } from "../../Utils/images/Publichomeimg";

export default function Footercontent() {
  let location = useLocation();
  console.log(location);
  let footerContent = footercontentdata.filter(
    (ele) => ele.page === location.state.id
  );
  console.log(footerContent);

  // ----------------------------styleing--------------------------
  const Footercontent = styled.section`
    section {
      position: relative;
      z-index: -2;
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
        font-family: "Oregano", cursive;
        font-size: 1.3rem;
        line-height: 3rem;
        margin-bottom: 1rem;
        text-align: center;
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
        <section>
          {footerContent.map((ele) => {
            return (
              <>
                <div className="head">
                  <h2>{ele.page}</h2>
                  <h2>{ele.heading}</h2>
                </div>
                {ele.paragraph.map((e) => {
                  return (
                    <>
                      <div className="content">
                        <img src={whylikeheart} alt="" />
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
    </>
  );
}
