import styled from "styled-components";
import StyledButton from "../Components/Button";
import { add } from "../Utils/images/Modalsimg";
import React, { useState } from "react";

export default function GovtIDVerifyModal({ closeModal }) {
  const [doc,setDoc] = useState();
  const [docBack,setDocBack] = useState();
  
  
  const handleGovtDoc = (e) => {
      setDoc(URL.createObjectURL(e.target.files[0])) 
  };  
  const handleGovtDoc2 = (e) => {
    setDocBack(URL.createObjectURL(e.target.files[0]))
};  
  console.log(doc);

  return (
    <>
      <StyledIDModal>
        {/******* MODAL HEADER-SECTION STARTS ********/}

        <div className="modal-head">
          <div className="heading">Verification of Government ID</div>
        </div>
        {/******* MODAL HEADER-SECTION ENDS ********/}

        {/******* MODAL HERO-SECTION STARTS ********/}

        <div className="front-side">
            {
              doc ?
              <img src={doc} alt='' className="selectedImg"/>
            :
          <div className="top">
            <label htmlFor="govtDoc" className="fileLable">
              <img src={add} alt='' className="selectedImg"/>
            </label>
            <input
                    type="file"
                    className="inputFile"
                    name="govtDoc"
                    id="govtDoc"
                    onChange={handleGovtDoc}
                    // accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    />
            <div className="para">Front Side</div>
            </div>
          }
        </div>
        <div className="back-side">
        {
              docBack ?
              <img src={docBack} alt='' className="selectedImg"/>
            :
          <div className="top">
            <label htmlFor="govtDoc" className="fileLable">
              <img src={add} alt='' className="selectedImg"/>
            </label>
            <input
                    type="file"
                    className="inputFile"
                    name="govtDoc"
                    id="govtDoc"
                    onChange={handleGovtDoc2}
                    // accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    />
            <div className="para">Back Side</div>
            </div>
          }
        </div>
        {/******* MODAL HERO-SECTION ENDS ********/}

        {/******* MODAL BUTTON-SECTION STARTS ********/}

        <div className="modal-button">
          <div className="button-content">
            <StyledButton
              text="white"
              bg="linear-gradient(#ff483c 100%, #ff2c5a 100%)"
              onClick={closeModal}
            >
              Submit
            </StyledButton>
          </div>
        </div>

        {/******* MODAL BUTTON-SECTION ENDS ********/}
      </StyledIDModal>
    </>
  );
}

export const StyledIDModal = styled.div`
  /******* MODAL HEADER-SECTION STARTS ********/

  .heading {
    font-size: 26px;
    font-weight: 600;
    color: #242424;
    line-height: 39px;
  }

  /******* MODAL HEADER-SECTION ENDS ********/

  /******* MODAL HERO-SECTION ENDS ********/

  .top,
  .bottom {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  img {
    width: 60px;
    cursor: pointer;
  }

  .front-side,
  .back-side {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    border: 1px solid transparent;
    background: #f1f1f1;
    border-radius: 12px;
    margin-top: 15px;
    height: 175px;
  }

  .add-icon {
    margin: auto;
  }

  .para {
    margin: auto;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }

  /******* MODAL HERO-SECTION ENDS ********/

  /******* MODAL BUTTON-SECTION STARTS ********/

  .modal-button {
    margin-top: 15px;
  }

  .button-content {
    width: 30%;
    margin: auto;
  }

  /******* MODAL BUTTON-SECTION ENDS ********/

  .inputFile{
    display : none;
  }
  .fileLable{
    border-radius: 1rem;
    background-color : #F0F0F0;
    display: flex;
    justify-content: center;
    align-items: center;
    position : relative;
    margin : auto
  }
  .selectedImg{
    width : 100%;
    height : 100%;
    border-radius: 1rem;
  }
`;
