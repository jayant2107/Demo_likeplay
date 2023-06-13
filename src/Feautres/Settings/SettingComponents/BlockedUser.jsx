import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  SecondUser,
  SixUser,
  ThirdUser,
  UserBlock,
  fifthUser,
  fourthUser,
} from "../../../Utils/SettingImgaes/SettingP";
import BlockedUserComp from "../../../Components/BlockedUserComp";
import { useSelector } from "react-redux";
import { blockUser, blockeduserlisting, blockuser} from "Services/collection";
import { toast } from "react-toastify";




const BlockedUser = () => {
  const [blockuserlist,setblockuserlist]=useState([])
  const listing=async()=>{
    let req= await blockeduserlisting()
    if(req?.status===200){
      setblockuserlist(req?.data)

    }
    else{

    }
  }
  useEffect(()=>{
    listing()
  },[])
  const unblockuser=async(userid)=>{
    const req={
      status:true,
      user_id:userid

    }
    const res= await blockUser(req)
    if(res?.status===200){
      toast.success(res?.message || "Unblock user successfully") 
      console.log("helo")
     
      
    }
    else{
      toast.error(res?.message)
      console.log(res)

    }
  }

  return (
    <>
      <Blocked>Blocked Users</Blocked>
      <WrapperBlock>
        {blockuserlist.length>0?(    

blockuserlist?.map((ele) => {
  return (
   
   
      <BlockedUserComp ele={ele}  blockUser={unblockuser} />
   
  );
})
):(<div>
  <p>No data found
  </p>
</div>)}
 
      </WrapperBlock>
    </>
  );
};

export default BlockedUser;

const Blocked = styled.div`
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
`;
const WrapperBlock = styled.div`
  width: 95%;
  padding: 2%;
  margin-top: 1rem;
  height: 60vh;
  overflow-y: scroll;
  background: #f0f0f0;
  .Unblockdiv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .blockdiv {
    width: 50px;
    height: 50px;
  }
  .blockdiv img {
    height: 100%;
    width: 100%;
  }
  .imgBlock {
    border-radius: 50%;
  }
  .UnBlock {
    width: 109px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border: none;
    height: 33px;
    border-radius: 10px;
    color: #fbfaf8;
    font-size: 15px;
  }
  .name {
    margin-left: 0.5rem;
  }
  .InerMargin:not(:first-child) {
    margin-top: 0.5rem;
  }
`;
const FlexUpgrade = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "none"};
  justify-content: ${({ content }) => content || "none"};
`;
