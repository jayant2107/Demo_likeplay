import React, { useState } from "react";
import styled from "styled-components";

import CommentModal from "../Modals/CommentModal";
import { Button, Modal } from 'antd';
import { sendRequest } from "Services/collection";
import { toast } from "react-toastify";
import { logo1, logo2 } from "Utils/Featuresimg/Featuresimg";






const MatchesCard = ({ props }) => {
  const [loadings, setLoadings] = useState([]);



  let profile_img=process.env.REACT_APP_BASEURL_IMAGE+props?.partner_data?.photos_for_verification;
  let Name=props?.partner_data?.name
  let age=props?.partner_data?.age
  let city=props?.partner_data?.city
  let Country=props?.partner_data?.country
  let userid=props?.partner_data?.id
  

  const handlesubmit=async(id,index,status)=>{
    let payload={
      "user_id":id,
      "status":status
    }
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
      });
    let req=await sendRequest(payload);
    if(req?.status===200){
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
      
      toast.success("Request Send")


    }
   else{
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = false;
      return newLoadings;
    })
    console.log(req,"req")
    toast.error(req.message||"Request failed")

    }
    
  }

  const [showDiv, setShowDiv] = useState(false);

  const handleOpenDiv = () => {
    setShowDiv(true);
  };

  const handleClose = () => {
    setShowDiv(false);
  };


  return (
    <MatchesCardStyle>
      <div className="MainCard">
        {showDiv && (
          <Modal 
          open={showDiv}
          close={handleClose}
          centered
          width="585px"
          maskClosable={true}
          footer={null}> 
          
             <CommentModal props={props}  show={showDiv} close={handleClose} />
          </Modal>
        )}
        <div className="MainDiv" onClick={handleOpenDiv}>
          <div className="ImgDiv">
            <img className="imgClass" src={profile_img} alt="" />{" "}
          </div>
          {props.Type && (
            <div className="type">
              <p>{props.Type}</p>
            </div>
          )}
          <p className="Name">{Name}</p>
          <div className="Div1">
            <p className="common">{age}</p>
            <span className="dot"></span>
            <p className="common">{city} </p>
            <span className="dot"></span>
            <p className="common">{Country}</p>
          </div>
        </div>
        <div className="MainDiv2">
          
          
          <Button size="small"
           className="Button1"
          type="primary"
          loading={loadings[2]}
          onClick={() =>handlesubmit(userid,2,1)}> 
          <img src={logo1} alt="" /></Button>

          <Button className="Button2"
          size="small"
          type="primary"
          loading={loadings[1]}
          onClick={() =>handlesubmit(userid,1,0)}> 
            <img src={logo2} alt="" />
          </Button>
        </div>
      </div>
    </MatchesCardStyle>
  );
};

export default MatchesCard;

const MatchesCardStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:0 0 40px 0;

  .MainCard {
    width:100%;
    height:100%;
  }

  .type {
    position: absolute;
    top: 4%;
    left: 4%;
    width: 41px;
    height: 16px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border-radius: 10px;
  }
  .type p {
    font-size: 12px;
    text-align: center;
    color: #ffffff;
  
  }
  .MainDiv {
    position: relative;
    & :hover{
      cursor: pointer;
    }
  }
  .img {
    background: url(.jpg), #d9d9d9;
    border-radius: 9px;
  }
  .Name {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: #242424;
    padding:5px 0px;
  }
  .Name:hover{
    font-size:18px;

  }
  .common {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #7b7f91;
  }
  .Div1 {
    display: flex;
    justify-content: space-around;
    padding:5px 0px;
  }
  .dot {
    border: 1px solid #7b7f91;
    border-radius: 5rem;
    background: #7b7f91;
    width: 4px;
    height: 4px;
    margin: auto;
  }
  .Button1 {
    width: 67.5px;
    height: 24px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border-radius: 5px;
    z-index: 0;
    color: #ffffff;

  }
  .Button2 {
    width: 67.5px;
    height: 24px;
    background: #f2f2f2;
    border-radius: 5px;
    font-weight: 800;
    font-size:18px ;
    color: red;
  }
  .Button2:hover {
    color:red;
    background: #f2f2f2;
  }

  .MainDiv2 {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  
    button {
      border-style:none;

    }
  }
  .ImgDiv {
    width: 100%;
    height: 100%;

    .imgClass {
      width: 100%;
    height: 160px;
    object-fit: fill;
    border-radius:10px;
    }
    
  }


  




// `;