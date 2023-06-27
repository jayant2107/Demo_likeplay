import styled from "styled-components";
import StyledButton from "../Components/Button";
import { add } from "../Utils/images/Modalsimg";
import React, { useState } from "react";
import { govtidverification } from "Services/collection";
import { toast } from "react-toastify";

export default function GovtIDVerifyModal({ closeModal ,Next}) {
  const [doc,setDoc] = useState();
  const [frontimageprev,setfrontimageprev]=useState()
  const [backimageprev,setbackimageprev]=useState()
  const [docBack,setDocBack] = useState();
  
  
  const handleGovtDoc = (e) => {
      setDoc(URL.createObjectURL(e.target.files[0])) 
      setfrontimageprev(e.target.files)
  };  
  const handleGovtDoc2 = (e) => {
    setDocBack(URL.createObjectURL(e.target.files[0]))
    setbackimageprev(e.target.files)
};  
  console.log(frontimageprev,"dfghgfdfd");

  const handlesumbit=async()=>{
    let formdata= new FormData();
    formdata.append("government_id_front_side",frontimageprev?.[0],frontimageprev?.[0]?.name)
    formdata.append("government_id_back_side",backimageprev?.[0],backimageprev?.[0]?.name)
    formdata.append("isUserVerified",true)

    

    const res=await govtidverification(formdata)
    if(res?.status==200){
      
     
      toast.success(res?.message)
   Next()

    }
    else{
      closeModal()
      console.log(res)
      toast.error(res?.message)

    }

  }

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
              onClick={handlesumbit}
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
