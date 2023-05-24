import React from "react";
import styled from "styled-components";

export default function Testimonial() {
  return (
    <>
      <Testimonialheader>
        <p>Testimonial</p>
      </Testimonialheader>
      <Maincontent>
        <div className="mainform">
          <div className="Testimonial-form">
            <label>Name</label>
            <br></br>
            <input placeholder="Enter Name" />
          </div>
          <div className="Testimonial-form">
            <label>Email</label>
            <br></br>
            <input placeholder="Enter Email" />
          </div>
          <div className="Testimonial-form">
            <label>Testimonal</label>
            <br></br>
            <textarea placeholder="Add Testimonial"></textarea>
          </div>
        </div>
        <div className="submit-btn">
          <button className="submit">Submit</button>
        </div>
      </Maincontent>
    </>
  );
}
const Testimonialheader = styled.div`
  height: 88px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  P {
    font-size: 18px;
    letter-spacing: 2px;
    padding: 0px 20px;
    color: #242424;
  }
`;
const Maincontent = styled.div`
  .mainform {
    padding: 20px;
  }
  .Testimonial-form {
    padding: 10px 0px;

    label {
      font-size: 14px;
      color: #242424;
      font-weight: 500;
    }
    input {
      width: 100%;
      padding: 15px;
      margin: 10px 0px;
      border: 1px solid #e2e2e2;
      border-radius: 10px;
      &:focus {
        outline: none;
      }
    }
    textarea {
      width: 100%;
      margin: 10px 0px;
      border: 1px solid #e2e2e2;
      border-radius: 10px;
      resize: none;
      height: 130px;
      padding: 15px;
      outline:none;
    }
   
  }
  .submit-btn {
    display: flex;
    justify-content: center;
  }
  .submit {
    padding: 10px 40px;
    font-size: 16px;
    background: linear-gradient(90deg, #ff483c 100%, #ff2c5a 100%);
    border: none;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`;
