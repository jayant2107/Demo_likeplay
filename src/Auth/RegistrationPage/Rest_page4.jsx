import React from 'react'
import ResHeaderComponent from './ResHeader'
import {Artboard4} from '../../Utils/RegistrationImg/Registrationflie'
import { RisgistionBgImg, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle, RisgistationPage1 } from './style'
import { SelectOptionStyle } from './style'

const ResgistPage4 = ({Next, Back}) => {
    let percentage = "32%";
    return (<>
        <RisgistionBgImg imgUrl={Artboard4}>
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
                                <p><span>Step 3/6</span></p>
                            </div>
                            <lable>Country of Resisdence<span>*</span></lable>
                            <SelectOptionStyle><option>Select Country</option></SelectOptionStyle>
                            <br></br>
                            <div className='body_heigth'>
                                <div>
                                    <lable>State of Resisdence<span>*</span></lable>
                                    <SelectOptionStyle width="12rem"><option>Select State</option></SelectOptionStyle>
                                </div>
                                <div>
                                    <lable>City of Residence<span>*</span></lable>
                                    <SelectOptionStyle width="12rem"><option>Select City</option></SelectOptionStyle>
                                </div>
                            </div>
                            <lable>Nationality<span>*</span></lable>
                            <SelectOptionStyle><option>Select Nationality</option></SelectOptionStyle>
                            <br></br>
                            <lable>Religion<span>*</span></lable>
                            <SelectOptionStyle><option>Select Religion</option></SelectOptionStyle>
                            <br></br>
                            <lable>Your Tribe<span>*</span></lable>
                            <SelectOptionStyle><option>Select Your tribe</option></SelectOptionStyle>
                            <br></br>
                            <div className='btn'>
                                <ButtonStyle onClick={()=>{Back()}} bgcolour="#e5e5e5" color= "black"> Back </ButtonStyle>
                                <ButtonStyle  onClick={()=>{Next()}}> Next </ButtonStyle>
                            </div>

                        </div>
                    </FromStyleDiv>
                </div>


            </RisgistationPage1>

        </RisgistionBgImg>


    </>)
}

export default ResgistPage4




