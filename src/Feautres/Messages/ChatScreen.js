import React, { useState } from "react";
import { MessageList, Input, MessageBox } from "react-chat-elements";
import styled from "styled-components";
import pImg from "../../Assets/Images/Chat/profileImg.png";
import img1 from "../../Assets/Images/Chat/call-calling.png";
import img2 from "../../Assets/Images/Chat/video.png";
import img3 from "../../Assets/Images/Chat/more.png";
import logo1 from "../../Assets/Images/Chat/trash.png";
import logo2 from "../../Assets/Images/Chat/minus-cirlce.png";
import logo3 from "../../Assets/Images/Chat/logo1.png";
// Image
import ImagePic from "../../Assets/Images/chatScreenImg.png";
import smilePic from "../../Assets/Images/chatScreenhappy.png";
import sendPic from "../../Assets/Images/chatScreenSend.png";
import { Button, Popover } from "antd";
import { useLocation } from "react-router-dom";
import logo5 from "../../Assets/Images/Matches Image/logo1 (2).png";
import { db } from '../../Firebase/FirebaseConfig';
import { ref, set } from "firebase/database";



const ChatScreen = () => {

  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 3000);
  };
  
  let location = useLocation();
  let data1 = location.state;


const sendmessage=async()=>{
  console.log("testing")

}

  const data = data1;
  const content = (
    <ContainerStyle>
      <div className="Content">
        <div className="One">
          <div className="ImgDiv">
            <img src={logo2} alt="" className="Logo" />
          </div>
          <p>Block</p>
        </div>
        <div className="Two">
          <div className="ImgDiv">
            <img src={logo1} alt="" className="Logo" />
          </div>
          <p>Delete</p>
        </div>
        <div className="Three">
          <div className="ImgDiv">
            <img src={logo3} alt="" className="Logo" />
          </div>
          <p>Report</p>
        </div>
      </div>
    </ContainerStyle>
  );

  const firstData = [
    {
      position: "left",
      type: "text",
      text: "Hi Jake, how are you? I saw on the app that we've crossed paths several times this week 😄",
      date: "01-05-2023",
      notch: false,
      forwarded: true,
      className: "sameSide rightSide",
    },
    {
      position: "right",
      type: "text",
      text: "Haha truly! Nice to meet you Grace! What about a cup of coffee today evening? ☕️ ",
      notch: false,
      status: "read",
      className: "sameSide leftSide",
    },
    {
      position: "left",
      type: "text",
      text: "Sure, let’s do it! 😊 ",
      notch: false,
      className: "sameSide rightSide",
    },
    {
      position: "right",
      type: "text",
      text: " Great I will write later the exact time and place. See you soon! ",
      notch: false,
      status: "received",
      className: "sameSide leftSide",
    },
    {
      position: "left",
      type: "text",
      text: "Hi Jake, how are you? I saw on the app that we've crossed paths several times this week 😄",
      date: "01-05-2023",
      notch: false,
      forwarded: true,
      className: "sameSide rightSide",
    },
    {
      position: "right",
      type: "text",
      text: "Haha truly! Nice to meet you Grace! What about a cup of coffee today evening? ☕️ ",
      notch: false,
      status: "read",
      className: "sameSide leftSide",
    },
    {
      position: "left",
      type: "text",
      text: "Sure, let’s do it! 😊 ",
      notch: false,
      className: "sameSide rightSide",
    },
    {
      position: "right",
      type: "text",
      text: " Great I will write later the exact time and place. See you soon! ",
      notch: false,
      status: "received",
      className: "sameSide leftSide",
    },
    {
      position: "left",
      type: "text",
      text: "Hi Jake, how are you? I saw on the app that we've crossed paths several times this week 😄",
      date: "01-05-2023",
      notch: false,
      forwarded: true,
      className: "sameSide rightSide",
    },
    {
      position: "right",
      type: "text",
      text: "Haha truly! Nice to meet you Grace! What about a cup of coffee today evening? ☕️ ",
      notch: false,
      status: "read",
      className: "sameSide leftSide",
    },
    {
      position: "left",
      type: "text",
      text: "Sure, let’s do it! 😊 ",
      notch: false,
      className: "sameSide rightSide",
    },
    {
      position: "right",
      type: "text",
      text: " Great I will write later the exact time and place. See you soon! ",
      notch: false,
      status: "received",
      className: "sameSide leftSide",
    },
  ];
  const secondData = [
    {
      position: "left",
      type: "text",
      text: "I really love your profile, I hope you can admire me back, so we can chat. 😄",
      notch: false,
      forwarded: true,
      className: "sameSide rightSide",
    },
  ];

  return (
    <>
  

      <ChatScreenCss checkType={data}>

      <HeaderStyle>
        <div className="MainDiv">
          <div className="Left">
            <div className="Image">
              {" "}
              <img className="img" alt="" src={pImg} />{" "}
            </div>
            <div>
              <p className="Name">Julia Roberts</p>
              <p className="Details"> Last active at 5:00PM</p>
            </div>
          </div>
          <div className="Right">
            {!data &&
              
              <div className="container">
              <div className="logo">
                <img src={img1} alt="" className=" Logo1" />{" "}
              </div>
              <div className="logo">
                <img src={img2} alt="" className=" Logo1" />
              </div>
              <div className="logo">
                <Popover
                  placement="bottomRight"
                  content={content}
                  trigger="click"
                >
                  <img src={img3} alt="" className="Logo1" />
                </Popover>
              </div>
            </div>
              }
          </div>
        </div>
      </HeaderStyle>

        <div className="Today">Today</div>
<div className="MessageContainer" >

        <MessageList
          className="messageList"
          lockable={true}
          toBottomHeight={"100%"}
          onMessageFocused={false}
          dataSource={data ? secondData : firstData}
        />

        { data && 
          <div className="ButtonsDiv">
          <Button size="small"
           className="Button1"
          type="primary"
          loading={loadings[2]}
          onClick={() => enterLoading(2)}> Admire Back
          </Button>

          <Button className="Button2"
          size="small"
          type="primary"
          loading={loadings[1]}
          onClick={() => enterLoading(1)}>
            <img src={logo5} alt="" />
          </Button>
        
          </div>}
</div>
         
         {!data && <div className="chatBox">
            <img src={ImagePic} alt="imgSelect" />
            <div className="inputDiv">
              <Input
                className="ChatInputBox"
                placeholder="Type here..."
                multiline={true}
              />
              <img className="input-icon" src={smilePic} alt="smilePic" />
              <img className="input-icon2" src={sendPic} alt="sendPic" onClick={sendmessage} />
            </div>
          </div>}
        

      </ChatScreenCss>
    </>
  );
};

export default ChatScreen;

const ChatScreenCss = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: "Poppins";
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: ${({checkType})=> checkType? "center":"end"};
  z-index: 0;


  .MessageContainer {
    width:100%;
    height:auto;
    overflow-y: scroll;
    
  }
.MessageContainer::-webkit-scrollbar {
    display: none;
}
  .Today {
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    color: #7b7f91;
  }
  .chatBox {
    width: 100%;
    height: 20vh;
    display: grid;
    grid-template-columns: 3px 95%;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    width: 100%;

    img {
      cursor: pointer;
    }
  }
  .inputDiv {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ChatInputBox textarea {
    width: 100%;
    height: 50px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 6px;
    padding: 1rem 75px 1rem 1rem;
    overflow: hidden;
    font-weight: 100;
  }
  .input-icon {
    position: absolute;
    right: 70px;
  }
  .input-icon2 {
    position: absolute;
    right: 35px;
  }

  .messageList {
    width: 100%;
    // height: 80vh;
    display: flex;
    align-items: end;
  }
  .rce-mbox {
    max-width: 70%;
    box-shadow: none;
  }
  .sameSide {
    margin: 32px 0;
    font-weight: 400;
    font-size: 14px;
    color: #242424;
    border-radius: 6px;
    border: 1px solid #ffffff;
  }

  .rightSide > div {
    background-color: #f0f0f0;
  }
  .leftSide > div {
    background: #ffffff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.08);
  }
  .Button1 {
    width: 160px;
    height: 48px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border-radius: 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: #ffffff;
    border: none;
    
  }
  .Button2 {
    width: 160px;
    height: 48px;
    background: #f2f2f2;
    border-radius: 10px;
    border: none;
    color: red;
    font-weight: 800;
    font-size:30px ;

    &:hover {
    background: #F2F2F2;
    color : red ;
    }
  }
  .ButtonsDiv {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
`;
const HeaderStyle = styled.div`
  width: 100%;
  height: 88px;
  position: absolute;
    top: 0;
    background: white;
    z-index: 2;
  border-bottom:  1px solid #E2E2E2 ;
  
  .MainDiv {
    /* position: absolute; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    height: 88px;
    padding: 20px ;
  }


  .Left {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .container {
    display: flex;
    gap: 10px;
  }
  .HRline {
    border: 1px solid #e2e2e2;
  }
  .Name {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.05em;
    color: #242424;
  }
  .img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  .Image {
    width: 60px;
    height: 60px;
  }
  .Details {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.05em;
    color: #7b7f91;
  }
  .Logo1{
height: 100%;
width: 100%;
  }
  .logo{
    width: 27px;
height: 27px;
&:hover{
  cursor: pointer;
}
  }
`;

const ContainerStyle = styled.div`
  padding: 20px;
 

  .Content p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #7b7f91;
    &:hover{
    cursor: pointer;
  }
  }
  .One {
    display: flex;
    gap: 10px;
  }
  .Two {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .Three {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
  .ImgDiv {
    width: 25px;
    height: 25px;
  }
  .Logo {
    height: 100%;
    width: 100%;
    &:hover{
    cursor: pointer;
  }
  }
`;

