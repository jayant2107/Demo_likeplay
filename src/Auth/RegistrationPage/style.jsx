import styled from "styled-components"

//--------backgournd_img----------------------------------//

export const RisgistionBgImg = styled.div`
background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${(props) => props.imgUrl});
 width: ${(props) => props.width || "100%"};
 height: ${(props) => props.height || ""};
 background-size: ${(props) => props.bSize || "100% 100%"};
 background-position: ${(props) => props.bPosition || "100% 100%"};
 background-attachment: ${(props) => props.bAttachment || "fixed"};
 background-color:${(props) => props.bgcolour || "rgba(2, 2, 2, 0.8"};



 //--------backgournd_img----------------------------------//
 
`
//--------From----------------------------------//
export const FromStyleDiv = styled.div`
  color: white;
  width: ${(props) => props.width || "29rem"};
  margin:${(props) => props.margin || ""};
  lable {
    font-weight: 700;
    margin-top: 1rem;
    font-size: 11px;
    color: rgb(74, 72, 72);
    font-family: system-ui;

}


//--------From----------------------------------//
`


// ----------Progess------------------------//
export const ProgessStyleDiv = styled.div`
    width:${(props) => props.width || "100%"};
    padding: 2px;
    margin: 0.8rem 0;
`
export const ProgessStyleDivline = styled.div`
    border:${(props) => props.border || "1px white solid"};
    width:${(props) => props.width || "100%"};
    height:${(props) => props.height || "1rem"};
    border-radius:${(props) => props.borderRadius || "1rem"};
    background-color: ${(props) => props.bgcolour || "#3f3f3f"};
`
export const ProgessStyleDivfilline = styled.div`
    width:${(props) => props.width || "10%"};
    background-color: ${(props) => props.bgcolour || "#ff3f45"};
    border-radius:${(props) => props.borderRadius || "1rem"};
    padding: 6px;
    padding: ${(props) => props.padding || "7px"};
    
// ----------------Progess------------------------//
`

// ----------------Button------------------------//
export const ButtonStyle = styled.button`
    border-radius: 0.5rem;
    border:${(props) => props.border || "none"};
    color:${(props) => props.color || "white"};
    background-image: linear-gradient(${(props)=> props.bgcolour||"to right, rgb(242 109 133), rgb(255, 70, 63)"});
    width:${(props) => props.width || "8rem"};
    height:${(props) => props.height || ""};
    padding: ${(props) => props.padding || "1rem"};
    margin: ${(props) => props.margin || "1rem"};

;
// ----------------Button------------------------//
`
// ----------------Select Button------------------------//
export const SelectOptionStyle = styled.select`
    width:${(props) => props.width || "26rem"};
    height:${(props) => props.height || "3rem"};
    margin: ${(props) => props.margin || "0rem 0px 1rem 0px"};
    padding-left: ${(props) => props.paddingLeft || "1rem"};
    outline: none;
    font-size: 1rem;
    color: #878784;
    border-radius: 10px;
 // ----------------Select Button------------------------//

`
 // ----------------Choice Button------------------------//
export const ChoiceDiv = styled.div`
    width:${(props) => props.width || "26rem"};
    height:${(props) => props.height || "3rem"};
    margin: ${(props) => props.margin || "0rem 0px 0rem 0px"};
    padding-left: ${(props) => props.paddingLeft|| "11px"};
    font-size: 1rem;
    color: #878784;
    border-radius: 10px;
    border:1px #878784 solid ;
    text-align: left;
    display: flex;
    justify-content: left;
    align-items: center;
    :hover{
        background-color: #a8580f;
        color: white;
    }

// ----------------Choice Button------------------------//
    
`

export const ChoiceBtn = styled.div`
    padding: 6px 16px;
    color: rgb(104, 102, 102);
    background-color: ${(props) => props.bgcolour || "rgb(217, 208, 208);"};
    border-radius: 15px;
    margin-right: 17px;
    margin-bottom: 15px;
    font-size: smaller;
    cursor: pointer;
    &:hover{
        background: rgb(122, 121, 121);
        color: rgb(33, 32, 32);
        :active{
            background-color: #a8580f;
            color: white;
        }
    }
  
    
`

/// --------------------Pages---------------------------------------------------------//
export const RisgistationPage1 = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

.Risgistation_content{
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 1rem;
    color: white;
    margin-top: 5rem;

}

img.rig_img_log {
    width: 12rem;
}
input.resgistation_input {
    width: 99%;
    height: 3rem;
    padding-left: 1rem;
    margin: 0rem 0px 1rem 0px;
    outline: none;
    border-radius:10px;
    border: 1px #e2e2e2 solid;

}


.registation_form {
    border-radius: 1rem;
    background-color: white;
    padding: 1rem;
    color: black;
    span{
        color: red;
    }
}

.risgistation_img_log {
    text-align: center;
}
.btn {
   text-align: center;

}
/* -------------?loginpage---------? */
h2.loginHeading {
    margin: 1rem 0;
}
p.fogotpassword {
    float: right;
    color: #ff3f45; 
    cursor: pointer;
}

//----------------------------------------Ris-page2------------------------------//
.Risgistation_content2{
    display: flex;
    width: 80%;
    justify-content: space-around;
    /* height: 80vh; */
    padding-bottom: 1rem;
    color: white;
    justify-content: right;
}
.Welcome {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-bottom: 1rem;
}
.gender_btn {
    text-align: center;
}

/* -------Ris_page 3-------------------- */
.body_heigth {
    display: flex;
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
.trib_irrelevant input{
    width: 3rem;
    height: 3rem;
    margin: 0;
}
/* -------Ris_page 6-------------------- */
input.textarea {
    width: 26rem;
    height: 15rem;
    text-align: center;
    outline: none;
    border-radius: 1rem;
    border: 1px #e2e2e2 solid;
    margin: 1rem 0;
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

/* ----------Rist Page8---------------- */
.Risgistation_content8{
    width: 80%;
    padding-bottom: 1rem;
    color: white;
    margin: auto;


}
.progessdiv {
    width: 50%;
    margin: auto;
    margin-bottom: 1rem
}

.cartReg{
    width: 14rem;
    height: 18rem;
    border: 1px #d9dddd solid;
    margin: 1rem;
    padding: 1rem;
    text-align: center;
    position: relative;
    color: #8b8888;
    border-radius:1rem;
}
 
.cartIcon {
    width: 4rem;
    border: 1px black solid;
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
    transform: translate(-50%,-3%);
}
.registation_form8 {
 
    display: flex;
    font-size: small;
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

////-res Page10------------------

.btnchosediv {
    display: flex;
}
.lable {
    font-weight: 800;
    margin-top: 1rem ;
    font-size: small;
    color: #4a4848;
}

.text10 p {
    margin: 1rem 0;
    font-family: math;

}


`
