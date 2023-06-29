import React from "react";
import styled from "styled-components";
import { Refer } from "../../../Utils/SettingImgaes/SettingP";
import { copy, insta, twitter, whatsapp } from "../../../Utils/IconsP";
import { useSelector } from "react-redux";
const ReferFriend = () => {
  const refercode=useSelector(e=>e?.LoginSlice?.data?.refer_code )
  console.log(refercode,"rr")
  return (
    <>
      <ReferWrapper>
        <div className="ReferImage">
          <img src={Refer} alt="Something Wrong" />
        </div>
        <div className="willsmith">
          <div className="InnerWillSmith">
            <div className="refercode">
              <input type="text" className="ReferFrnd"  value={refercode}/>
            </div>

            <div>
              <div className="Refer">
                Refer to 5 friends and Earn 1 month subscription
              </div>
              <div className="BtnFlex">
                <div className="Commonbtn">
                  <Button
                    Background="radial-gradient(96.43% 78% at 26% 104%, #FFC600 0%, #FE311E 57.71%, rgba(254, 49, 30, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(111% 111% at 11% 14%, #9331FF 0%, #FF1E9D 46.38%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */"
                    flex="flex"
                    align="center"
                    content="center"
                  >
                    <div className="innerLink">
                      <img src={insta} alt="something wrong" />
                    </div>
                  </Button>
                </div>
                <div className="Commonbtn">
                  <Button
                    Background="linear-gradient(247.5deg, #60FC7C 11.73%, #4AB161 88.29%)"
                    flex="flex"
                    align="center"
                    content="center"
                  >
                    <div className="innerLink">
                      <img src={whatsapp} alt="something wrong" />
                    </div>
                  </Button>
                </div>
                <div className="Commonbtn">
                  <Button
                    Background="linear-gradient(225deg, #33CCFF 14.64%, #337FFF 85.36%)"
                    flex="flex"
                    align="center"
                    content="center"
                  >
                    <div className="innerLink">
                      <img src={twitter} alt="something wrong" />
                    </div>
                  </Button>
                </div>
                <div className="Commonbtn">
                  <Button
                    Background="white"
                    flex="flex"
                    align="center"
                    content="center"
                  >
                    <div className="innerLink">
                      <img src={copy} alt="something wrong" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="BtnFlex">
              <div className="btnSkip">
                <ButtonSubmit background="rgba(0, 0, 0, 0.2)">
                  Skip
                </ButtonSubmit>
              </div>
              <div className="btnSkip ">
                <ButtonSubmit background="linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%)">
                  Done
                </ButtonSubmit>
              </div>
            </div>
          </div>
        </div>
      </ReferWrapper>
    </>
  );
};

export default ReferFriend;

const ReferWrapper = styled.div`
  width: 95%;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .willsmith {
    border: 1px dotted;
    
    border: 1px dashed #c8c8c8;
    border-radius: 12px;
    margin-top: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 4px 0px;
    @media(max-width:550px){
      width:100%;
    }
  }
  .InnerWillSmith {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .refercode{
    width:100%;
  }
  .ReferImage {
    width: 100%;
    height: 296.51px;
    display: flex;
    align-items: center;
  }
  .ReferImage img {
    max-width: 100%;
    max-height: 100%;
  }
  .Refer {
    margin: 0.5rem 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
  }
  .InnerWillSmith > div {
    margin: 12px 0px;
  }
  .BtnFlex {
    display: flex;
    justify-content: space-around;
  
    gap:10px;
  }
  .BtnFlex > div:not(:first-child) {
  
    @media(max-width:550px){
      margin-left:0px;
    
    }
  }
  .ReferFrnd {
    width: 100%;
    height: 56px;
    background: #f0f0f0;
    border-radius: 10px;
    padding-left: 17px;
    font-size: 16px;
    border: none;
    @media(max-width:550px){
      width:100%;

    }
  }
  .Commonbtn {
    width: 51px;
    height: 51px;
    @media(max-width:550px){
      width:40px;
      height:40px;
    }
  }
  .btnSkip {
    width: 142px;
    height: 48px;
    @media(max-width:550px){
      width:100%;

    }
  }
`;
const Button = styled.button`
  background: ${({ Background }) => Background || "none"};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  display: ${({ flex }) => flex || "none"};
  align-items: ${({ align }) => align || "none"};
  justify-content: ${({ content }) => content || "none"};
  .innerLink {
    width: 2.5em;
    height: 2.2em;
  }
  .innerLink img {
    width: 100%;
    height: 100%;
  }
`;
const ButtonSubmit = styled.button`
  background: ${({ background }) => background || "none"};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 18px;
  @media(max-width:550px){
    padding:10px 30px;
  }
`;
