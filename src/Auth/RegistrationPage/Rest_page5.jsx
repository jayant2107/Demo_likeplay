import React from 'react'
import ResHeaderComponent from './ResHeader'
import {Artboard5} from '../../Utils/RegistrationImg/Registrationflie'
import { RisgistionBgImg, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle, RisgistationPage1 } from './style'
import { SelectOptionStyle } from './style'

const ResgistPage5 = ({Next, Back}) => {
    let percentage = "40%";
    return (<>
        <RisgistionBgImg height="100vh" imgUrl={Artboard5}>
            <ResHeaderComponent />
            <RisgistationPage1>
                <div className='Risgistation_content2'>
                    {/* <div className='risgistation_img_log'>
            <img src={logg}  className='rig_img_log' alt='empty'/>
            <h1>The #Dating Site in Nigeria</h1>
          </div>  */}
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
                                <h3><b>Welcome!</b></h3>
                                <p><span>Step 4/6</span></p>
                            </div>
                            <lable>Age Range preferred to date<span>*</span></lable>
                            <SelectOptionStyle><option>Select Range</option></SelectOptionStyle>
                            <br></br>
                            <div className='body_heigth'>
                                <div>
                                    <lable>Tribe to data<span>*</span></lable>
                                    <SelectOptionStyle width="12rem"><option>Select</option></SelectOptionStyle>
                                </div>
                                <div>
                                    <lable>Looking for?<span>*</span></lable>
                                    <SelectOptionStyle width="12rem"><option>Select</option></SelectOptionStyle>
                                </div>
                            </div>
                            <div className='trib_irrelevant'>
                            <lable>Looking for?<span>*</span></lable>
                            <input type='checkbox'/>

                            </div>
                           
                            <div className='btn'>
                                <ButtonStyle  onClick={()=>{Back()}} bgcolour="#e5e5e5" color= "black"> Back </ButtonStyle>
                                <ButtonStyle  onClick={()=>{Next()}}> Next </ButtonStyle>
                            </div>

                        </div>
                    </FromStyleDiv>
                </div>


            </RisgistationPage1>

        </RisgistionBgImg>


    </>)
}

export default ResgistPage5




