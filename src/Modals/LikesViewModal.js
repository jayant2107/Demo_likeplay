import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { likesView } from "../Utils/images/Modalsimg";
import { likesView2, likesView3 } from "../Utils/images/Modalsimg";
// import { exit } from "../Utils/icons-folder/Modalsicons";

// export default function LikesViewModal() {
//   const [likedData, setLikedData] = useState([]);

//   useEffect(() => {
//     setLikedData(Liked);
//   }, []);

//   return (
//     <>
//       <StyledLikesModal>
//         <div className="modal">
//           <div className="modal-container">
//             <div className="modal-content">
//             <div className="delete-icon">
//                 <img src={exit} alt="exit" id="exit" />
//               </div>
//               <div className="content-container">
//                 {/******* MODAL HEADER-SECTION STARTS ********/}

//                 <div className="modal-head">
//                   <div className="heading">Likes</div>
//                 </div>
//               </div>
//               {/******* MODAL HEADER-SECTION ENDS ********/}

//               {/***** DIVIDER STARTS *****/}

//               <div className="divider">
//                 <hr />
//               </div>

//               {/****** DIVIDER ENDS ******/}

//               <div className="content-container">
//                 {/******* MODAL HERO-SECTION STARTS ********/}

//                 <div className="modal-hero-section">
//                   <div className="hero-content">
//                     {likedData.map((likes) => {
//                       return (
//                         <>
//                           <div className="like-content">
//                             <div className="liked-people">
//                               <div className="pic">
//                                 <img src={likes.photo} alt="likes"></img>
//                               </div>
//                               <div className="name">{likes.name}</div>
//                             </div>
//                           </div>
//                         </>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/******** MODAL HERO-SECTION ENDS ********/}
//               </div>
//             </div>
//           </div>
//         </div>
//       </StyledLikesModal>
//     </>
//   );
// }

export const StyledLikesModal = styled.div`
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

  .modal-hero-section {
    margin-top: 15px;
}

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

export default function LikesViewModal() {
  const [likedData, setLikedData] = useState([]);

  useEffect(() => {
    setLikedData(Liked);
  }, []);

  return (
    <>
      <StyledLikesModal>
        {/******* MODAL HEADER-SECTION STARTS ********/}

        <div className="modal-head">
          <div className="heading">Likes</div>
        </div>

        {/******* MODAL HEADER-SECTION ENDS ********/}

        {/***** DIVIDER STARTS *****/}

        <div className="divider">
          <hr />
        </div>

        {/****** DIVIDER ENDS ******/}

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
      </StyledLikesModal>
    </>
  );
}
