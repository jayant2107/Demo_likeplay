import React, {useState} from 'react'
import ResHeaderComponent from './ResHeader'
import { Artboard13 } from '../../Utils/RegistrationImg/Registrationflie'

import { ChoiceBtn, RisgistionBgImg, FromStyleDiv, ProgessStyleDiv, ProgessStyleDivline, ProgessStyleDivfilline, ButtonStyle, RisgistationPage1 } from './style'
import { updatePartnersPhysicalQuestionsApi } from "../../Services/collection";

import { useDispatch, useSelector } from "react-redux";
import { countAdd } from "../../Redux/SliceOfRedux/RegistrationSlice";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const data = [
    { head: "Size", p: ["Big", "Medium", "Small"] },
    { head: "Back End", p: ["BackEnd", "Normal", "Comfortable", "Flat"] },
    { head: "Facial", p: ["Beautiful", "Good -looking", "okay", "Not my strong suit"] },
    { head: "Height", p: ["Tall", "Medium", "Short"] },
    { head: "Front", p: ["Well endowed", "Normal", "Small"] },
    { head: "Glasses", p: ["Yes", "No"] }

]
const ResgistPage15 = () => {
    let percentage = "100%";

        const [selected, setSelected] = useState({
        "Size": "",
        "Back End": "",
        "Facial": "",
        "Height": "",
        "Front": "",
        "Glasses": "",
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
        partner_size: selected.Size,
        partner_back_end: selected['Back End'],
        partner_facial: selected.Facial,
        partner_height: selected.Height,
        partner_front: selected.Front,
        partner_glasses: selected.Glasses,
        profile_status: 8
    };
    const res =await updatePartnersPhysicalQuestionsApi(req);
    if(res?.status === 200){
        Next();
    }else{
     toast.error(res?.message || 'something went wrong') 
    }
  };


    return (<>
        <RisgistionBgImg height="auto" imgUrl={Artboard13}>
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
                                                el.p.map((ele,index) => {
                                                    return (<>

                                                        <ChoiceBtn  className={selected[el.head] === ele && 'activeButton'} key={index} onClick={()=>selectedOptions(el.head,ele)}>{ele}</ChoiceBtn>
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

export default ResgistPage15








