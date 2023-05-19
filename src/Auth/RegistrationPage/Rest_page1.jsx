import React from 'react'
import ResHeaderComponent from "./ResHeader"
import { Formik, Form, Field } from 'formik';

// import bgimg from "./imgss/Artboard1.png"
import Artboard1 from '../../Utils/RegistrationImg/Registrationflie'
import { Logimg } from '../../Utils/RegistrationImg/Registrationflie'
import {RisgistionBgImg, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle,RisgistationPage1 } from './style'
import Inputfield from '../../Validation/Inputfield';
import * as Yup from 'yup';

const ResgistPage1  = ({Next}) => {
  let  percentage = "10%";
  const handlesubmit=(values)=>{
    console.log("vvvv",values)
  }
  const validationschema=Yup.object().shape({
    username:Yup.string().required("Username is Required*"),
    email:Yup.string().email("Invalid email").required(" Email is Required*"),
    password:Yup.string().required("Password is Required*")

    
    
  })
  return (<>
    <RisgistionBgImg  imgUrl={Artboard1}>
      <ResHeaderComponent/>
      <RisgistationPage1>
        <div className='Risgistation_content'>  
          <div className='risgistation_img_log'>
            <img src={Logimg}  className='rig_img_log' alt='empty'/>
            <h1>The #Dating Site in Nigeria</h1>
          </div> 
          <FromStyleDiv>
            <ProgessStyleDiv>
              <p><b>{percentage}</b> Complete</p>
             <ProgessStyleDivline>
                <ProgessStyleDivfilline width={percentage}>
                </ProgessStyleDivfilline>
              </ProgessStyleDivline>
            </ProgessStyleDiv>
            <Formik
            initialValues={{
              username:'',
              email:'',
              password:''
            }}
            onSubmit={handlesubmit}
            validationSchema={validationschema}
            >
              <Form>

            <div className='registation_form'>
            <div className='Welcome'>
                <h3><b>Registartion</b></h3>
               
              </div>
              <lable>Username<span>*</span></lable>
              <Field  name='username' type="text" className='resgistation_input' placeholder='Username' component={Inputfield}/>
              <br></br>
              <lable>Email<span>*</span></lable>
              <Field  name='email' type="Email" className='resgistation_input' placeholder='Email' component={Inputfield} />
              <br></br>
              <lable>Password<span>*</span></lable>
              <Field  name ='password' type="Password" className='resgistation_input' placeholder='Password' component={Inputfield}/>
              <br></br>
              <lable>Enter Referral code if referred by a friend<span>*</span></lable>
              <input type="text" className='resgistation_input' placeholder='willmith1234221' />
              <div className='btn'>
                <ButtonStyle type='submit' onClick={()=>{Next()}} > Next </ButtonStyle>
                <p><span>Trems and Conitions</span></p>
                <p>How it works <span>www.likeplaylikeplay.comm</span></p>  
              </div>

            </div>
              </Form>
            </Formik>
          </FromStyleDiv>
        </div>
        
      
      </RisgistationPage1>
        
    </RisgistionBgImg>


  </>)
}

export default ResgistPage1


// <div className='Regisration_1_stap'>
//         <div>
//           <img src='' alt='empty'></img>
//           <h1>The #Dating Site in Nigeria</h1>
//         </div>
//       </div>
      
    // <FromStyleDiv>
    //   <ProgessStyleDiv>
    //     <p> <b>{percentage}</b> Complete</p>
    //     <ProgessStyleDivline>
    //       <ProgessStyleDivfilline width={percentage}>
    //       </ProgessStyleDivfilline>
    //     </ProgessStyleDivline>
    //   </ProgessStyleDiv>
    //   <div className='registation_form'>
    //     <lable>Username<span>*</span></lable>
    //     <input type="text" className='resgistation_input' placeholder='Username' />
    //     <br></br>
    //     <lable>Username<span>*</span></lable>
    //     <input type="text" className='resgistation_input' placeholder='Username' />
    //     <br></br>
    //     <lable>Username<span>*</span></lable>
    //     <input type="text" className='resgistation_input' placeholder='Username' />
    //     <br></br>
    //     <lable>Username<span>*</span></lable>
    //     <input type="text" className='resgistation_input' placeholder='Username' />
    //   </div>

    // </FromStyleDiv>

