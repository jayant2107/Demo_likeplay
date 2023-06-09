import { LoadingOutlined } from "@ant-design/icons";
import {
  EditUserPost,
  deleteTagwhileupdation,
  getTagDetail,
  getTaglist,
} from "Services/collection";
import { exit } from "Utils/icons-folder/Modalsicons";
import { Button, Select, Space, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

export default function EditPosts({ editpostdata, close, taglisting }) {
  const { Option } = Select;
  const [filetype, setfiletype] = useState();
  const [alltaglist, setalltaglist] = useState();
  const [TagList, setTagList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newselectedtag, setnewselectedtag] = useState([]);
  const [inputcaption, setinputcaption] = useState(editpostdata?.caption);

  const defaultselected = TagList.map((item) => item?.tag_to);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 30,
        color: "red",
      }}
      spin
    />
  );
  const removetag = async() => {
    const removeuser = defaultselected.filter(
      (e) => !newselectedtag.includes(e)
    );
    if (removeuser.length > 0) {
      const res = await  deleteTagwhileupdation(removeuser);
      if (res?.status === 200) {
        toast.success(res?.message)
        
      } else {
        toast.error(res?.message);
        console.log("heelllo")
      }
    }
  };
  const hanldesumbit = async() => {
     removetag()
    const req={
      "post_id":editpostdata?.post_id,
      "tag_to":newselectedtag,
      "caption":inputcaption
    }
    const res =  await EditUserPost(req);
    if(res?.status===200){
      toast.success(res?.message)
    }
    else{
      toast.error(res?.message || "something went wrong")
    }
  };

  
  const video_extension = [
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
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setnewselectedtag(value);
  };
  const imgvideotag = () => {
    let imgvide = editpostdata?.shots.split(".")[1];
    let type = video_extension.includes(imgvide) ? 1 : 0;
    if (type === 1) {
      setfiletype(1);
    } else {
      setfiletype(0);
    }
  };

  const taguserlist = (payload) => {
    const parseData = payload?.map((items, key) => ({
      name: items?.user_name,
      id: items?.id,
      key: key,
    }));
    return parseData;
  };
  const getAllUserForTag = async () => {
    const res = await getTaglist();
    setLoading(true);
    if (res?.status === 200) {
      const data = await taguserlist(res?.data);
      setalltaglist(data);
      setLoading(false);
    } else {
      toast.error(res?.message);
      setLoading(false);
    }
  };
  const getTagsList = async () => {
    setLoading(true);
    const res = await getTagDetail(editpostdata?.post_id);
    if (res?.status === 200) {
      setTagList(res?.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUserForTag();
    getTagsList();

    imgvideotag();
  }, []);

  return (
    <>
      <StyledCreateShortModal>
        <div className="delete-icon" onClick={close}>
          <img src={exit} alt="exit" id="exit" />
        </div>

        {/********* MODAL UPLOAD IMAGE-SECTION STARTS ********/}

        <div className="upload-image-section">
          <div className="upload-image-head">
            <div className="heading">Take the Floor</div>
          </div>
          <div className="image-section">
            <div className="image-prev">
              {filetype === 1 ? (
                <video src={editpostdata?.shots} alt="video" />
              ) : (
                <img
                  src={
                    process.env.REACT_APP_BASEURL_IMAGE + editpostdata?.shots
                  }
                  alt="img"
                />
              )}
            </div>
          </div>
        </div>

        {/********* MODAL UPLOAD IMAGE-SECTION ENDS ********/}

        {/********* MODAL WRITE-SECTION STARTS **********/}

        <div className="write-something-section">
          <div className="write-head">
            <div className="heading">Take the Mic</div>
          </div>
          <div className="write-section">
            <input
              type="text"
              placeholder="Write Something..."
              value={inputcaption}
              onChange={(e) => setinputcaption(e.target.value)}
            />
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
            {loading ? (
              <LoaderWrapper>
                <Spin indicator={antIcon} />
              </LoaderWrapper>
            ) : (
              <Select
                mode="multiple"
                style={{
                  width: "100%",
                }}
                onChange={handleChange}
                defaultValue={defaultselected}
                optionLabelProp="label"
              >
                {alltaglist?.map((item) => {
                  return (
                    <Option value={item?.id} label={item?.name}>
                      <Space>{item?.name}</Space>
                    </Option>
                  );
                })}
              </Select>
            )}
          </div>
        </div>

        {/******* MODAL TAG-SECTION ENDS ********/}

        {/******* MODAL BUTTON-SECTION STARTS *****/}

        <div className="modal-button">
          <div className="buttons-content">
            {/* <StyledButton
                onClick={()=>handlesubmit()}
                text="white"
                bg="linear-gradient(#ff483c 100%, #ff2c5a 100%)"
              >
                Submit
              </StyledButton> */}
            <Button size="large" type="primary" onClick={()=>hanldesumbit()}>
              Submit
            </Button>
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
    video{
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
    input{
        padding:10px;
    }
  }


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
  display:flex;
  align-items:center;
  justify-content:end;
  padding:15px 0px;

  }

  

 
  .submit{
    background:linear-gradient(#ff483c 100%, #ff2c5a 100%);
    
     border: 1px solid transparent;
    border-radius: 10px;
   font-size: 16px;
   font-weight: 500;
   line-height: 22px;
    color:#fff;
    letter-spacing:1px;

    
  
  }

  /******* MODAL BUTTON-SECTION ENDS *****/
`;
const LoaderWrapper = styled.div`
  height: 80%;
  width: 100%;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
