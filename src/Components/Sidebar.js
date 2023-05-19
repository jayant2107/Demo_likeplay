import React, { useState } from "react";
import styled from "styled-components";

import { sidebarimage } from "../Utils/Images";
import "../Style/global.css";

import { Popover } from "antd";
import {
  Admirers,
  Admiring,
  FAQ,
  Home,
  Matches,
  Menu,
  Messages,
  Notification,
  Setting,
  Subscription,
  Testimonial,
} from "../Utils/Logo";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [colorsetting, setcolorsetting] = useState(false);
  const [Admiringcolor, setAdmiringcolor] = useState(false);
  const [Admirerscolor, setAdmirerscolor] = useState(false);
  const [messagescolor, setmessagescolor] = useState(false);
  const [Notificationcolor, setNotificationcolor] = useState(false);
  const [Matchescolor, setMatchescolor] = useState(false);
  const [Settingcolor, setSettingcolor] = useState(false);
  const [Subscriptioncolor, setsubscriptioncolor] = useState(false);
  const [FAQcolor, setFAQcolor] = useState(false);
  const [Testimonialcolor, setTestimonialcolor] = useState(false);
  const content = (
    <Morecontent>
      <p>Verification</p>
      <p>Refer to friends</p>
      <p style={{ color: "red" }}>Logout</p>
    </Morecontent>
  );
  const primarycolor = "#A8580F";
  const secondarycolor = "#7B7F91";
  const active = window.location.pathname;
  console.log(active, "active");
  const Navigate = useNavigate();
  return (
    <>
      <Sidebarwrapper>
        <Mainlogo>
          <img src={sidebarimage} alt="" style={{ color: "red" }} />
        </Mainlogo>
        <Slinkcontainer
          onMouseEnter={() => setcolorsetting(true)}
          onMouseLeave={() => setcolorsetting(false)}
        >
          <div
            className="content-list"
            onClick={() => Navigate("/Layout/FeedPage")}
          >
            <Slogo>
              <Home
                color={
                  colorsetting || active == "/Layout/FeedPage"
                    ? primarycolor
                    : secondarycolor
                }
              />
            </Slogo>
            <Slabel active={active === "/Layout/FeedPage"}>
              <p>Home</p>
            </Slabel>
          </div>
        </Slinkcontainer>
        <Slinkcontainer
          onMouseEnter={() => setAdmiringcolor(true)}
          onMouseLeave={() => setAdmiringcolor(false)}
        >
          <div className="content-list">
            <Slogo>
              <Admiring color={Admiringcolor ? primarycolor : secondarycolor} />
            </Slogo>
            <Slabel>
              <p>Admiring</p>
            </Slabel>
          </div>
        </Slinkcontainer>
        <Slinkcontainer
          onMouseEnter={() => setAdmirerscolor(true)}
          onMouseLeave={() => setAdmirerscolor(false)}
        >
          <div className="content-list">
            <Slogo>
              <Admirers color={Admirerscolor ? primarycolor : secondarycolor} />
            </Slogo>
            <Slabel>
              <p>Admirers</p>
            </Slabel>
          </div>
        </Slinkcontainer>
        <Slinkcontainer
          onMouseEnter={() => setmessagescolor(true)}
          onMouseLeave={() => setmessagescolor(false)}
        >
          <div className="content-list">
            <Slogo>
              <Messages color={messagescolor ? primarycolor : secondarycolor} />
            </Slogo>
            <Slabel>
              <p>Messages</p>
            </Slabel>
          </div>
        </Slinkcontainer>
        <Slinkcontainer
          onMouseEnter={() => setNotificationcolor(true)}
          onMouseLeave={() => setNotificationcolor(false)}
        >
          <div className="content-list">
            <Slogo>
              <Notification
                color={Notificationcolor ? primarycolor : secondarycolor}
              />
            </Slogo>
            <Slabel>
              <p>Notification</p>
            </Slabel>
          </div>
        </Slinkcontainer>
        <Slinkcontainer
          onMouseEnter={() => setMatchescolor(true)}
          onMouseLeave={() => setMatchescolor(false)}
        >
          <div
            className="content-list"
            onClick={() => Navigate("/Layout/Matches")}
          >
            <Slogo>
              <Matches color={Matchescolor || active =='/Layout/Matches' ? primarycolor : secondarycolor} />
            </Slogo>
            <Slabel active={active==="/Layout/Matches"}>
              <p>Matches</p>
            </Slabel>
          </div>
        </Slinkcontainer>
        <Slinkcontainer
          onMouseEnter={() => setSettingcolor(true)}
          onMouseLeave={() => setSettingcolor(false)}
        >
          <div
            className="content-list"
            onClick={() => Navigate("/Layout/Settings")}
          >
            <Slogo>
              <Setting
                color={
                  Settingcolor || active === "/Layout/Settings"
                    ? primarycolor
                    : secondarycolor
                }
              />
            </Slogo>
            <Slabel active={active === "/Layout/Settings"}>
              <p>Setting</p>
            </Slabel>
          </div>
        </Slinkcontainer>
        <Slinkcontainer
          onMouseEnter={() => setsubscriptioncolor(true)}
          onMouseLeave={() => setsubscriptioncolor(false)}
        >
          <div className="content-list">
            <Slogo>
              <Subscription
                color={Subscriptioncolor ? primarycolor : secondarycolor}
              />
            </Slogo>
            <Slabel>
              <p>Subscription</p>
            </Slabel>
          </div>
        </Slinkcontainer>
        <Slinkcontainer
          onMouseEnter={() => setFAQcolor(true)}
          onMouseLeave={() => setFAQcolor(false)}
        >
          <div className="content-list">
            <Slogo>
              <FAQ color={FAQcolor ? primarycolor : secondarycolor} />
            </Slogo>
            <Slabel>
              <p>FAQs</p>
            </Slabel>
          </div>
        </Slinkcontainer>
        <Slinkcontainer
          onMouseEnter={() => setTestimonialcolor(true)}
          onMouseLeave={() => setTestimonialcolor(false)}
        >
          <div className="content-list">
            <Slogo>
              <Testimonial
                color={Testimonialcolor ? primarycolor : secondarycolor}
              />
            </Slogo>
            <Slabel>
              <p>Testimonial</p>
            </Slabel>
          </div>
        </Slinkcontainer>
        <Slinkcontainer>
          <Popover className="more-popover" content={content}>
            <div className="content-list">
              <Slogo>
                <Menu color="black" />
              </Slogo>

              <Slabel>
                <p style={{ color: "black" }}>More</p>
              </Slabel>
            </div>
          </Popover>
        </Slinkcontainer>
      </Sidebarwrapper>
    </>
  );
}
const Morecontent = styled.div`
  padding: 10px 25px;

  border: 1px solid #dddddd;
  border-radius: 10px;
  color: #7b7f91;
  P {
    padding: 5px;
    font-size: 16px;
    cursor: pointer;
  }
`;
const Sidebarwrapper = styled.div`
  height: 100vh;
  // position:fixed;
  background-color: white;
  overflow:scroll;
  &::-webkit-scrollbar{
    display:none;
  }
  
`;
const Mainlogo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 20px;
  img {
    height: 100px;
    width: 110px;
  }
`;
const Slinkcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;

  &:hover {
    p {
      color: #a8580f;
    }
  }
  .content-list {
    width: 130px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;

    gap: 10px;
  }
`;

const Slogo = styled.div``;
const Slabel = styled.div`
  p {
    font-size: 16px;

    color: ${(prop) => (prop.active ? "#A8580F" : "#7b7f91")};
  }
`;
