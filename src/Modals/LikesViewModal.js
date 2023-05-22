import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { likesView } from "../Utils/images/Modalsimg";
import { likesView2, likesView3 } from "../Utils/images/Modalsimg";
import { exit } from "../Utils/icons-folder/Modalsicons";

export default function LikesViewModal() {
  const [likedData, setLikedData] = useState([]);

  useEffect(() => {
    setLikedData(Liked);
  }, []);

  return (
    <>
      <StyledLikesModal>
        <div className="modal">
          <div className="modal-container">
            <div className="modal-content">
            <div className="delete-icon">
                <img src={exit} alt="exit" id="exit" />
              </div>
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
                    {likedData.map((likes) => {
                      return (
                        <>
                          <div className="like-content">
                            <div className="liked-people">
                              <div className="pic">
                                <img src={likes.photo} alt="likes"></img>
                              </div>
                              <div className="name">{likes.name}</div>
                            </div>
                          </div>
                        </>
                      );
                    })}
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

  .delete-icon {
    width: 24px;
    height: 24px;
    color: green;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    top: -25px;
    right: 0px;
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

  .liked-people {
    display: flex;
    width: 42%;
    justify-content: space-evenly;
    margin-bottom: 10px;
  }

  .name {
    margin: auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  /******** MODAL HERO-SECTION ENDS ********/
`;

export const Liked = [
  {
    photo: likesView,
    name: "Julia Roberts",
  },
  {
    photo: likesView2,
    name: "Natalie Portman",
  },
  {
    photo: likesView3,
    name: "Marilyn Monroe",
  },
];
