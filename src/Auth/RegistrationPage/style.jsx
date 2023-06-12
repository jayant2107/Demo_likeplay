import styled from "styled-components";

//--------backgournd_img----------------------------------//

export const RisgistionBgImg = styled.div`
  background: url(${(props) => props.imgUrl});
  width: 100%;
  min-height: 100vh;
  max-height: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  .wrapperDiv {
    width: 80%;
    margin: auto;
    padding-bottom: ${(props) => props.padding || ""};
  }

  @media (min-width: 320px) and (max-width: 480px) {
    background-position: 30%;
    background-size: cover;
  }

  //--------backgournd_img----------------------------------//
`;

//--------From----------------------------------//
export const FromStyleDiv = styled.div`
  color: white;
  width: ${(props) => props.width || "28rem"};
  margin: ${(props) => props.margin || ""};
  lable {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 167% */
    letter-spacing: 0.05em;
    color: #242424;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    margin: auto;
  }

  //--------From----------------------------------//
`;

// ----------Progess------------------------//
export const ProgessStyleDiv = styled.div`
  width: ${(props) => props.width || "100%"};
  padding: 2px;
  margin: 0.8rem 0 0.4rem 0;
`;
export const ProgessStyleDivline = styled.div`
  border: ${(props) => props.border || "2px white solid"};
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "1rem"};
  background-color: ${(props) => props.bgcolour || "#3f3f3f"};
`;
export const ProgessStyleDivfilline = styled.div`
  width: ${(props) => props.width || "10%"};
  background-color: ${(props) => props.bgcolour || "#ff3f45"};
  border-radius: ${(props) => props.borderRadius || "1rem"};
  padding: 6px;
  padding: ${(props) => props.padding || "7px"};

  // ----------------Progess------------------------//
`;

// ----------------Button------------------------//
export const ButtonStyle = styled.button`
  border-radius: 0.5rem;
  border: ${(props) => props.border || "none"};
  color: ${(props) => props.color || "white"};
  background: ${(props) =>
    props.bgcolour || `linear-gradient( 268.55deg, #FF483C 0%, #FF2C5A 100%)`};
  width: ${(props) => props.width || "8rem"};
  height: ${(props) => props.height || ""};
  padding: ${(props) => props.padding || "1rem"};
  margin: ${(props) => props.margin || "1rem"};

  // ----------------Button------------------------//
`;
// ----------------Select Button------------------------//
export const SelectOptionStyle = styled.select`
  width: ${(props) => props.width || "26rem"};
  height: ${(props) => props.height || "3rem"};
  margin: ${(props) => props.margin || "0rem 0px 1rem 0px"};
  padding-left: ${(props) => props.paddingLeft || "1rem"};
  outline: none;
  font-size: 1rem;
  color: #878784;
  border-radius: 10px;
  // ----------------Select Button------------------------//
`;
// ----------------Choice Button------------------------//
export const ChoiceDiv = styled.div`
  width: ${(props) => props.width || "26rem"};
  height: ${(props) => props.height || "3rem"};
  margin: ${(props) => props.margin || "0rem 0px 0rem 0px"};
  padding-left: ${(props) => props.paddingLeft || "11px"};
  background-color: ${(props) => props.backgroundColor || "#F0F0F0"};
  font-size: 1rem;
  color: ${(props) => props.backgroundColor || "#878784"};
  border-radius: 10px;
  border: 1px #878784 solid;
  text-align: left;
  display: flex;
  justify-content: left;
  align-items: center;
  // ----------------Choice Button------------------------//
`;

export const ChoiceBtn = styled.div`
  padding: 6px 16px;
  color: rgb(104, 102, 102);
  background-color: ${(props) => props.bgcolour || "rgb(217, 208, 208);"};
  border-radius: 15px;
  margin-right: 17px;
  margin-bottom: 15px;
  font-size: smaller;
  cursor: pointer;
`;

/// --------------------Pages---------------------------------------------------------//
export const RisgistationPage1 = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;

  @media (min-width: 320px) and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    margin: auto;
  }

  .Risgistation_content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .Risgistation_content {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      margin-top: 1.5rem;
    }
    .FormikForm {
      width: 100%;
    }
  }
  @media (min-width: 481px) and (max-width: 834px) {
    .Risgistation_content {
      width: 100%;
    }
  }
  /*------------------------ login -------*/
  .Risgistation_contentlogin {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 1rem;
    color: white;
    margin-top: 10rem;
  }
  .risgistation_img_log_login {
    margin-top: 70px;
    text-align: center;
    padding-top: 90px;
    float: right;
  }

  img.rig_img_log {
    width: 10rem;
  }
  input.resgistation_input {
    width: 100%;
    height: 3rem;
    padding-left: 1rem;
    outline: none;
    border-radius: 10px;
    padding-left: 10px;
    margin: 0.3rem 0;
    border: 1px #e2e2e2 solid;
  }
  .InputMethpassword {
    width: 99%;
    height: 3rem;
    padding-left: 1rem;
    margin: 0rem 0px 1rem 0px;
    outline: none;
    border-radius: 10px;
    border: 1px #e2e2e2 solid;
  }

  .registation_form {
    border-radius: 1rem;
    background-color: white;
    padding: 1rem;
    color: black;
    span {
      color: red;
    }
  }

  @media (max-width: 480px) {
    .risgistation_img_log {
      text-align: center;
      img {
        width: 6rem;
      }
      h1 {
        font-size: 20px;
      }
    }
  }
  .btn {
    // text-align: center;
    display: flex;
    justify-content: center;
  }
  .password-div {
    position: relative;
  }
  .eyeLogo {
    width: 20px;
    position: absolute;
    top: 22px;
    right: 20px;
    cursor: pointer;
    color: black;
    font-size: 20px;
  }
  /* -------------?loginpage---------? */
  h2.loginHeading {
    margin: 1rem 0;
  }
  p.fogotpassword {
    margin: 15px 15px 0 0;
    float: right;
    color: #ff3f45;
    cursor: pointer;
  }

  //----------------------------------------Ris-page2------------------------------//
  .Risgistation_content2 {
    display: flex;
    width: 100%;
    color: white;
    justify-content: right;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .Risgistation_content2 {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
  @media (min-width: 481px) and (max-width: 834px) {
    .Risgistation_content2 {
      display: flex;
      // justify-content: center;
      height: 90vh;
      align-items: center;
    }
  }
  .Welcome {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 39px;
    letter-spacing: 0.05em;
    margin: 10px 0;
    color: #242424;
    display: flex;
    justify-content: space-between;

    .infocircle {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  .gender_btn {
    // text-align: center;
    display: flex;
    justify-content: center;
  }
  .bottomtext {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
  .activeButton {
    color: white;
    background-color: #a8580f;
  }
  /* -------Ris_page 3-------------------- */
  .body_heigth {
    display: grid;
    grid-template-columns: 48% 48%;
    justify-content: space-between;
    gap: 5px;
  }
  /* -------Ris_page 5-------------------- */
  .trib_irrelevant {
    height: 4rem;
    text-align: center;
    width: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .trib_irrelevant input {
    width: 1rem;
    height: 1rem;
    border: none;
    outline: none;
    background-color: #d2d2d2;
    border-radius: 5px;
    margin: 0;
    margin-left: 5px;
  }
  /* -------Ris_page 6-------------------- */
  .textareaa {
    // width: 26rem;
    width: 100%;
    height: 15rem;
    text-align: left;
    outline: none;
    border-radius: 1rem;
    border: 1px #e2e2e2 solid;
    margin: 1rem 0;
    padding: 10px;
  }
  textarea {
    resize: none;
  }
  /* ------------Regis Page 7----------- */
  .imgUpload {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .AddimgUpload {
    width: 8rem;
    height: 8rem;
    border-radius: 1rem;
  }
  img.addimgloadtag {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
  .xbtn {
    position: relative;
    top: -2.8rem;
    left: 5rem;
  }
  .inputFile {
    display: none;
  }
  .frame {
    position: relative;
  }
  .fileLable {
    width: 8rem;
    height: 8rem;
    border-radius: 1rem;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .removeUpload {
    position: absolute;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }
  .selectedImg {
    border-radius: 1rem;
  }
  .selectedImg2 {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  /* ----------Rist Page8---------------- */
  .Risgistation_content8 {
    width: 100%;
    padding-bottom: 1rem;
    color: white;
    margin: auto;
    text-align: center;
  }
  .progessdiv {
    width: 100%;
    margin: auto;
    margin-bottom: 1rem;
  }

  .h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 52px;
  }

  .cartReg {
    height: 18rem;
    border: 1px #d9dddd solid;
    margin: 1rem;
    padding: 1rem;
    position: relative;
    color: #8b8888;
    border-radius: 1rem;
  }

  .cartIcon {
    width: 4rem;
    border: 1px solid transparent;
    height: 4rem;
    margin: auto;
    border-radius: 100%;
    margin-bottom: 1rem;
  }
  img.cartIconimg {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
  button.btn_buttom {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%, -3%);
  }
  .registation_form8 {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    font-size: small;
    background-color: white;
    border-radius: 22px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .Risgistation_content8 {
      width: 100%;
    }
    .progessdiv {
      width: 100%;
    }
    .h1 {
      font-size: 14px;
      line-height: 15px;
    }
    .registation_form8 {
      display: block;
      height: 450px;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
    }
    }
    .cartReg {
      width: auto;
      margin: 1rem 1rem;
    }
  }
  @media (min-width: 481px) and (max-width: 1080px) {
    .Risgistation_content8 {
      width: 100%;
    }
    .progessdiv {
      width: 100%;
    }
    .h1 {
      font-size: 20px;
    }
    .registation_form8 {
      display: block;
      height: 750px;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
    }
    }

    .cartReg {
      width: auto;
      margin: 1rem 1rem;
    }
  }

  /* /------------Regis page9---------- */
  .verificationdiv {
    display: flex;
    margin: auto;
    border: 1px solid rgb(199, 199, 199);
    padding: 5px;
    border-radius: 6px;
    justify-content: space-around;
    margin: 1rem 0;
  }
  p.paarapag9 {
    font-size: 14px;
    width: 21rem;
    color: #424141;
    font-family: fangsong;
    font-weight: 500;
  }
  .checkboxs {
    display: flex;
  }
  input.checkboxsN {
    height: 21px;
    width: 26px;
    margin-right: 4px;
    background-color: #8b8888;
  }
  p.checkoxIn {
    display: flex;
    margin-right: 18px;
  }
  .btn9 {
    display: flex;
  }
  textarea.textarea9 {
    width: 25rem;
    height: 6rem;
    border: 1px solid rgb(199, 199, 199);
    padding: 5px;
    border-radius: 6px;
    color: #b5b1b1;
    outline: none;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .verificationdiv {
      display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 50% 50%;
    } 
    p.paarapag9{
      width : auto;
    }
    textarea.textarea9{
      width:100%;
    }
    input.checkboxsN {
      width:auto;
    }
    .checkboxs {
      display: grid;
    grid-template-columns: auto auto;
    justify-content: end;
    }
  }


  ////-res Page10------------------

  .btnchosediv {
    display: flex;
  }
  .lable {
    font-weight: 800;
    margin-top: 1rem;
    font-size: small;
    color: #4a4848;
  }

  .activeButton {
    color: white;
    background-color: #a8580f;
  }

  .text10 p {
    margin: 1rem 0;
    /* font-family: math; */
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
  }
`;
