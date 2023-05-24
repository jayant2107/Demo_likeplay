import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, useFormik } from 'formik';
import * as Yup from "yup";

const Testimonial = () => {

 const formik = useFormik({
  initialValues:{
    name: '',
    email: '',
    testimonial: '',
  },
  validationSchema:  Yup.object().shape({
    email: Yup.string().email("Invalid email").required(" Email is Required*"),
    testimonial: Yup.string().required(" Testimonial is Required*"),
    name: Yup.string().required(" Name is Required*"),
  }),
  onSubmit: async (values, error) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  }
 })  

  return (
    <>
    <StyledTestimonial>
      <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
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
                name="name"
                onError={Boolean(formik.errors.name)}
                values={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Name"
              />              
              {formik.errors.name? <div className="error">{formik.errors.name}</div>:null}
              <br />
            </div>
         
            <div className="container2">
              <label for="Name">Email</label>
              <br />
              <input
                type="text"
                id="username"
                name="email"
                onError={Boolean(formik.errors.email)}
                values={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Email"
              />
              {formik.errors.email? <div className="error">{formik.errors.email}</div>:null}
             
              <br />
            
            </div>

         
              <div className="container2">
              <label for="Name">
                Testimonial
              </label>
              <br />
              <input
              type="textarea" 
              id='usernam'
              name="testimonial"
              values={formik.values.testimonial}
              onError={Boolean(formik.errors.testimonial)}
              onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              placeholder="Add Testimonal"
              />
              {formik.errors.testimonial? <div className="error">{formik.errors.testimonial}</div>:null}

            </div>
 </div>

          <div className="submit">
          <button className="submit-btn" type="submit">Submit</button>
            
          </div>
          </div>
        </div>
        </form>
      {/* </Formik> */}
        {/* </form> */}
      
      </StyledTestimonial>
    </>

  );
};


export default Testimonial;
const StyledTestimonial = styled.div`
.form-control{
  margin-bottom: 20px;
}
.error{
  color: red;
}
  .con-testimonial {
    width: 100%;
    height: 88px;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    padding:0px 10px;
  }
  .Testimonials-features{
    width: 100%;
    padding: 20px;
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
    width: 100%;
    line-height: 40px;
  }
  #username {
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    background: #ffffff;
    padding-left: 10px;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
  }
  #usernam{
    box-sizing: border-box;
    width: 100%;
    height: 157px;
    background: #ffffff;
    padding-left: 10px;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    padding-bottom: 7%;
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
  .submit{
    margin: 20px 0px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    .submit-btn{
        background-color: #ff483c;
        color: white;
        width: 160px;
        height: 48px;
        border-radius: 10px;
        border: none;
    }
  
  }

`;
