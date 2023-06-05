import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userprofile } from "../Utils/Images";
import { AiOutlineRight } from "react-icons/ai";
import { Switch } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SecondUser,
  ThirdUser,
  fourthUser,
} from "../Utils/SettingImgaes/SettingP";
import { useSelector } from "react-redux";
import moment from "moment";
import {NoRecords} from "Style/comman_Css"
import { ShowuserOnFloor } from "Services/collection";
import { toast } from "react-toastify";

const messages = [
  {
    image: SecondUser,
    name: "Julia Roberts",
  },
  {
    image: ThirdUser,
    name: "emmy",
  },
  {
    image: fourthUser ,
    name: "ronny",
  },
];

export default function Rightsidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginPerson,setloginPerson]=useState()
  const [path, setPath] = useState(true);
  const login = useSelector((e) => e.LoginSlice.data);
  const userdetail=useSelector((e)=>e.Userinfo.data)
  const user_id=useSelector((e)=>e.Userinfo.data.id)
  const reduxdata=useSelector((e)=>e)
  console.log(reduxdata,"rrrrr")
  let profile_image =
    process.env.REACT_APP_BASEURL_IMAGE +
    login?.user_images_while_signup[0]?.image_url;

  const onChange = async(checked) => {
    let res={
      "floor_status":checked,
      
    }
   
   let req=await ShowuserOnFloor(res)

   if(req?.status==200){
    toast.success(req?.message || "Status updated ")
   }
   else{
    toast.error(req?.message || "Error")
   }
  };

 

  useEffect(() => {
    if (location.pathname === "/Layout/MyProfile" ) {
      setPath(false);
      setloginPerson(login)
    }
    else if(location.pathname==='/Layout/Userdetails'){
      setPath(false)
      setloginPerson(userdetail)

    }
    
    else {
      setPath(true);
    }
  }, [location,user_id]);

  
  
  


  return (
    <Rightsidebarwrapper>
      {path ? (
        <>
          {" "}
          <Profilesection>
            <div>
              <p className="My_profile">My Profile</p>
              <div
                className="profile_section"
                onClick={() => navigate("/Layout/MyProfile")}
              >
                <img src={profile_image} alt="" height={50} />
                <p>{login?.user_name}</p>
                <AiOutlineRight />
              </div>
            </div>
          </Profilesection>
          <Messagessection>
            <p className="messages_text">Messages</p>
              {messages.length ? (
                <>
                  {messages.map((list, index) => (
                    <div key={index} className="messages_user">
                      <img src={list.image} alt="" height={40} />
                      <p>{list.name}</p>
                    </div>
                  ))}
                </>
              ) : (
                <NoRecords height={"100px"}>No Record!</NoRecords>
              )}              
          </Messagessection>
        </>
      ) : (
        <>
          <Userinfo>
            <div>
              <div className="user-details">
                <p className="left-section">Member Since</p>
                <p className="right-section">
                  {moment(loginPerson?.createdAt)
                    .local()
                    .format("DD MMMM, YYYY")}
                </p>
              </div>
              <div className="user-details">
                <p className="left-section">Lost Active</p>
                <p className="right-section">
                  {moment(loginPerson?.active_at)
                    .local()
                    .format("DD MMMM, YYYY")}
                </p>
              </div>
              <div className="user-details">
                <p className="left-section">Location</p>
                <p className="right-section">
                  {loginPerson?.residence_country}
                </p>
              </div>
              <div className="user-details">
                <p className="left-section">Verification</p>
                <p className="right-section">
                  {" "}
                  {loginPerson?.user_verification === "0"
                    ? "Verified"
                    : "Unverified"}{" "}
                </p>
              </div>
            </div>
          </Userinfo>
          {location.pathname==='/Layout/MyProfile' &&   <Introduce>
            <p>introduce on the floor</p>
            <Switch defaultChecked onChange={onChange} />
          </Introduce>}
        
        </>
      )}
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
    padding: 10px 0px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  img {
    border-radius: 50px;
    height: 40px;
    width: 40px;
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
    padding: 10px 0px;
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
