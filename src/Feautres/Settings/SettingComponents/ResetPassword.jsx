import React from "react";
import { Space, Input } from "antd";
import styled from "styled-components";
const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
      <ResetPass>
        <div className="InnerResetPass">
          <div>
            <p> Enter Old Password</p>
            <Input placeholder="Enter" className="InputMeth" />
          </div>
          <div>
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
          <div>
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
            <button className="PassChan">Change New Pasword</button>
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

  p {
    font-size: 12px;
  }
  .InputMeth {
    width: 446px;
    border-radius: 10px;
    height: 56px;
    padding-left: 24px;
  }
  .PassChan {
    width: 226px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border: none;
    height: 48px;
    border-radius: 10px;
    color: #fbfaf8;
    font-size: 15px;
  }
  .btnPass {
    margin-left: 6rem;
  }
`;
