import styled from "styled-components";
import { upload } from "../Utils/images/Modalsimg";
import { exit } from "../Utils/icons-folder/Modalsicons";
import StyledButton from "../Components/Button";
import { Select, Space } from 'antd';
import React from "react";



export default function CreateShotsModal({ closeSnapModal, image }) {

  const {Option} = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

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
            <div className="upload-pic">
              {image ? (
                <img src={image} alt="upload" id="upload-edit"></img>
              ) : (
                <img src={upload} alt="upload" id="upload"></img>
              )}
              {!image && <span className="head">Upload Images</span>}
            </div>

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
            <div className="write-section-content">
              <div className="head"> Write Something...</div>
            </div>
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
               width: '100%',
             }}
          
             onChange={handleChange}
             optionLabelProp="label"
            ><Option value="Julia Roberts" label="Julia Roberts">
            <Space>
              
             Julia Roberts
            </Space>
          </Option>
          <Option value="Meryl Streep" label="Meryl Streep">
            <Space>
             
             Meryl Streep
            </Space>
          </Option>
          <Option value="Jennifer Lawrence" label="Jennifer Lawrence">
            <Space>
              
             Jennifer Lawrence
            </Space>
          </Option>
          <Option value="Jennifer Aniston" label="Jennifer Aniston">
            <Space>
           
            Jennifer Aniston
            </Space>
          </Option></Select>
            {/* <div className="tags">
              <div className="tag-content">
                <div className="tag-name">Julia Roberts</div>
                <div className="exit-icon">
                  <img src={exit} alt="exit" id="exit" />
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/******* MODAL TAG-SECTION ENDS ********/}

        {/******* MODAL BUTTON-SECTION STARTS *****/}

        <div className="modal-button">
          <div className="buttons-content">
            <div className="submit-btn">
              <StyledButton
                onClick={closeSnapModal}
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

  .upload-pic {
    display: grid;
    justify-content: center;
    width: 100%;
    height: 140px;
    object-fit: contain;
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
  .write-section {
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    display: flex;
    height: 100px;
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
