import React from "react";
import { Space, Input } from "antd";
import styled from "styled-components";
const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
      <ResetPass>
        <div className="InnerResetPass">
          <div className="oldPass">
            <p> Enter Old Password</p>
            <Input placeholder="Enter" className="InputMeth" />
          </div>
          <div className="oldPass">
            <p>Enter New Password</p>
            <Space direction="vertical">
              <Input.Password
                placeholder="input password"
                className="InputMeth"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
              />
            </Space>
          </div>
          <div className="oldPass">
            <p>Confirm New Password</p>
            <Space direction="vertical">
              <Input.Password
                placeholder="input password"
                className="InputMeth"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
              />
            </Space>
          </div>
          <div className="btnPass">
            <div className="ChangePass">
              <button className="PassChan">Change New Pasword</button>
            </div>
          </div>
        </div>
      </ResetPass>
    </>
  );
};

export default ResetPassword;
const ResetPass = styled.div`
  width: 100%;
  font-family: "Poppins", sans-serif;

  .InnerResetPass > div:not(:first-child) {
    margin-top: 1.5rem;
  }

  .oldPass p {
    font-size: 15px;
    font-weight: 500;
    color: #242424;
  }
  .InputMeth {
    width: 440px;
    height: 56px;
    border-radius: 10px;
    height: 56px;
    padding-left: 24px;
  }
  .ChangePass {
    width: 226px;
    height: 48px;
  }
  .PassChan {
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    color: #fbfaf8;
    font-size: 15px;
    cursor: pointer;
  }
  .btnPass {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1026px) {
    .InputMeth {
      width: 330px;
    }
  }
  @media (max-width: 853px) {
    .InputMeth {
      width: 280px;
    }
  }
  @media (max-width: 711px) {
    .InputMeth {
      width: 230px;
    }
  }
  @media (max-width: 593px) {
    .InputMeth {
      width: 190px;
    }
  }
`;
