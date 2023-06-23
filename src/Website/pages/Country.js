import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Nigeria from "../../Data/contorydata";
import { whylikeheart } from "../../Utils/images/Publichomeimg";
import Publicfooter from "../components/Publicfooter";

export default function Country() {
  let location = useLocation();
  const id=location?.state?.id
  useEffect(()=>{
    window.scroll(0,0)
  },[id])
 
  

  const newArray = Nigeria.filter(
    (ele) => ele.conturyimageheading === location.state?.id
  );
  console.log(newArray);
  const Contorywrapper = styled.section`
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .top-heading {
        padding: 1rem 0 0rem;
        font-size: 1.5rem;
        text-align: center;
        font-family:poppins;
        font-weight:400;
      }
      .top-img {
        display: flex;
        flex-direction: column;
        align-items: center;
        letter-spacing:2px;
        position: relative;
        padding:10px 0px;
        h1 {
          font-size: 3rem;
          color: white;
          position: absolute;
          z-index:99;
          top: 10rem;
          font-weight: 500;
          font-family:poppins;

        }
        img {
          width: 90%;
          height:100%;
          position: relative;
        }
        @media(max-width:500px){
          h1{
            top:40%;
            font-size:1.5rem;
          }
        
        }
        @media(max-width:1000px){
          h1{
            top:40%;
            font-size:2rem;
          }
        }
      }
      .paragraph {
        padding: 2rem 0;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        .para {
          display: flex;
          align-items: start;
          gap: 10px;
          color: #484848;
          font-family:poppins;
          width: 77%;
          img {
            position: relative;
            top: 3px;
          }
        }
      }
      .imges {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        gap: 12px;
        padding: 2rem 0;
        justify-content: center;
        img {
          width: 300px;
        }
        .para1_img2 {
          position: relative;
          bottom: -2rem;
        }
      }
    }
  `;
  return (
    <>
      <Contorywrapper>
        <section>
          {newArray.map((ele) => {
            return (
              <>
                <div className="top-heading">
                  <h2>{ele.contury}</h2>
                  <h1>{ele.conturyname}</h1>
                </div>
                <div className="top-img">
                  <h1>{ele.conturyimageheading}</h1>
                  <img src={ele.conturyimage} alt="" />
                </div>
                <div className="paragraph">
                  {ele.paragraph1 &&
                    ele.paragraph1.map((e) => {
                      return (
                        <>
                          <div className="para">
                            <img src={whylikeheart} alt="" />
                            <p>{e}</p>
                          </div>
                        </>
                      );
                    })}
                </div>
                <div className="imges part1">
                  <img src={ele.part1img1} alt="" />
                  <img src={ele.part1img2} alt="" />
                  <img src={ele.part1img3} alt="" />
                  <img src={ele.part1img4} alt="" />
                  <img src={ele.part1img5} alt="" />
                </div>
                <div className="paragraph">
                  {ele.paragraph2 &&
                    ele.paragraph2.map((e) => {
                      return (
                        <>
                          <div className="para">
                            <img src={whylikeheart} alt="" />
                            <p>{e}</p>
                          </div>
                        </>
                      );
                    })}
                </div>
                <div className="imges part1">
                  <img src={ele.part2img1} alt="" />
                  <img src={ele.part2img2} alt="" className="para1_img2" />
                  <img src={ele.part2img3} alt="" />
                  <img src={ele.part2img4} alt="" />
                  <img src={ele.part2img5} alt="" />
                </div>
                <div className="paragraph">
                  {ele.paragraph3 &&
                    ele.paragraph3.map((e) => {
                      return (
                        <>
                          <div className="para">
                            <img src={whylikeheart} alt="" />
                            <p>{e}</p>
                          </div>
                        </>
                      );
                    })}
                </div>

                <div className="imges part1">
                  <img src={ele.part3img1} alt="" />
                  <img src={ele.part3img2} alt="" />
                  <img src={ele.part3img3} alt="" />
                </div>
                <div className="paragraph">
                  {ele.paragraph4 &&
                    ele.paragraph4.map((e) => {
                      return (
                        <>
                          <div className="para">
                            <img src={whylikeheart} alt="" />
                            <p>{e}</p>
                          </div>
                        </>
                      );
                    })}
                </div>
              </>
            );
          })}
        </section>
      </Contorywrapper>

      {/* --------------------------Footer------------------- */}
      <Publicfooter />
    </>
  );
}
