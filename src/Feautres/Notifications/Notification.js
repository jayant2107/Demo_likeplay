import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Homecouple } from "../../Utils/images/Publichomeimg";
import { clearNotifications, getnotificationList } from "Services/collection";
import { toast } from "react-toastify";
import Loader from "Components/Loader";
import moment from "moment";
import {  Modal } from 'antd';
import { AiOutlineWarning } from "react-icons/ai";



export default function Notification() {
  const[loading,setloading]=useState()
  const [notificationlist,setnotificationlist]=useState([]);
  const [openmodal,setopenmodal]=useState(false)
  const getdate=(time)=>{
    const date=moment(time).format("DD MMMM YYYY")
    return date
  }
  const clearAllNotifications=async()=>{
   
    const req=await clearNotifications()
    if(req?.status==200){
      toast.success(req?.message || "notifications deleted successfully")
      setopenmodal(false)
    }
    else{
      setopenmodal(false)
      console.log(req)
      toast.error(req?.message || "something went wrong")
    }
  }
  const showModal=()=>{
    setopenmodal(true)
  }


  const notificationsListing=async()=>{
    setloading(true)
    const req=await getnotificationList()
    if(req?.status===200){
      setnotificationlist(req?.data)
      setloading(false)
   

    }
    else{
      setloading(false)
      toast.error(req?.message || "something went wrong")

    }
  }
  useEffect(()=>{
    notificationsListing()

  },[])
  console.log(notificationlist,"nnn")
  return (
    <div>
      <NotificationHeader>
        <header>Notifications</header>
        <span onClick={showModal}>Clear</span>
      </NotificationHeader>
      <Modal open={openmodal} footer={false} width={400}>
       <DeleteNotification>
        <div>
          <div className="warning-msg"> 
          <AiOutlineWarning style={{
            fontSize:"30px",
            color:"F5C404"
          }}/>

          <p>Clear All Notifications</p>
          </div>
          <div className="delete-btn">
            <button className="cancel-btn" onClick={()=>setopenmodal(false)}>Cancel</button>
            <button className="confirm-btn" onClick={()=>clearAllNotifications()}>Confirm</button>
          </div>
      
        </div>

       </DeleteNotification>

      </Modal>

      <NotificationContainer>
        {loading?(
          <Loader/>
        ):(<>
        
        {notificationlist?.map((el)=>{
          const image=process.env.REACT_APP_BASEURL_IMAGE +el?.send_by?.user_images_while_signup[0]?.image_url
          


          
          return(
            <section>
            <div className="LeftSection">
              <img src={image} alt="" />
              <div>
                <p>{el?.send_by?.name}</p>
                <label>{el?.message}</label>
              </div>
            </div>
            

            <span>{getdate(el?.createdAt)}</span>
           
          </section>
          )

        })}
        
        </>
        )}
       

       
      </NotificationContainer>
    </div>
  );
}

const NotificationContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px 0;

  section {
    width: 96%;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    border-bottom: 2px solid #e2e2e2;
    display: flex;
    justify-content: space-between;

    .LeftSection {
      display: flex;

      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 40px;
      }

      div {
        margin: 0 10px;

        p {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.05em;
          color: #242424;
        }
        label {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 0.05em;
          color: #7b7f91;
        }
      }
    }

    span {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
      text-align: right;
      letter-spacing: 0.05em;
      color: #7b7f91;
      width:15%;
    }
  }
`;

const NotificationHeader = styled.div`
  width: 100%;
  height: 88px;
  background: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 20px;

  header {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #242424;

    @media (max-width: 800px) {
      color: red;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4.5px 20px;
    background: #ffffff;
    border-radius: 6px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #242424;
   
  }
`;
const DeleteNotification=styled.div`
display:flex;
align-items:center;
justify-content:center;
.delete-btn{
  display:flex;
  gap:15px;
  .cancel-btn{
    padding: 10px 30px;
    border: 1px solid transparent;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    color: rgb(36, 36, 36);
  }
  .confirm-btn{
    padding: 10px 30px;
    border: 1px solid transparent;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    background-image: linear-gradient(rgb(255, 72, 60) 100%, rgb(255, 44, 90) 100%);
    color: white;
  }
}
.warning-msg{
  padding:20px 0px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  p{
    font-size:22px;
    color:#242424;
  }
}

`
