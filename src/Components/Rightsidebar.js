import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userprofile } from "../Utils/Images";
import { AiOutlineRight } from "react-icons/ai";
import { Switch } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

export default function Rightsidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState(true);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  useEffect(() => {
    if (location.pathname === "/Layout/MyProfile") {
      setPath(false);
    } else {
      setPath(true);
    }
  }, [location]);
  return (
    <Rightsidebarwrapper>
      {path?<> <Profilesection>
        <div>
          <p className="My_profile">My Profile</p>
          <div
            className="profile_section"
            onClick={() => navigate("/Layout/MyProfile")}
          >
            <img src={userprofile} alt="" height={50} />
            <p>Logan Lerman</p>
            <AiOutlineRight />
          </div>
        </div>
      </Profilesection>
      <Messagessection>
        <p className="messages_text">Messages</p>
        <div>
          <div className="messages_user">
            <img src={userprofile} alt="" height={40} />
            <p>Julia Roberts</p>
          </div>
          <div className="messages_user">
            <img src={userprofile} alt="" height={40} />
            <p>Julia Roberts</p>
          </div>
          <div className="messages_user">
            <img src={userprofile} alt="" height={40} />
            <p>Julia Roberts</p>
          </div>
        </div>
      </Messagessection></>:
      <>
       <Userinfo>
        <div>
          <div className="user-details">
            <p className="left-section">Member Since</p>
            <p className="right-section"> Jan 7, 2023 </p>
          </div>
          <div className="user-details">
            <p className="left-section">Lost Active</p>
            <p className="right-section"> Jan 30,2023 </p>
          </div>
          <div className="user-details">
            <p className="left-section">Location</p>
            <p className="right-section"> Nigeria, Abuj </p>
          </div>
          <div className="user-details">
            <p className="left-section">Verification</p>
            <p className="right-section"> Verified </p>
          </div>
        </div>
      </Userinfo>
      <Introduce>
        <p>introduce on the floor</p>
        <Switch defaultChecked onChange={onChange} />
      </Introduce>
      </>}
     
     
    </Rightsidebarwrapper>
  );
}
const Rightsidebarwrapper = styled.div`
  padding: 10px;
`;
const Profilesection = styled.div`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  color: #242424;
  .profile_section {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .My_profile {
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 14px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

const Messagessection = styled.div`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  color: #242424;
  margin: 10px 0px;

  .messages_text {
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 14px;
  }
  .messages_user {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 5px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;
const Userinfo = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  .user-details {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .left-section {
      color: #7b7f91;
      font-size: 12px;
    }
    .right-section {
      color: #242424;
      font-size: 12px;
    }
  }
`;
const Introduce = styled.div`
  padding: 10px;
  margin: 20px 0px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: #242424;
    letter-spacing: 1px;
  }
`;
