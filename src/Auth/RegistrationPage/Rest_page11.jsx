import React from 'react'
import ResHeaderComponent from './ResHeader'
import { Artboard11 } from '../../Utils/RegistrationImg/Registrationflie'
import { RisgistionBgImg, SelectOptionStyle, ChoiceDiv, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle, RisgistationPage1 } from './style'

const ResgistPage11 = ({ Next, Back }) => {
    let percentage = "72%";
    return (<>
        <RisgistionBgImg height="100vh" imgUrl={Artboard11}>
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
                                <h3><b>Choose any one</b><span>*</span></h3>
                            </div>
                            <ChoiceDiv>Physical Attributes Only</ChoiceDiv>
                            <br></br>
                            <ChoiceDiv>Character Attributes Only</ChoiceDiv>
                            <br></br>
                            <ChoiceDiv>Both Physical & Character Attributes</ChoiceDiv>
                            <br></br>
                            <div className='btn'>
                                {/* <ButtonStyle onClick={() => { Back() }} bgcolour="#e5e5e5" color="black"> Back </ButtonStyle> */}
                                <ButtonStyle onClick={() => { Next() }}> Next </ButtonStyle>
                            </div>

                        </div>
                    </FromStyleDiv>
                </div>


            </RisgistationPage1>

        </RisgistionBgImg>


    </>)
}

export default ResgistPage11;




