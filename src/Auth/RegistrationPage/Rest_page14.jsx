import React, { useState } from 'react'
import ResHeaderComponent from './ResHeader'
import { Artboard122 } from '../../Utils/RegistrationImg/Registrationflie'

import { ChoiceBtn, RisgistionBgImg, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle, RisgistationPage1 } from './style'
import Restpage14Modal from 'Modals/Rest_page14Modal'

const data = [
    { head: "I don’t care what people say about me", p: ["Yeah 100%", "Occasionally 50-50", "No Way"] },
    { head: "I am a very strong willed person", p: ["Yeah 100%", "Occasionally 50-50", "No Way"] },
    { head: "I am a people person", p: ["Yeah 100%", "Occasionally 50-50", "No Way"] },
    { head: "Sex/Chemistry is my #1 attraction in relationship", p: ["Yeah 100%", "Occasionally 50-50", "No Way"] },
    { head: "Character is my #1 attraction to an individual", p: ["Yeah 100%", "Occasionally 50-50", "No Way"] },
]
const ResgistPage14 = ({ Next, Back }) => {
    let percentage = "80%";
    const [show,setShow] = useState(false);

    const changeModal = () => {
        setShow(!show);
      };

    return (<>
    {
        show && <Restpage14Modal show={show} changeModal={changeModal} Next={Next}/>  }
        <RisgistionBgImg height="auto" imgUrl={Artboard122}>
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
                            <h1>Let's Know your Personality</h1>
                            <p>These short, simple and fun question help use carfully create a list of matches you will most likely get along with in a serious relationship... </p>
                            <p>These short, simple and fun question help use carfully create a list of matches you will most likely get along with in a serious relationship... </p>
                        </div>
                        <div className='registation_form'>
                            <div className='Welcome'>
                                <h5><b>Cheracter Questions</b><span>*</span></h5>
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
                                <ButtonStyle onClick={changeModal} height="3rem" padding="0"> Submit </ButtonStyle>
                            </div>

                        </div>
                    </FromStyleDiv>
                </div>


            </RisgistationPage1>

        </RisgistionBgImg>

    </>)
}

export default ResgistPage14








