import React from "react";
import "../../Style/Settings/Setting.css";
import { Space, Input } from "antd";
const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <>
      <div className="ResetPass">
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
          <div>
            <button className="PassChan">Change New Pasword</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
