import React from "react";
import styled from "styled-components";

const Testimonial = () => {
  return (
    <>
      <StyledTestimonial>
        <div className="wrapper2">
          <div className="con-testimonial">
            <h2 className="Testimonials">Testimonials</h2>
          </div>
          <div className="Testimonials-features">
            <div className="container2">
              <label for="Name">Name</label>
              <br />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Name"
              />
              <br />
            </div>

            <div className="container2-1">
              <label for="pass" className="Email">
                Email
              </label>
              <br />
              <input
                type="email"
                id="email"
                pattern=".+@globex\.com"
                size="30"
                placeholder="Enter Email"
                required
              />
              <br />
            </div>
            <div className="testinomial-message">
              <label for="pass" className="Testinoamial-mssge">
                Testimonal
              </label>
              <br />
              <input
                type="text"
                id="message"
                name="message"
                required
                minlength="4"
                maxlength="8"
                size="10"
                className="input-message"
                placeholder="Add Testimonial"
              />
            </div>
          </div>
          <div className="btn-btn-1">
            <h2 className="Submit-btn">Submit</h2>
          </div>
        </div>
      </StyledTestimonial>
    </>
  );
};

export default Testimonial;
const StyledTestimonial = styled.div`
  .con-testimonial {
    width: 100%;
    height: 88px;
    background: #f0f0f0;
  }
  .Testimonials {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.05rem;
    color: #242424;
    width: 125px;
    height: 28px;
  }
  .container2 {
    width: 36px;
    height: 20px;
    line-height: 40px;
  }
  .Name {
    width: 39px;
    height: 20px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #242424;
  }
  #username {
    box-sizing: border-box;
    width: 870px;
    height: 56px;
    background: #ffffff;
    padding-left: 10px;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
  }
  .container2-1 {
    width: 36px;
    height: 20px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #242424;
  }
  #email {
    box-sizing: border-box;
    width: 865px;
    padding-left: 10px;
    height: 56px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
  }
  .Testinoamial-mssge {
    width: 77px;
    height: 20px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #242424;
  }
  .input-message {
    box-sizing: border-box;
    width: 865px;
    height: 157px;
    background: #ffffff;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    padding-bottom: 8%;
    padding-left: 10px;
  }
  .btn-btn-1 {
    width: 160px;
    height: 48px;
    background: linear-gradient(268.55deg, #ff483c 0%, #ff2c5a 100%);
    border-radius: 10px;
  }
  .Submit-btn {
    width: 53px;
    height: 22px;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
  }
`;
