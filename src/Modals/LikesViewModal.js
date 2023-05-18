import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { likesView } from "../Utils/images/Modalsimg";

export default function LikesViewModal() {
  const [likedData, setLikedData] = useState([]);

  useEffect(() => {
    setLikedData(Liked);
  }, []);

  return (
   
    <>
     {likedData.map((likes)=>{
    console.log("like",likes.name)
      
})}
      <StyledLikesModal>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="content-container">
                {/******* MODAL HEADER-SECTION STARTS ********/}

                <div className="modal-head">
                  <div className="heading">Likes</div>
                </div>
              </div>
              {/******* MODAL HEADER-SECTION ENDS ********/}

              {/***** DIVIDER STARTS *****/}

              <div className="divider">
                <hr />
              </div>

              {/****** DIVIDER ENDS ******/}

              <div className="content-container">
                {/******* MODAL HERO-SECTION STARTS ********/}

                <div className="modal-hero-section">
                  <div className="hero-content">
                    <div className="liked-people">
                      <div className="pic">
                        <img src={likesView} alt="likes"></img>
                      </div>
                      <div className="name">Julia Roberts</div>
                    </div>
                  </div>
                </div>

                {/******** MODAL HERO-SECTION ENDS ********/}
              </div>
            </div>
          </div>
        </div>
      </StyledLikesModal>
    </>
  );
}

export const StyledLikesModal = styled.div`
  .modal-container {
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }

  .modal-content {
    width: 27%;
    border: 1px solid transparent;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 20px 0px;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content-container {
    padding: 12px;
  }

  /******* MODAL HEADER-SECTION STARTS ********/

  .heading {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }

  /******* MODAL HEADER-SECTION ENDS ********/

  /******** DIVIDER-SECTION STARTS ********/

  hr {
    border: 1px solid #e2e2e2;
  }

  /********* DIVIDER-SECTION ENDS ********/

  /******* MODAL HERO-SECTION STARTS ********/

  .hero-content {
    display: flex;
    justify-content: flex-start;
  }

  .liked-people {
    display: flex;
    width: 40%;
    justify-content: space-evenly;
  }

  .name {
    margin: auto;
  }

  /******** MODAL HERO-SECTION ENDS ********/
`;

export const Liked = [
  {
    photo: likesView,
    name: "Julia Roberts",
  },
  {
    photo: likesView,
    name: "Natalie Portman",
  },
  {
    photo: likesView,
    name: "Marilyn Monroe",
  },
];