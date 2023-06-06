import React,{useState} from "react";
import ResHeaderComponent from "./ResHeader";
import { Artboard121 } from "../../Utils/RegistrationImg/Registrationflie";

import {
  ChoiceBtn,
  RisgistionBgImg,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";

import { updateusersQuestionsApi } from "../../Services/collection";

import { useDispatch, useSelector } from "react-redux";
import { countAdd } from "../../Redux/SliceOfRedux/RegistrationSlice";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const data = [
  {
    head: "I cannot date someone below my socio-economic class",
    p: ["Yeah 100%", "Occasionally 50-50", "No Way"],
  },
  {
    head: "People say I am a prude, and that is fine by me",
    p: ["Yeah 100%", "Occasionally 50-50", "No Way"],
  },
  {
    head: "I am very judgemental",
    p: ["Yeah 100%", "Occasionally 50-50", "No Way"],
  },
  {
    head: "Folks see me as a good guy",
    p: ["Yeah 100%", "Occasionally 50-50", "No Way"],
  },
  {
    head: "I am a rebel, never do things the normal way",
    p: ["Yeah 100%", "Occasionally 50-50", "No Way"],
  },
];
const ResgistPage13 = () => {
  let percentage = "80%";

  const [selected, setSelected] = useState({
    "I cannot date someone below my socio-economic class": "",
    "People say I am a prude, and that is fine by me": "",
    "I am very judgemental": "",
    "Folks see me as a good guy": "",
    "I am a rebel, never do things the normal way": "",
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
      character_cannot_date_below_my_socio_economic: selected["I cannot date someone below my socio-economic class"],
      character_am_prude: selected["People say I am a prude, and that is fine by me"],
      character_am_judgemental: selected["I am very judgemental"],
      character_folks_see_me_as_goodguy: selected["Folks see me as a good guy"],
      character_am_rebel_never_do_things_normal_way: selected["I am a rebel, never do things the normal way"],
      profile_status: 7,
    };
    const res =await updateusersQuestionsApi(req);
    if(res?.status === 200){
        Next();
    }else{
     toast.error(res?.message || 'something went wrong') 
    }
  };
  return (
    <>
      <RisgistionBgImg height="auto" imgUrl={Artboard121}>
        <ResHeaderComponent />
        <RisgistationPage1>
          <div className="Risgistation_content2">
            <FromStyleDiv width="34rem">
              <ProgessStyleDiv>
                <p>
                  <b>{percentage}</b> Complete
                </p>
                <ProgessStyleDivline>
                  <ProgessStyleDivfilline
                    width={percentage}
                  ></ProgessStyleDivfilline>
                </ProgessStyleDivline>
              </ProgessStyleDiv>
              <div className="text10">
                <h1>Let's Know your Personality</h1>
                <p>
                  These short, simple and fun question help use carfully create
                  a list of matches you will most likely get along with in a
                  serious relationship...{" "}
                </p>
                <p>
                  These short, simple and fun question help use carfully create
                  a list of matches you will most likely get along with in a
                  serious relationship...{" "}
                </p>
              </div>
              <div className="registation_form">
                <div className="Welcome">
                  <h5>
                    <b>Cheracter Questions</b>
                    <span>*</span>
                  </h5>
                </div>
                {data.map((el) => {
                  return (
                    <>
                      <lable>
                        {el.head}
                        <span>*</span>
                      </lable>
                      <div className="btnchosediv">
                        {el.p.map((ele,index) => {
                          return (
                            <>
                              <ChoiceBtn className={selected[el.head] === ele && 'activeButton'} key={index} onClick={()=>selectedOptions(el.head,ele)} >{ele}</ChoiceBtn>
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                })}

                <div className="btn">
                  <ButtonStyle onClick={handleSubmit} height="3rem" padding="0">
                    {" "}
                    Next{" "}
                  </ButtonStyle>
                </div>
              </div>
            </FromStyleDiv>
          </div>
        </RisgistationPage1>
      </RisgistionBgImg>
    </>
  );
};

export default ResgistPage13;
