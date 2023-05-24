import React from 'react'
import ResHeaderComponent from './ResHeader'

import {Artboard7, img1_7,img2_7,img3_7} from '../../Utils/RegistrationImg/Registrationflie'
import { heartIcon } from '../../Utils/RegistrationImg/Registrationflie'


import { RisgistionBgImg, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle, RisgistationPage1 } from './style'

const data = [
{ p: "Please upload as many pictures that is minimum of 1 and  maximum of 5 pictures. Be sure that the pictures you upload are your best pictures to put your best self forward. The pictures should be current, as it helps any match to see you as you currently look. Your pictures should show your face clearly. No face mask, no sunglasses. No face cap. Hijab is well allowed. Please do not post picture with face facing sideways,all pictures should be directly facing the camera." },
{ p: "Its important to note that violating the rules below may result in a disabled account or discontinued use, without warning. Photos that are not allowed are as follows:" },
{ p: "Any photos that dont feature yourself. This includes stock/celebrity photos." },
{ p: " Extreme Closeup photos- photos focused solely on lips/hands/ feet/chest will be denied." },
{ p: " Photos including children." },
{ p: "Nude or sexually explicit photos." },
{ p: " Photos containing or depicting illegal content." },
{ p: " Duplicate photos." },
{ p: "Photos from other members on LikePlay-LikePlay" },
{ p: "Copyrighted photos from any website." },
{ p: "Improperly rotated or cropped images." },
{ p: "Contact information or logos" },
]
const imgss = [
    { imgss: img1_7, btn: true },
    { imgss: img2_7, btn: true },
    { imgss: img3_7, btn: false },
    { imgss: img3_7, btn: false },
    { imgss: img3_7, btn: false },
]



const ResgistPage7 = ({ Next, Back }) => {
    let percentage = "56%";
    return (<>
        <RisgistionBgImg height="auto" imgUrl={Artboard7}>
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
                                <h3><b>Welcome!</b></h3>
                                <p><span>Step 6/6</span></p>
                            </div>

                            <div className='contantdata' style={{ color: "#7B7F91" }}>
                                {data.map((el) => <p><img style={{ marginRight: "5px" }} src={heartIcon} alt=''></img>{el.p}</p>)}
                            </div>
                            <lable>Upload Images<span>*</span></lable>
                            <div className='imgUpload'>
                                {imgss.map((el) => {
                                    return (<>
                                        <div className='AddimgUpload'>
                                            <img className='addimgloadtag' src={el.imgss} alt='' />
                                            {el.btn&&<ButtonStyle className='xbtn' width="2rem" height="2rem" padding="0.2rem">X</ButtonStyle>}
                                        </div>
                                    </>)

                                })
                                }
                            </div>

                            <div className='btn'>
                                <ButtonStyle onClick={() => { Back() }} bgcolour="#e5e5e5" color="black"> Back </ButtonStyle>
                                <ButtonStyle onClick={() => { Next() }}> Next </ButtonStyle>
                            </div>

                        </div>
                    </FromStyleDiv>
                </div>


            </RisgistationPage1>

        </RisgistionBgImg>


    </>)
}

export default ResgistPage7




