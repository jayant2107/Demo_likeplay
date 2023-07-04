import React, { useEffect, useState } from "react";

import styled from "styled-components";

import FeedAboutUserProfile from "./UserAbout";
import { getProfileView } from "Services/collection";
import { useLocation } from "react-router-dom";
import UserPostCard from "./UserPostCard";
import UserPosts from "./UserPosts";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { info } from "Redux/SliceOfRedux/Userinfo";
import Loader from "Components/Loader";

let userProfile_tabs = [
  {
    name: "shots",
    label: "Shots",
  },
  {
    name: "aboutme",
    label: "About me",
  },
];

export default function Userdetails() {
  const [active, setActive] = useState("aboutme");
  const [Data, setData] = useState([]);
  const location = useLocation();
  const user_id = location.state;
  const dispatch = useDispatch();
  const [loading, setloading] = useState();

  let profile_image = process.env.REACT_APP_BASEURL_IMAGE;

  let tabScreen = {
    shots: (
      <UserPosts
        data={Data?.Posts}
        profileimg={Data?.user_images_while_signup}
        name={Data?.name}
      />
    ),
    aboutme: <FeedAboutUserProfile data={Data} />,
  };
  const getprofiledetails = async () => {
    setloading(true)
  
    const req = await getProfileView(user_id);
    if (req?.status === 200) {
      setData(req?.data);
      dispatch(info(req?.data));
      setloading(false)
    } else {
      toast.error(req?.message || "Couldn't get profile");
      setloading(false)
    }
  };
  useEffect(() => {
    getprofiledetails();
  }, []);
  console.log(Data, "dataa");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <LoginProfileCss>
            <div className="imgDiv">
              {Data?.user_images_while_signup?.length > 0 && (
                <img
                  src={
                    profile_image + Data?.user_images_while_signup[0]?.image_url
                  }
                  alt="pic"
                />
              )}
            </div>
            <div className="detailsDiv">
              <div className="username">{Data?.user_name}</div>
              <div className="userdata">
                <span>{Data?.age}</span>
                <span className="spanDot"></span>
                <span>{Data?.gender === "0" ? "Male" : "Female"}</span>
                <span className="spanDot"></span>
                <span>{Data?.looking_for}</span>
              </div>
              <div className="userdata">{Data?.city}</div>
            </div>
          </LoginProfileCss>
          <FeedMyProfileCss>
            <div className="navDiv">
              {userProfile_tabs?.map((list, index) => (
                <span
                  key={index}
                  className={`${
                    active === list?.name ? "active" : "navButton"
                  }`}
                  onClick={() => setActive(list?.name)}
                >
                  {list?.label}
                </span>
              ))}
            </div>
            {tabScreen[active]}
          </FeedMyProfileCss>
        </>
      )}
    </>
  );
}

export const LoginProfileCss = styled.div`
  width: 100%;
  height: 125px;
display:flex;
  border-bottom: 1px solid #e2e2e2;
  gap: 15px;
  padding: 20px;

  .imgDiv {
    height: 86px;
    width:86px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    @media(max-width:420px){
      height:50px;
      width:50px;
    }
  }
  .detailsDiv {
    height: 86px;
    position: relative;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
  }
  .editIcon {
    position: absolute;
    top: 0;
    right: 0;
  }
  .username {
    font-size: 25px;
    line-height: 35px;
    letter-spacing: 0.05em;
    color: #242424;
    @media(max-width:500px){
      font-size:16px;
    }
  }
  .userdata {
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #7b7f91;
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 2px 0;

    .spanDot {
      border: 1px solid black;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #242424;
    }
  }
`;
export const FeedMyProfileCss = styled.div`
  height: auto;
  padding: 1rem;
  font-family: "Poppins", sans-serif;

  .navDiv {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navButton {
    margin: 0 0.5rem;
    background-color: white;
    border: 1px solid white;
    color: #7b7f91;
    cursor: pointer;
    font-size: 14px;
  }
  .active {
    padding: 0.2rem 0.4rem;
    color: #242424;
    font-size: 14px;
    margin: 0 0.5rem;
    background-color: white;
    color: #7b7f91;
    cursor: pointer;
    border-bottom: 2px solid #f04142;
  }
`;
