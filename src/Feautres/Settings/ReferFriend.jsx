import React from "react";
import styled from "styled-components";
import { Refer } from "../../Utils/SettingImgaes/SettingP";
import { copy, insta, linkdin, twitter, whatsapp } from "../../Utils/IconsP";
const ReferFriend = () => {
  return (
    <>
      <ReferWrapper>
        <div className="ReferImage">
          <img src={Refer} alt="Something Wrong" />
        </div>
        <div className="willsmith">
          <div className="InnerWillSmith">
            <div>
              <input type="text" className="ReferFrnd" />
            </div>

            <div>
              <div className="Refer">
                Refer to 5 friends and Earn 1 month subscription
              </div>
              <div className="BtnFlex">
                <div>
                  <Button Background="linear-gradient(225deg, #007AB5 14.64%, #0046E5 85.36%)">
                    <img src={linkdin} alt="something wrong" />
                  </Button>
                </div>
                <div>
                  <Button Background="radial-gradient(96.43% 78% at 26% 104%, #FFC600 0%, #FE311E 57.71%, rgba(254, 49, 30, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(111% 111% at 11% 14%, #9331FF 0%, #FF1E9D 46.38%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */">
                    <img src={insta} alt="something wrong" />
                  </Button>
                </div>
                <div>
                  <Button Background="linear-gradient(247.5deg, #60FC7C 11.73%, #4AB161 88.29%)">
                    <img src={whatsapp} alt="something wrong" />
                  </Button>
                </div>
                <div>
                  <Button Background="linear-gradient(225deg, #33CCFF 14.64%, #337FFF 85.36%)">
                    <img src={twitter} alt="something wrong" />
                  </Button>
                </div>
                <div>
                  <Button Background="white">
                    <img src={copy} alt="something wrong" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="BtnFlex">
              <div>
                <ButtonSubmit background="rgba(0, 0, 0, 0.2)">
                  Skip
                </ButtonSubmit>
              </div>
              <div>
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
  width: 100%;
  font-family: "Poppins", sans-serif;

  .willsmith {
    border: 1px dotted;
    width: 335px;
    border: 1px dashed #c8c8c8;
    border-radius: 12px;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .InnerWillSmith {
    width: 90%;
  }
  .ReferImage {
    width: 318px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ReferImage img {
    max-width: 100%;
    max-height: 100%;
  }
  .Refer {
    font-size: 10px;
  }
  .InnerWillSmith > div {
    margin: 1rem 0rem;
  }
  .BtnFlex {
    display: flex;
  }
  .BtnFlex > div:not(:first-child) {
    margin-left: 12px;
  }
  .ReferFrnd {
    width: 295px;
    height: 56px;
    background: #f0f0f0;
    border-radius: 10px;
    padding-left: 17px;
    font-size: 16px;
  }
`;
const Button = styled.button`
  background: ${({ Background }) => Background || "none"};
  width: 51px;
  height: 51px;
  border-radius: 10px;
  border: none;
`;
const ButtonSubmit = styled.button`
  background: ${({ background }) => background || "none"};
  width: 142px;
  height: 48px;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 18px;
`;
