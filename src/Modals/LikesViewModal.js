import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { likesView } from "../Utils/images/Modalsimg";
import { likesView2, likesView3 } from "../Utils/images/Modalsimg";
import { getLikedetails } from "Services/collection";
import Loader from "Components/Loader";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";


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
    align-items:center;
    margin-bottom: 10px;
    .likesimg{
      width: 40px;
      height:40px;
      border-radius:50%;
    }
  
  }

  .name {
    padding:0px 10px;
    letter-spacing:1px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  
  /******** MODAL HERO-SECTION ENDS ********/
`;
const LoaderWrapper = styled.div`
  height: 80%;
  width: 100%;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
 
  
`;



export default function LikesViewModal({postid,listtype}) {
  const [likepostdata,setlikepostdata]=useState()
  console.log(listtype,"postid")
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 30,
        color:'red'
      }}
      spin
    />
  );

  const [loading,setLoading]=useState(false)
  const getlikeslist=async(post_id)=>{
    setLoading(true)
    const res= await getLikedetails(postid,listtype)
    if(res?.status===200){
      setlikepostdata(res?.data)
      setLoading(false)


    }
    else{
      setLoading(false)

    }
  }
  console.log(likepostdata,"likee")

  useEffect(() => {
   getlikeslist()
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
        {loading?(
          <LoaderWrapper>
          <Spin indicator={antIcon} />
       </LoaderWrapper>
          
        ):(  <div className="modal-hero-section">
        <div className="hero-content">
          {likepostdata?.map((likes) => {
            const image =process.env.REACT_APP_BASEURL_IMAGE +likes?.likeDetails?.user_images_while_signup[0]?.image_url
            const name=likes?.likeDetails?.name
            const value=likes
            console.log(image,"name")

            return (
              <>
                <div className="like-content">
                  <div className="liked-people">
                    <div className="pic">
                      <img  src={image} className="likesimg"alt="likes"/>
                    </div>
                    <div className="name">{name}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
)}

      
        {/******** MODAL HERO-SECTION ENDS ********/}
      </StyledLikesModal>
    </>
  );
}
