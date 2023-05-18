
import styled from "styled-components"


//--------backgournd_img----------------------------------//

export const RisgistionBgImg = styled.div`
background:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),url(${(props) => props.imgUrl});
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
    color: #626060;
    font-weight: 800;
    font-family: monospace;
    font-size: 14px;
    margin-top: 1rem;
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
    background-color: ${(props) => props.bgcolour || "#ff3f45"};
    border:${(props) => props.border || "none"};
    color:${(props) => props.color || "white"};
    /* background-image: linear-gradient(to right, rgb(242 109 133), rgb(255, 70, 63)); */
    width:${(props) => props.width || "8rem"};
    height:${(props) => props.height || ""};
    padding: ${(props) => props.padding || "1rem"};
    margin: ${(props) => props.margin || "1rem"};

;
// ----------------Button------------------------//
`

export const SelectOptionStyle = styled.select`
    width:${(props) => props.width || "26rem"};
    height:${(props) => props.height || "3rem"};
    margin: ${(props) => props.margin || "1rem 0"};
    padding-left: ${(props) => props.paddingLeft || "1rem"};
    outline: none;
    font-size: 1rem;
    color: #878784;

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
    margin: 1rem 0;
    outline: none;

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

`
