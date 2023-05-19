import React from 'react'
import ResHeaderComponent from './ResHeader'
import { Artboard13 } from '../../Utils/RegistrationImg/Registrationflie'

import { ChoiceBtn, RisgistionBgImg, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle, RisgistationPage1 } from './style'

const data = [
    { head: "Size", p: ["Big", "Medium", "Small"] },
    { head: "Back End", p: ["BackEnd", "Normal", "Comfortable", "Flat"] },
    { head: "Facial", p: ["Beautiful", "Good -looking", "okay", "Not my strong suit"] },
    { head: "Height", p: ["Tall", "Medium", "Short"] },
    { head: "Front", p: ["Well endowed", "Normal", "Small"] },
    { head: "Glasses", p: ["Yes", "No"] }

]
const ResgistPage13 = ({ Next, Back }) => {
    let percentage = "100%";

    return (<>
        <RisgistionBgImg imgUrl={Artboard13}>
            <ResHeaderComponent />
            <RisgistationPage1>
                <div className='Risgistation_content2'>

                    <FromStyleDiv width="34rem">
                        <ProgessStyleDiv>
                            <p><b>{percentage}</b> Complete</p>
                            <ProgessStyleDivline>
                                <ProgessStyleDivfilline width={percentage}>
                                </ProgessStyleDivfilline>
                            </ProgessStyleDivline>
                        </ProgessStyleDiv>
                        <div className='text10'>
                            <h1>Pysical Attributes in your Partner</h1>
                            <p>These short, simple and fun question help use carfully create a list of matches you will most likely get along with in a serious relationship... </p>
                            <p>These short, simple and fun question help use carfully create a list of matches you will most likely get along with in a serious relationship... </p>
                        </div>
                        <div className='registation_form'>
                            <div className='Welcome'>
                                <h5><b>Partner's Physical Attributes</b></h5>
                            </div>
                            {
                                data.map((el) => {
                                    return (<>
                                        <lable>{el.head}<span>*</span></lable>
                                        <div className='btnchosediv'>
                                            {
                                                el.p.map((ele) => {
                                                    return (<>

                                                        <ChoiceBtn >{ele}</ChoiceBtn>
                                                    </>)
                                                })
                                            }
                                        </div>
                                    </>)
                                })
                            }


                            <div className='btn'>
                                <ButtonStyle onClick={() => { Back() }} bgcolour="#e5e5e5" color="black"> Back </ButtonStyle>
                                <ButtonStyle onClick={() => { Next() }} height="3rem" padding="0"> Submit </ButtonStyle>
                            </div>

                        </div>
                    </FromStyleDiv>
                </div>


            </RisgistationPage1>

        </RisgistionBgImg>


    </>)
}

export default ResgistPage13








