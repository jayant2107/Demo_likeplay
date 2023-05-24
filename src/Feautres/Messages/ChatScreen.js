import React from "react";
import { MessageList, Input } from "react-chat-elements";
import styled from "styled-components";
import pImg from "../../Assets/Images/Chat/profileImg.png"
import img1 from "../../Assets/Images/Chat/call-calling.png"
import img2 from "../../Assets/Images/Chat/video.png"
import img3 from "../../Assets/Images/Chat/more.png"
import logo1 from "../../Assets/Images/Chat/trash.png"
import logo2 from "../../Assets/Images/Chat/minus-cirlce.png"
import logo3 from "../../Assets/Images/Chat/logo1.png"
// Image
import ImagePic from "../../Assets/Images/chatScreenImg.png";
import smilePic from "../../Assets/Images/chatScreenhappy.png";
import sendPic from "../../Assets/Images/chatScreenSend.png";
import { Popover } from "antd";



const ChatScreen = () => {
  const content = (
    <ContainerStyle>

    <div className="Content">
      <div className="One">
        <div className="ImgDiv">
      <img src={logo2} alt="" className="Logo"/></div>
      <p>Block</p>
      </div>
      <div className="Two">
      <div className="ImgDiv">
      <img src={logo1} alt="" className="Logo"/></div>
      <p>Delete</p>
      </div>
      <div className="Three">
           <div className="ImgDiv">
      <img src={logo3} alt="" className="Logo"/></div>
      <p>Report</p>
      </div>
    </div>
    </ContainerStyle>
  );

  return (
    <>
    <HeaderStyle>      
        
        <div className="Header"> 
      <div className="MainDiv">
       <div className="Left">
        <div className="Image"> <img className="img" alt="" src={pImg} /> </div>
        <div>
          <p className="Name">Julia Roberts</p>
          <p className="Details"> Last active at 5:00PM</p>
        </div>
       </div>
       <div className="Right">
        <div className="container">
          <div className="call"> <img src={img1} alt="" className=" calling"/> </div>
          <div className="videoCall"> <img src={img2} alt="" className=" VC"/></div>
          <div className="dot">
            <Popover placement="bottomRight"  content={content} trigger="click" >
          <img src={img3} alt="" className="dotS"/>
          </Popover>
          </div>
        </div>
       </div>
      </div>
      <hr className="HRline" ></hr>
      </div>
      </HeaderStyle>

    
    <ChatScreenCss>

      <div className="Today">Today</div>
      <MessageList
        className="messageList"
        lockable={true}
        toBottomHeight={"100%"}
        onMessageFocused={false}
        dataSource={[
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
        ]}
      />

      <div className="chatBox">
        <img src={ImagePic} alt="imgSelect" />
        <div className="inputDiv">
          <Input
            className="ChatInputBox"
            placeholder="Type here..."
            multiline={true}
          />
          <img className="input-icon" src={smilePic} alt="smilePic" />
          <img className="input-icon2" src={sendPic} alt="sendPic" />
        </div>
      </div>
    </ChatScreenCss>
    </>
  );
};

export default ChatScreen;

const ChatScreenCss = styled.div`
  position: realtive;
  width: 100%;
  height: 100vh;
  font-family: "Poppins";
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: end;
  z-index: 0;

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
`;
const HeaderStyle = styled.div`
width: 100%;
background-color: white;
position: relative;
z-index: 1;
.pop{
  width: 151px;
height: 140px;
background: #FFFFFF;
border: 1px solid #E2E2E2;
box-shadow: 0px 16px 32px rgba(20, 30, 73, 0.05);
border-radius: 10px;
}
.MainDiv{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
height: 100px;
margin: auto;
  
}
.Left{
display : flex;
gap: 10px;
align-items: center;

}
.container{
  display: flex;
  gap:10px;
}
.HRline {
  color:red;
  background-color:red;
}
.Name{
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
letter-spacing: 0.05em;
color: #242424;
} 
.Details{
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
letter-spacing: 0.05em;
color: #7B7F91;

}
`;

const ContainerStyle= styled.div`
padding: 20px;

.Content p{
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.05em;
text-transform: capitalize;
color: #7B7F91;
}
.One{
  display: flex;
gap: 10px;

}
.Two{
  display:flex;
  gap: 10px;
  margin-top: 10px;
}

.Three{
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.ImgDiv{
  width: 25px;
  height: 25px;
}
.Logo{
  height: 100%;
  width: 100%;

}
`;