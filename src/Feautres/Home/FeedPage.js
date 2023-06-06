import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import CreateShotsModal from "../../Modals/CreateShotsModal";
import InfoGuidelinesModal from "../../Modals/InfoGuidelinesModal";
import { getHomePagePost, getTaglist } from "Services/collection";
import Loader from "Components/Loader";
//FakeData
import { UsersData } from "./DataPage";
import UserPostCard from "./UserPostCard";
import { Addbtn, Info } from "Utils/Logo";
import { Artboard } from "Utils/icons-folder/Modalsicons";
import { toast } from "react-toastify";
import moment from "moment/moment";
import { NoRecords } from "Style/comman_Css";

const FeedPage = () => {
  // const [like, setLike] = useState(false);
  // const [heart, setHeart] = useState(false);
  // const [star, setStar] = useState(false);
  const [snapModal, setSnapModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [UsersDetails,setUserDetails]=useState([])
  const [taglist,settaglist]=useState()

  const closeInfoModal = () => {
    setInfoModal(false);
  };

  const closeSnapModal = () => {
    setSnapModal(false);
  };
 

  // const changeIcon = (val) => {
  //   val === "like"
  //     ? setLike(pre=>!pre)
  //     : val === "heart"
  //     ? setHeart(pre=>!pre)
  //     : setStar(pre=>!pre);
  //     console.log("like==",like,heart,star)
  // };

  const parseHomeContent=(payload)=>{
    const parseData=payload?.map((list)=>({
      user_id:list?.user_id ,
      id:list?.id,
      profile_img:process.env.REACT_APP_BASEURL_IMAGE+list?.User?.user_images_while_signup[0]?.image_url,
      userName:list?.User?.user_name || "",
      date:moment(list?.User?.createdAt).local().format('DD MMMM LT'),
      caption:list?.caption || "",
      shots:list?.PostContents[0]?.media_url,
      post_id:list?.PostContents[0]?.post_id,
      totalLikeByHeart:list?.totalLikeByHeart,
      totalLikeByStar:list?.totalLikeByStar,
      totalLikeByThumb:list?.totalLikeByThumb,
      totalCommments:list?.totalCommments,
      totalTags:list?.totalTags,
      userLikeByHeart:list?.CurrentUserLikeByHeart==="0"?false:true,
      userLikeByStar:list?.CurrentUserLikeByStar==="0"?false:true,
      userLikeByThumb:list?.CurrentUserLikeByThumb==="0"?false:true,
    }))
    return parseData;
  }

  const getHomePageContent = async () => {
    setLoading(true)
    const res = await getHomePagePost();
    if(res?.status===200){
      const data=await parseHomeContent(res?.data)
      setUserDetails(data)
      setLoading(false)
    }else{
      setLoading(false)
      toast.error(res?.message || "Something Went Wrong")
    }
  };

  useEffect(() => {
    getHomePageContent();
    getAllUserForTag()
  }, []);

  const taguserlist=(payload)=>{
    const parseData=payload?.map((items,key)=>({
      name:items?.user_name,
      id:items?.id,
      key:key


    }))
    return parseData;

  }
  const getAllUserForTag =async()=>{
    const res= await getTaglist()
    if(res?.status===200){
    const data= await taguserlist(res?.data)
    settaglist(data)

    }
    else{
      toast.error(res?.message)

    }
  }
  console.log(taglist,"")

  return (
    <>
      <Searchbar>
        <div className="header-wrapper">
          <div className="search-bar">
            <img src={Artboard} alt="" />

            <input placeholder="Take the Floor,Show-off"></input>
          </div>
          <div
            onClick={() => {
              setSnapModal(true);
            }}
          >
            <Addbtn />
          </div>
          {snapModal && (
            <Modal
              open={snapModal}
              close={closeSnapModal}
              onCancel={closeSnapModal}
              maskClosable={true}
             

              footer={null}
              centered
            >
              <CreateShotsModal closeSnapModal={closeSnapModal}  taglist={taglist} />
            </Modal>
          )}
          <div
            onClick={() => {
              setInfoModal(true);
            }}
          >
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
        {loading ? (
          <Loader />
        ) : (
          UsersDetails.length>0? UsersDetails.map((val, index) => {
            return (
              <>
                <UserPostCard
                  val={val}
                  index={index}
                  getHomePageContent={getHomePageContent}
                  // like={like}
                  // heart={heart}
                  // star={star}
                  // changeIcon={changeIcon}
                />
              </>
            );
          }):
          <NoRecords>No Record Found</NoRecords>
        )}
      </Feedpagewrapper>
    </>
  );
};

export default FeedPage;

const Feedpagewrapper = styled.div`
  border-right: 1px solid #e2e2e2;
  border-left: 1px solid #e2e2e2;
  height: calc(100% - 96px);
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
  background:rgba(168, 88, 15, 0.06);

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
