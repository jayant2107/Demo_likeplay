import React from "react";
import { Space, Input } from "antd";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      Password: "",
      NewPassword: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      Password: Yup.string().required("Password is Required"),
      NewPassword: Yup.string().required("Required"),
      ConfirmPassword: Yup.string().oneOf(
        [Yup.ref("NewPassword"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <ResetPass>
        <form onSubmit={formik.handleSubmit}>
          <div className="InnerResetPass">
            <div className="oldPass">
              <p> Enter Old Password</p>
              <Input
                id="Password"
                placeholder="Enter"
                className="InputMeth"
                name="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Password}
              />
            </div>
            {formik.touched.Password && formik.errors.Password ? (
              <div>{formik.errors.Password}</div>
            ) : null}
            <div className="oldPass">
              <p>Enter New Password</p>
              <Space direction="vertical">
                <Input.Password
                  placeholder="input password"
                  className="InputMeth"
                  id="NewPassword"
                  name="NewPassword"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.NewPassword}
                />
              </Space>
            </div>
            {formik.touched.NewPassword && formik.errors.NewPassword ? (
              <div>{formik.errors.NewPassword}</div>
            ) : null}
            <div className="oldPass">
              <p>Confirm New Password</p>
              <Space direction="vertical">
                <Input.Password
                  placeholder="input password"
                  className="InputMeth"
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  visibilityToggle={{
                    visible: confirmPassword,
                    onVisibleChange: setConfirmPassword,
                  }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ConfirmPassword}
                />
              </Space>
            </div>
            {formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? (
              <div>{formik.errors.ConfirmPassword}</div>
            ) : null}
            <div className="btnPass">
              <div className="ChangePass">
                <button className="PassChan" type="submit">
                  Change New Pasword
                </button>
              </div>
            </div>
          </div>
        </form>
      </ResetPass>
    </>
  );
};

export default ResetPassword;
const ResetPass = styled.div`
  width: 95%;
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
    width: 70%;
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
