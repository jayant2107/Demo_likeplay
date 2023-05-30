import React, { useEffect, useState } from "react";
import { Admiringsdiv, AdmiringCard } from "./AdmiStyle";
import doteicon, {
  juli,
  natai,
  markg,
  iconchat,
} from "../../Utils/Admiring/Admiring";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { admiringUsers } from "Services/collection";
import Loader from "Components/Loader";
import { Nodata } from "Components/Nodata";


const Admiring = () => {
  const [searchbar, setSearchbar] = React.useState(false);
  const [Data,setData]=useState([]);
  const [itemsArray,setitemsArray]=useState()
  const [loading,setloading]=useState(true);
  
  const searchdata = (e) => {
   
    const filterdata=itemsArray?.filter((items)=>items?.AdmireTo?.name.toLowerCase().includes(e.target.value.toLowerCase()))
   
    if(e.target.value.length>0){
      setData(filterdata)
    }
    else{
      getadmiringlisting()
    }

  
  };
  const getadmiringlisting=async()=>{
    setloading(true)
    const req= await admiringUsers()
    if(req?.status === 200){
      setData(req?.data)
      setitemsArray(req?.data)
      setloading(false)
 
   
      
    }
    else{
      setloading(false)
      
    }
  }
  useEffect(()=>{
    getadmiringlisting()
  },[])


  return (
    <>
      <Admiringsdiv>
        {searchbar?(    <div className="search_bar">
            <p className="text_search">
              <span className="spnaAddmi">Admiring</span> Those I am Admiring
              whey de enter my eye
            </p>
          
          <span className="search_icon" >
            <AiOutlineSearch  onClick={()=>setSearchbar(false)}/>
          </span>
        </div>):(  <div className="search">
                            <input className="search-input" placeholder="Search..."
                                onChange={searchdata}></input>
                            <AiOutlineClose style={
                                    {fontSize: '20px'}
                                }
                                onClick={
                                    () => setSearchbar(true)
                                }/>
                        </div>)}
    
      
        {loading?(<Loader/>):( <>
        
           
            {Data?.length===0?(<Nodata><p>No Data Found</p></Nodata>):(
              <div className="admiring_content">
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
            
         
         </div>
            )
          }
          </>
       

        )}
    
      </Admiringsdiv>
    </>
  );
};

export default Admiring;
