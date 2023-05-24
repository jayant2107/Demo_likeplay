import React, { useState } from "react";
import styled from "styled-components";
import {Modal} from "antd";
import CreateShotsModal from "../../Modals/CreateShotsModal";
import InfoGuidelinesModal from "../../Modals/InfoGuidelinesModal";
//FakeData
import { UsersData } from "./DataPage";
import UserPostCard from "./UserPostCard";
import { Addbtn, Info } from "../../Utils/Logo";
import { Artboard } from "../../Utils/icons-folder/Modalsicons";

const FeedPage = () => {
  const [like, setLike] = useState(false);
  const [heart, setHeart] = useState(false);
  const [star, setStar] = useState(false);
  const [snapModal, setSnapModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  const closeInfoModal = () =>{
    setInfoModal(false);
  }

  const closeSnapModal = () =>{
    setSnapModal(false);
  }

  const changeIcon = (val) => {
    console.log(val);
    val === "like"
      ? setLike(!like)
      : val === "heart"
      ? setHeart(!heart)
      : setStar(!star);
  };
  return (
    <>
      <Searchbar>
        <div className="header-wrapper">
          <div className="search-bar">
            <img src={Artboard} alt="" />

            <input placeholder="Take the Floor,Show-off"></input>
          </div>
          <div onClick={()=>{
            setSnapModal(true)
          }}>
            <Addbtn  />
          </div>
          {snapModal && (<Modal
            open={snapModal}
            close = {closeSnapModal}
            onCancel={closeSnapModal}
            maskClosable = {true}
            footer = {null}
            centered
          ><CreateShotsModal closeSnapModal={closeSnapModal}/></Modal>)}
          <div onClick = {()=>{
            setInfoModal(true)
          }}>
            <Info />
          </div>
          {infoModal && (
            <Modal open={infoModal}
                close= {closeInfoModal}
                onCancel={closeInfoModal}
                className="info-modal"
                prefixCls="info-modal1"
                maskClosable={true}
                footer= {null}
                width="80%"
                style={{ top: 20 }}
                closable={true}
            ><InfoGuidelinesModal/></Modal>
          )}
        </div>
      </Searchbar>

      <Feedpagewrapper>
        {UsersData.map((val, index) => {
          return (
            <>
              <UserPostCard
                val={val}
                index={index}
                like={like}
                heart={heart}
                star={star}
                changeIcon={changeIcon}
              />
            </>
          );
        })}
      </Feedpagewrapper>
    </>
  );
};

export default FeedPage;
const Feedpagewrapper = styled.div`
  border-right: 1px solid #e2e2e2;
  border-left: 1px solid #e2e2e2;
`;
const Searchbar = styled.div`
padding:20px 0px;
.header-wrapper{
  display:flex;
  align-items:center;
  justify-content:space-around;
}
.search-bar{
  width:80%;
  display:flex;
  background:rgba(168, 88, 15, 0.06)

  border-radius:15px;
  
  img{
    background:rgba(168, 88, 15, 0.06);
    padding:0px 10px;
    border-radius:15px 0px 0px 15px;

  }
  input{
    height:56px;
    width:100%;
    background:rgba(168, 88, 15, 0.06);
    border:none;
    border-radius:0px 15px 15px 0px;
   
    padding:0px 10px;
    &:focus{
      outline:none;
    }
  }

}

`;
