import React from 'react'
import styled from 'styled-components'

const Testimonial = () => {
  return (
    <>
    <StyledTestimonial>
        <div className='wrapper2'>
        <div className='con-testimonial'>
            <h2 className='Testimonials'>Testimonials</h2>
        </div>
        <div className='Testimonials-features'>
        <div className='container2'>
    <label for="Name">Name</label><br/>
    <input type="text" id="username" name="username" placeholder='Enter Name'/><br/>
</div>

<div className='container2-1'>
    <label for="pass" className='Email'>Email</label><br/>
    <input type="email" id="email"
       pattern=".+@globex\.com" size="30" placeholder='Enter Email' required /><br/>
</div>
<div className='testinomial-message'>
<label for="pass" className='Testinoamial-mssge'>Testimonal</label><br/>
<input type="text" id="message" name="message" required
       minlength="4" maxlength="8" size="10" className='input-message' placeholder='Add Testimonial'/>
</div>
        </div>
        <div className='btn-btn-1'>
            <h2 className='Submit-btn'>Submit</h2>
        </div>
        </div>
        </StyledTestimonial>
    </>
  )
}

export default Testimonial
const StyledTestimonial = styled.div`
.con-testimonial{
    position: absolute;
width: 100%;
height: 88px;
top: 0px;
background: #F0F0F0;
}
.Testimonials{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
letter-spacing: 0.05rem;
color: #242424;
position: absolute;
width: 125px;
height: 28px;
left: 20px;
top: 40px;
}
.container2 {
    position: absolute;
    width: 36px;
    height: 20px;
    left: 2%;
    top: 125px;
    line-height: 40px;
}
.Name{
    position: absolute;
width: 39px;
height: 20px;
left: 420px;
top: 140px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.05em;
color: #242424;
}
#username{
    box-sizing: border-box;
position: absolute;
width: 870px;
height: 56px;
/* padding: 10%; */
background: #FFFFFF;
padding-left: 10px;
border: 1px solid #E2E2E2;
border-radius: 10px;
}
.container2-1{
    position: absolute;
width: 36px;
height: 20px;
left: 2%;
top: 243px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.05em;
color: #242424;
}
#email{
    box-sizing: border-box;
position: absolute;
width: 865px;
padding-left: 10px;
height: 56px;
top: 30px;
background: #FFFFFF;
border: 1px solid #E2E2E2;
border-radius: 10px;
}
.Testinoamial-mssge{
    position: absolute;
width: 77px;
height: 20px;
left: 2%;
top: 346px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.05em;
color: #242424;
}
.input-message{
    box-sizing: border-box;
position: absolute;
width: 865px;
height: 157px;
left: 2%;
top: 373px;
background: #FFFFFF;
border: 1px solid #E2E2E2;
border-radius: 10px;
padding-bottom: 8%;
padding-left: 10px;
}
.btn-btn-1{
    /* display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 106px;
gap: 10px; */
position: absolute;
width: 160px;
height: 48px;
left: 40%;
top: 596px;
background: linear-gradient(268.55deg, #FF483C 0%, #FF2C5A 100%);
border-radius: 10px;
}
.Submit-btn{
    position: absolute;
width: 53px;
height: 22px;
left: 35%;
top: 13px;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
color: #FFFFFF;
}
`