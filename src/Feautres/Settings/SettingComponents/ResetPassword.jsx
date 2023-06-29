import React, { useState } from "react";
import { Space, Input, Spin } from "antd";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { changeUserPassword } from "Services/collection";
import { toast } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
const ResetPassword = () => {
  const [loading,setloading]=useState(false)
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
    handlesubmit(values)
    },
  });

  const handlesubmit =async(values)=>{
    setloading(true)
    const req={
      "old_password":values.Password,
      "new_password":values.NewPassword


    }
    const res= await changeUserPassword(req)
    if(res?.status===200){
      toast.success(res?.message)
      setloading(false)

    }
    else{
      toast.error(res?.message)
      setloading(false)
    }
  }
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
        color:"#242424"
      }}
      spin
    />
  );
  
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
              <p className="error">{formik.errors.Password}</p>
            ) : null}
            <div className="oldPass">
              <p>Enter New Password</p>
              <Space direction="vertical" style={{width:"100%"}}>
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
              <p className="error">{formik.errors.NewPassword}</p>
            ) : null}
            <div className="oldPass">
              <p>Confirm New Password</p>
              <Space direction="vertical" style={{width:"100%"}}>
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
              <p className="error">{formik.errors.ConfirmPassword}</p>
            ) : null}
            <div className="btnPass">
              {loading?( <LoaderWrapper>
                            <Spin indicator={antIcon} />
                          </LoaderWrapper>):( <div className="ChangePass">
                <button className="PassChan" type="submit">
                  Change New Pasword
                </button>
              </div>)}
             
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
  .error{
    color:red;
    padding:5px;
    font-size:14px;
  }

  .oldPass {

    p {
      font-size: 15px;
      font-weight: 500;
      color: #242424;
     
    }
    
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
    @media(max-width:550px){
      width:100%;
    }
   
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
      width: 100%;
    }
  }
`;
export const LoaderWrapper = styled.div`
  width: 100%;
  padding: 10px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

