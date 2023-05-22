import React from "react";
import { MessageList, Input } from "react-chat-elements";
import styled from "styled-components";

// Image
import ImagePic from "../../Assets/Images/chatScreenImg.png";
import smilePic from "../../Assets/Images/chatScreenhappy.png";
import sendPic from "../../Assets/Images/chatScreenSend.png";

const ChatScreen = () => {
  return (
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
  );
};

export default ChatScreen;

const ChatScreenCss = styled.div`
  position: realtive;
  width: 100%;
  height: 100vh;
  font-family: "Poppins";
  font-style: normal;
  DISPLAY: flex;
    flex-direction: column;
    justify-content: end;

  .Today {
    text-align : center;
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
    position: relavtive;
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
