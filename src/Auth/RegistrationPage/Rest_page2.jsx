import React from 'react'
import ResHeaderComponent from './ResHeader'
import {Artboard2} from '../../Utils/RegistrationImg/Registrationflie'
import { RisgistionBgImg, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle, RisgistationPage1 } from './style'

const ResgistPage2 = ({Next, Back}) => {
  let percentage = "16%";
  return (<>
    <RisgistionBgImg height={"100vh"} imgUrl={Artboard2}>
      <ResHeaderComponent />
      <RisgistationPage1>
        <div className='Risgistation_content2'>
          <FromStyleDiv>
            <ProgessStyleDiv>
              <p><b>{percentage}</b> Complete</p>
              <ProgessStyleDivline>
                <ProgessStyleDivfilline width={percentage}>
                </ProgessStyleDivfilline>
              </ProgessStyleDivline>
            </ProgessStyleDiv>
            <div className='registation_form'>
              <div className='Welcome'>
                <h3><b>Wellcome!</b></h3>
                <p><span>Step 1/2</span></p>
              </div>
              <lable>Full Name<span>*</span></lable>
              <input type="text" className='resgistation_input' placeholder='Username' />
              <br></br>
              <lable>Age<span>*</span></lable>
              <input type="Email" className='resgistation_input' placeholder='Email' />
              <br></br>
              <lable>Gender<span>*</span></lable>
              <div className='gender_btn'>
                <ButtonStyle  width="12rem" margin="0" border="1px black solid" bgcolour="#e5e5e5"   color="black"> Male </ButtonStyle>
                <ButtonStyle bgcolour="#e5e5e5" width="12rem" margin="1rem" color= "black"> Female </ButtonStyle>
              </div>
              <lable>Interested In<span>*</span></lable>
              <input type="text" className='resgistation_input' placeholder='willmith1234221' />
              <div className='btn'>

                <ButtonStyle onClick={()=>{Back()}}bgcolour="#e5e5e5" color= "black"> Back </ButtonStyle>
                <ButtonStyle onClick={()=>{Next()}}> Next </ButtonStyle>
              </div>

            </div>
          </FromStyleDiv>
        </div>


      </RisgistationPage1>

    </RisgistionBgImg>
    </>)
}

export default ResgistPage2;
