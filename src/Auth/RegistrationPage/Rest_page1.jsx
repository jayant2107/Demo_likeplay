import React from 'react'
import ResHeaderComponent from "./ResHeader"
// import bgimg from "./imgss/Artboard1.png"
import Artboard1 from '../../Utils/RegistrationImg/Registrationflie'
import { Logimg } from '../../Utils/RegistrationImg/Registrationflie'
import {RisgistionBgImg, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle,RisgistationPage1 } from './style'

const ResgistPage1  = ({Next}) => {
  let  percentage = "10%";
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
            <div className='registation_form'>
            <div className='Welcome'>
                <h3><b>Registartion</b></h3>
               
              </div>
              <lable>Username<span>*</span></lable>
              <input type="text" className='resgistation_input' placeholder='Username' />
              <br></br>
              <lable>Email<span>*</span></lable>
              <input type="Email" className='resgistation_input' placeholder='Email' />
              <br></br>
              <lable>Password<span>*</span></lable>
              <input type="Password" className='resgistation_input' placeholder='Password' />
              <br></br>
              <lable>Enter Referral code if referred by a friend<span>*</span></lable>
              <input type="text" className='resgistation_input' placeholder='willmith1234221' />
              <div className='btn'>
                <ButtonStyle onClick={()=>{Next()}}> Next </ButtonStyle>
                <p><span>Trems and Conitions</span></p>
                <p>How it works <span>www.likeplaylikeplay.comm</span></p>  
              </div>

            </div>
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

