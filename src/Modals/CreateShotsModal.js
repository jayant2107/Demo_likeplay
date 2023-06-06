import styled from "styled-components";
import { upload } from "../Utils/images/Modalsimg";
import { exit } from "../Utils/icons-folder/Modalsicons";
import StyledButton from "../Components/Button";
import { Select, Space } from "antd";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { createNewPosts } from "Services/collection";

export default function CreateShotsModal({ closeSnapModal, taglist }) {
  const { Option } = Select;
  const[imgvidupload,setimgvidupload]=useState() 
  const [uploadnew,setuploadnew]=useState(false)
  const [filetype,setfiletype]=useState()
  const [captionvalue,setcaptionvalue]=useState()
  const [tagto,settagto]=useState()
  const [imageprev,setimageprev]=useState()
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    settagto(value)
  };
  const handlesubmit=async()=>{
    const data= new FormData()
      data.append("media_url",imgvidupload?.[0],imgvidupload?.[0]?.name)
      data.append("caption",captionvalue)
      data.append("media_type",filetype)
      data.append("tag_to",tagto)
    const req= await createNewPosts(data)
    if(req?.status===200){
      

    }
    else{

    }

  }
  const video_extension=[
    "mpeg-2",
    "webm",
    "html5",
    "mkv",
    "swf",
    "f4v",
    "flv",
    "avchd",
    "avi",
    "wmv",
    "mov",
    "mp4",
  ]
  const imageupload=(e)=>{
    
    const fr=new FileReader();
    let fileExtension=e.target.files[0].name.split('.')[1];
    let type=video_extension.includes(fileExtension)?1:0;
    if(type===1){
      setfiletype(1)
    }
    else{
      setfiletype(0)
    }
    const url=URL.createObjectURL(e.target.files[0])
    setimgvidupload(e.target.files)
    setuploadnew(true)
    setimageprev(url)


  }

 

  return (
    <>
      <StyledCreateShortModal>
        <div className="delete-icon" onClick={closeSnapModal}>
          <img src={exit} alt="exit" id="exit" />
        </div>

        {/********* MODAL UPLOAD IMAGE-SECTION STARTS ********/}

        <div className="upload-image-section">
          <div className="upload-image-head">
            <div className="heading">Take the Floor</div>
          </div>
          <div className="image-section">
            {/* <div className="image-section-content"> */}
            
              {uploadnew?( <div className="image-prev">
              <AiOutlineClose className="close-icon" onClick={()=>setuploadnew(false)}/>
              {filetype===0?(<img src={imageprev} alt='imgvidupload' />):(
                <video src={imageprev} alt="videoupload"/>
              )}

             
            </div>):( <div className="upload-pic">
              <label for="uploadImgVid">
                
             
                <img src={upload} alt="upload" id="upload"  />
              </label>
              <input
                type="file"
                id="uploadImgVid"
                accept="audio/*,video/*,image/*" 
                onChange={(e)=>imageupload(e)}

                style={{ display: "none" }}
              />
              <span className="head">Upload Images</span>
            </div>)}
           
           

            {/* </div> */}
          </div>
        </div>

        {/********* MODAL UPLOAD IMAGE-SECTION ENDS ********/}

        {/********* MODAL WRITE-SECTION STARTS **********/}

        <div className="write-something-section">
          <div className="write-head">
            <div className="heading">Take the Mic</div>
          </div>
          <div className="write-section">
            <input type="text"  placeholder="Write Something..." onChange={(e)=>setcaptionvalue(e.target.value)}/>
            {/* <div className="write-section-content">
              <div className="head"> Write Something...</div>
            </div> */}
          </div>
        </div>

        {/********** MODAL WRITE-SECTION ENDS **********/}

        {/******* MODAL TAG-SECTION STARTS ********/}

        <div className="tag-section">
          <div className="tag-head">
            <div className="heading">Tag</div>
          </div>

          <div className="add-tag-section">
            <Select
              mode="multiple"
              style={{
                width: "100%",
              }}
              onChange={handleChange}
              optionLabelProp="label"
            >
              {taglist?.map((item) => {
                return (
                  <Option value={item?.id} label={item?.name}>
                    <Space>{item?.name}</Space>
                  </Option>
                );
              })}
            </Select>
          </div>
        </div>

        {/******* MODAL TAG-SECTION ENDS ********/}

        {/******* MODAL BUTTON-SECTION STARTS *****/}

        <div className="modal-button">
          <div className="buttons-content">
            <div className="submit-btn">
              <StyledButton
                onClick={()=>handlesubmit()}
                text="white"
                bg="linear-gradient(#ff483c 100%, #ff2c5a 100%)"
              >
                Submit
              </StyledButton>
            </div>
          </div>
        </div>

        {/****** MODAL BUTTON-SECTION-ENDS *******/}
      </StyledCreateShortModal>
    </>
  );
}

export const StyledCreateShortModal = styled.div`



  .delete-icon {
    color: green;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    top: -32px;
    right: 0px;
  }

  img#exit {
    width: 24px;
  }

  .content-container {
    padding: 15px;
  }

  .content-container > div {
    margin-top: 10px;
  }

  /********* MODAL UPLOAD IMAGE-SECTION STARTS ********/

  .heading {
    font-size: 12px;
    text-align: start;
    font-weight: 500;
    line-height: 20px;
    color: #242424;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .image-section {
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-section-content {
    margin: auto;
  }
  .image-prev{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
      width:97%;
      height:97%;
      border-radius:5px;
    }
    .close-icon{
      position: absolute;
      top: 10;
      top: 15px;
      right: 15px;
      color: #fff;
      width: 22px;
      height: 22px;
    }
  }

  .upload-pic {
    display: grid;
    justify-content: center;
    width: 100%;
    height: 140px;
    object-fit: contain;

    label{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  img#upload {
    margin: auto;
  }

  img#upload-edit {
    width: 100%;
    height: 140px;
    margin: auto;
  }

  .head {
    font-size: 12px;
    font-weight: 400;
    line-height: 100%;

    color: #7b7f91;
  }

  /********* MODAL UPLOAD IMAGE-SECTION ENDS ********/

  /********* MODAL UPLOAD WRITE-SECTION STARTS ********/
  /* .write-section {
    /* border: 1px solid #e2e2e2; */
    /* border-radius: 10px; */
    /* display: flex;
    height: 100px; */
  /* } */ 

  input[type="text"] {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: #7B7F91;
      border: 1px solid #e2e2e2;
    border-radius: 10px;
    padding: 5px 5px 77px;
    
  }

  .write-section-content {
    width: 95%;
    margin: auto;
    margin-top: 0px;
  }
  /********* MODAL UPLOAD WRITE-SECTION ENDS ********/

  /********* MODAL TAG-SECTION STARTS **********/


  /* .add-tag-section {
   
    border-radius: 10px;
    display: flex;
    /* padding: 12px; */
  } */

  .tags {
    width: 30%;
    /* margin: auto; */
    border: 1px solid transparent;
    background-color: #a8580f;
    color: white;
    padding: 7px;
    display: flex;
    border-radius: 10px;
  }

  .tag-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .tag-name {
    font-size: 12px;
    font-weight: 400;
    line-height: 100%;
  }

  /********** MODAL TAG-SECTION ENDS ***********/

  /******* MODAL BUTTON-SECTION STARTS *****/

  .modal-button {
    margin-top: 18px;
  }

  .buttons-content {
    display: flex;
    justify-content: end;
  }

  .submit-btn {
    width: 31%;
    display: flex;
    justify-content: end;
  }

  /******* MODAL BUTTON-SECTION ENDS *****/
`;
