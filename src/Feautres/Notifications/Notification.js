import React from "react";
import styled from "styled-components";
import { Homecouple } from "../../Utils/images/Publichomeimg";

export default function Notification() {
  return (
    <div>
      <NotificationHeader>
        <header>Notifications</header>
        <span>Clear</span>
      </NotificationHeader>

      <NotificationContainer>
        <section>
          <div className="LeftSection">
            <img src={Homecouple} alt="" />
            <div>
              <p>Julia Roberts</p>
              <label>Sent you a message</label>
            </div>
          </div>
          <span>7 Feb 2023</span>
        </section>

        <section>
          <div className="LeftSection">
            <img src={Homecouple} alt="" />
            <div>
              <p>Julia Roberts</p>
              <label>Sent you a message</label>
            </div>
          </div>
          <span>7 Feb 2023</span>
        </section>

        <section>
          <div className="LeftSection">
            <img src={Homecouple} alt="" />
            <div>
              <p>Julia Roberts</p>
              <label>Sent you a message</label>
            </div>
          </div>
          <span>7 Feb 2023</span>
        </section>

        <section>
          <div className="LeftSection">
            <img src={Homecouple} alt="" />
            <div>
              <p>Julia Roberts</p>
              <label>Sent you a message</label>
            </div>
          </div>
          <span>7 Feb 2023</span>
        </section>
      </NotificationContainer>
    </div>
  );
}

const NotificationContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px 0;

  section {
    width: 96%;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    border-bottom: 2px solid #e2e2e2;
    display: flex;
    justify-content: space-between;

    .LeftSection {
      display: flex;

      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 40px;
      }

      div {
        margin: 0 10px;

        p {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.05em;
          color: #242424;
        }
        label {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 0.05em;
          color: #7b7f91;
        }
      }
    }

    span {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
      text-align: right;
      letter-spacing: 0.05em;
      color: #7b7f91;
    }
  }
`;

const NotificationHeader = styled.div`
  width: 100%;
  height: 88px;
  background: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 20px;

  header {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #242424;

    @media (max-width: 800px) {
      color: red;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4.5px 20px;
    background: #ffffff;
    border-radius: 6px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #242424;
  }
`;
