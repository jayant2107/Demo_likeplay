import React, { useState } from 'react'
import ResHeaderComponent from './ResHeader'
import { Artboard122 } from '../../Utils/RegistrationImg/Registrationflie'

import { ChoiceBtn, RisgistionBgImg, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle, RisgistationPage1 } from './style'

import { updateusersQuestionsApi } from "../../Services/collection";

import { useDispatch, useSelector } from "react-redux";
import { countAdd } from "../../Redux/SliceOfRedux/RegistrationSlice";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const data = [
    { head: "I don’t care what people say about me", p: ["Yeah 100%", "Occasionally 50-50", "No Way"] },
    { head: "I am a very strong willed person", p: ["Yeah 100%", "Occasionally 50-50", "No Way"] },
    { head: "I am a people person", p: ["Yeah 100%", "Occasionally 50-50", "No Way"] },
    { head: "Sex/Chemistry is my #1 attraction in relationship", p: ["Yeah 100%", "Occasionally 50-50", "No Way"] },
    { head: "Character is my #1 attraction to an individual", p: ["Yeah 100%", "Occasionally 50-50", "No Way"] },
]
const ResgistPage14 = () => {
    let percentage = "80%";

       const [selected, setSelected] = useState({
        "I don’t care what people say about me": "",
        "I am a very strong willed person": "",
        "I am a people person": "",
        "Sex/Chemistry is my #1 attraction in relationship": "",
        "Character is my #1 attraction to an individual": "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const count = useSelector((state) => state?.RegistrationSlice?.count);

  const Next = () => {
    dispatch(countAdd(count + 1));
    if (location.pathname !== "/Registration") navigate("/Registration");
  };

  const selectedOptions = (head, val) => {
    setSelected({ ...selected, [head]: val });
  };

  const handleSubmit = async () => {
    const req = {
        character_i_dont_care_what_people_say_aboutme: selected['I don’t care what people say about me'],
        character_am_strong_willed_person: selected['I am a very strong willed person'],
        character_am_people_person: selected['I am a people person'],
        character_attraction_in_relationship: selected['Sex/Chemistry is my #1 attraction in relationship'],
        character_attraction_in_individual: selected['Character is my #1 attraction to an individual'],
        profile_status: 7
    };
    const res =await updateusersQuestionsApi(req);
    if(res?.status === 200){
        Next();
    }else{
     toast.error(res?.message || 'something went wrong') 
    }
  };

    return (<>
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
                                                el.p.map((ele,index) => {
                                                    return (<>

                                                        <ChoiceBtn className={selected[el.head] === ele && 'activeButton'} key={index} onClick={()=>selectedOptions(el.head,ele)}>{ele}</ChoiceBtn>
                                                    </>)
                                                })
                                            }
                                        </div>
                                    </>)
                                })
                            }


                            <div className='btn'>
                                <ButtonStyle onClick={handleSubmit} height="3rem" padding="0"> Submit </ButtonStyle>
                            </div>

                        </div>
                    </FromStyleDiv>
                </div>


            </RisgistationPage1>

        </RisgistionBgImg>

    </>)
}

export default ResgistPage14








