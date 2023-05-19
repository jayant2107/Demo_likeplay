import React, { useState } from 'react'
import ResHeaderComponent from './ResHeader'
import { Artboard8 } from '../../Utils/RegistrationImg/Registrationflie'
import { RisgistionBgImg, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle, RisgistationPage1 } from './style'
import { facebook, email, pass, photo } from '../../Utils/RegistrationImg/Registrationflie'
import CreateShotsModals from '../../Modals/CreateShotsModal'

const data = [
    {
        id: "facebook",
        icon: facebook,
        p: "Verify using your facebook account. We will never post to Facebook or message your friends. Any accounts with less than 150 friends is not accepted.",
        btn: 'Verifty With Fackbook'
    },
    {
        id: "email",
        icon: email,
        p: "Government Issued ID with your photograph that matches your Full Names (Driver's License, NIN, International Passport Bio page, or PVC) please feel free to scratch out your number, We will not reveal your full names on the website just your user name",
        btn: 'Taka photo of my id',
    },
    {
        id: "photo",
        icon: photo,
        p: "Take a picture with a hand signal. Please ensure that your picture is clear, facing front without a mask, nor sideways. There should be no sunglasses or face-cap. We request this information to ensure that bots are not on the platform.",
        btn: 'Verifty With Carmera'
    },
    {
        id: "pass",
        icon: pass,
        p: "Verify via sms.Verify your account by providing is the code sent via sms.",
        btn: 'Send me the Code'
    }
]

const ResgistPage8 = ({ Next, Back }) => {
    let percentage = "48%";
    const [modal, setModal] = useState(false)
    const OpenModal = (el) => {
        if (el === "facebook") {
            setModal(el)
        }else if (el === "email") {
            setModal(el)
        }else if (el === "photo") {
            setModal(el)
        }else if (el === "pass") {
            setModal(el)
        }
   
   
}






return (<>
  {modal === "facebook" &&<CreateShotsModals next = {Next} />}
  {modal === "email" &&<CreateShotsModals next = {Next} />}
  {modal === "photo" &&<CreateShotsModals next = {Next} />}
  {modal === "pass" &&<CreateShotsModals next = {Next} />}
    <RisgistionBgImg height="100vh" imgUrl={Artboard8}>
        <ResHeaderComponent />
        <RisgistationPage1>
            <div className='Risgistation_content8'>

                <div className='progessdiv'>
                    <ProgessStyleDiv>
                        <p><b>{percentage}</b> Complete</p>
                        <ProgessStyleDivline>
                            <ProgessStyleDivfilline width={percentage}>
                            </ProgessStyleDivfilline>
                        </ProgessStyleDivline>
                    </ProgessStyleDiv>
                    <h1>Use any one or more to verify yourself<span style={{ color: "#ff3f45", margin: "1rem" }}>*</span></h1>
                </div>
                <FromStyleDiv width="80%" margin="auto">
                    <div className='registation_form'>
                        <div className='registation_form8'>
                            {
                                data.map((el) => {
                                    return (<>
                                        <div className='cartReg'>
                                            <div className='cartIcon'>
                                                <img className='cartIconimg' src={el.icon} alt='' />
                                            </div>
                                            <p>{el.p}</p>
                                            <ButtonStyle onClick={() => OpenModal(el.id)} height="2rem" width="10rem" margin="0" padding="0" className='btn_buttom'>{el.btn}</ButtonStyle>
                                        </div>


                                    </>)
                                })
                            }

                        </div>
                    </div>
                </FromStyleDiv>
            </div>


        </RisgistationPage1>

    </RisgistionBgImg>


</>)
}

export default ResgistPage8




