import React, { useEffect, useState } from "react";
import { Admiringsdiv, AdmiringCard } from "./AdmiStyle";
import doteicon, {
  juli,
  natai,
  markg,
  iconchat,
} from "../../Utils/Admiring/Admiring";
import { AiOutlineSearch } from "react-icons/ai";
import { admiringUsers } from "Services/collection";
import Loader from "Components/Loader";
import { Nodata } from "Components/Nodata";

const data = [
  {
    photo: juli,
    newbtn: true,
    headname: "Julia Roberts",
    age: 21,
    country: "Nigeria",
    profession: "Teacher",
    admierd_btn: true,
    chat_btn: false,
    padding_btn: false,
  },
  {
    photo: natai,
    newbtn: true,
    headname: "Julia Roberts",
    age: 21,
    country: "Nigeria",
    profession: "Teacher",
    admierd_btn: false,
    chat_btn: true,
    padding_btn: false,
  },
  {
    photo: markg,
    newbtn: false,
    headname: "Julia Roberts",
    age: 21,
    country: "Nigeria",
    profession: "Teacher",
    admierd_btn: false,
    chat_btn: false,
    padding_btn: true,
  },
  {
    photo: juli,
    newbtn: true,
    headname: "Julia Roberts",
    age: 21,
    country: "Nigeria",
    profession: "Teacher",
    admierd_btn: true,
    chat_btn: false,
    padding_btn: false,
  },
  {
    photo: natai,
    newbtn: true,
    headname: "Julia Roberts",
    age: 21,
    country: "Nigeria",
    profession: "Teacher",
    admierd_btn: false,
    chat_btn: true,
    padding_btn: false,
  },
  {
    photo: markg,
    newbtn: false,
    headname: "Julia Roberts",
    age: 21,
    country: "Nigeria",
    profession: "Teacher",
    admierd_btn: false,
    chat_btn: false,
    padding_btn: true,
  },
  {
    photo: juli,
    newbtn: true,
    headname: "Julia Roberts",
    age: 21,
    country: "Nigeria",
    profession: "Teacher",
    admierd_btn: true,
    chat_btn: false,
    padding_btn: false,
  },
  {
    photo: natai,
    newbtn: true,
    headname: "Julia Roberts",
    age: 21,
    country: "Nigeria",
    profession: "Teacher",
    admierd_btn: false,
    chat_btn: true,
    padding_btn: false,
  },
  {
    photo: markg,
    newbtn: false,
    headname: "Julia Roberts",
    age: 21,
    country: "Nigeria",
    profession: "Teacher",
    admierd_btn: false,
    chat_btn: false,
    padding_btn: true,
  },
];
const Admiring = () => {
  const [serc, setSerc] = React.useState(false);
  const [Data,setData]=useState();
  const [loading,setloading]=useState(true);
  const [datafound,setdatafound]=useState(false)
  const Search = () => {
    setSerc(true);
  };
  const getadmiringlisting=async()=>{
    setloading(true)
    const req= await admiringUsers()
    if(req?.status === 200){
      setData(req?.data)
      setloading(false)
 
   
      
    }
    else{
      setloading(false)
      setdatafound(true)
     
    }
  }
  useEffect(()=>{
    getadmiringlisting()
  },[])
  console.log(Data,"dataa")

  return (
    <>
      <Admiringsdiv>
        <div className="search_bar">
          {!serc && (
            <p className="text_search">
              <span className="spnaAddmi">Admiring</span> Those I am Admiring
              whey de enter my eye
            </p>
          )}
          {serc && (
            <input
              type="Search"
              className="admiring_search"
              placeholder="text........"
            />
          )}
          <span className="search_icon" onClick={Search}>
            <AiOutlineSearch />
          </span>
        </div>
        {loading?(<Loader/>):( 
           <div className="admiring_content">
            {datafound?(<Nodata><p>No Data Found</p></Nodata>):(<>
              {Data?.map((el) => {
            const image =process.env.REACT_APP_BASEURL_IMAGE +el?.AdmireTo?.user_images_while_signup[0]?.image_url
             return (
               <>
                 <AdmiringCard>
                   <div className="admiring_card_img">
                     {el.newbtn && (
                       <button className="admiring_new_btn">New</button>
                     )}
                     <img
                       src={image}
                       className="admiring_card_img_tag"
                       alt="empty"
                     ></img>
                   </div>
                   <div className="admiring_text_conten">
                     <p className="admiring_name_heading">{el?.AdmireTo?.name}</p>
                     <div className="admiring_name">
                       <p>{el?.AdmireTo?.age}</p>
                       <div className="admiring_dote_text">
                         <img src={doteicon} alt="" />
                       </div>
                       <p>{el?.AdmireTo?.country}</p>
                       <div className="admiring_dote_text">
                         <img src={doteicon} alt="" s />
                       </div>
                       <p>{el?.AdmireTo?.employment}</p>
                     </div>
                   </div>
                   {el.admierd_btn && (
                     <button className="admired_btn_cart_bottom">Admired</button>
                   )}
                   {el?.status==1 && (
                     <button className="admired_btn_cart_bottom_padding">
                       Pending
                     </button>
                   )}
                   {el?.status==2 && (
                     <div>
                       <img className="chating_icon" src={iconchat} alt="" />
                       <select className="admired_btn_cart_select">
                        <option selected='disable'>Chat</option>
                         <option value="a">Video Call</option>
                         <option>Voice Call</option>
                       </select>
                     </div>
                   )}
                 </AdmiringCard>
               </>
             );
           })}
            </>)}
         
         </div>
        )}
    
      </Admiringsdiv>
    </>
  );
};

export default Admiring;
