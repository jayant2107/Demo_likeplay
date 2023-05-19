import React from 'react'
import ResHeaderComponent from './ResHeader'
import { Artboard6 } from '../../Utils/RegistrationImg/Registrationflie'

import { RisgistionBgImg, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle, RisgistationPage1 } from './style'

const data = [
    { p: "Have you been involved in taking hard drugs?" },
    { p: "Have you been involved in crimaial activity?" },
    { p: "Have you been involved in taking hard drugs?" },
    { p: "Have you been involved in crimaial activity?" },
    { p: "Have you been involved in taking hard drugs.have you been involved in taking hard drugs?" },
    { p: "Have you been involved in crimaial activity?" },
    { p: "Have you been involved in crimaial activity?" },
]
const ResgistPage9 = ({ Next, Back }) => {
    let percentage = "64%";
    return (<>
        <RisgistionBgImg imgUrl={Artboard6}>
            <ResHeaderComponent />
            <RisgistationPage1>
                <div className='Risgistation_content2'>

                    <FromStyleDiv width="37rem">
                        <ProgessStyleDiv>
                            <p><b>{percentage}</b> Complete</p>
                            <ProgessStyleDivline>
                                <ProgessStyleDivfilline width={percentage}>
                                </ProgessStyleDivfilline>
                            </ProgessStyleDivline>
                        </ProgessStyleDiv>
                        <div className='registation_form'>
                            <div className='Welcome'>
                                <h4><b>Verifiaction</b><span>*</span></h4>
                            </div>
                            {
                                data.map((el) => {
                                    return (<>
                                        <div className='verificationdiv'>
                                            <div><p className='paarapag9'>{el.p}<span>*</span></p></div>
                                            <div className='checkboxs'>
                                                <p className='checkoxIn' ><input className='checkboxsN' type='checkbox' /><b>No</b></p>
                                                <p className='checkoxIn' ><input className="checkboxsN" type='checkbox' /><b>Yes</b></p>
                                            </div>
                                        </div>

                                    </>)
                                })
                            }

                            <div className='btn'>
                                <div className='btn9'>
                                    <textarea type='textarea' placeholder='Add Additional detials.....' className='textarea9' />
                                    {/* <ButtonStyle onClick={() => { Back() }} bgcolour="#e5e5e5" color="black"> Back </ButtonStyle> */}
                                    <ButtonStyle onClick={() => { Next() }} height="3rem" padding="0"> Next </ButtonStyle>
                                </div>

                            </div>


                        </div>
                    </FromStyleDiv>
                </div>


            </RisgistationPage1>

        </RisgistionBgImg>


    </>)
}

export default ResgistPage9




