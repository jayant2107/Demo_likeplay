import React, { useState } from "react";
import ResHeaderComponent from "./ResHeader";
import { Artboard12 } from "../../Utils/RegistrationImg/Registrationflie";

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
    head: "People say I am dependable and reliable*",
    p: ["Yeah 100%", "Occasionally 50-50", "No Way"],
  },
  {
    head: "I am very outgoing and can make anywhere exciting*",
    p: ["Yeah 100%", "Occasionally 50-50", "No Way"],
  },
  {
    head: "I am my best under pressure*",
    p: ["Yeah 100%", "Occasionally 50-50", "No Way"],
  },
  {
    head: "I am very forgiving in a relationship, even if my partner cheats*",
    p: ["Yeah 100%", "Occasionally 50-50", "No Way"],
  },
  {
    head: "My family and friends heavily influence my decisions*",
    p: ["Yeah 100%", "Occasionally 50-50", "No Way"],
  },
];

const ResgistPage12 = () => {
  let percentage = "80%";
  const [selected, setSelected] = useState({
    "People say I am dependable and reliable*": "",
    "I am very outgoing and can make anywhere exciting*": "",
    "I am my best under pressure*": "",
    "I am very forgiving in a relationship, even if my partner cheats*": "",
    "My family and friends heavily influence my decisions*": "",
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
    let req = {
      character_am_dependable_and_reliable:
        selected["People say I am dependable and reliable*"],
      character_am_outgoing_and_make_anywhere_exciting:
        selected["I am very outgoing and can make anywhere exciting*"],
      character_am_best_under_pressure:
        selected["I am my best under pressure*"],
      character_am_forgiving:
        selected[
          "I am very forgiving in a relationship, even if my partner cheats*"
        ],
      character_am_decisional:
        selected["My family and friends heavily influence my decisions*"],
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
      <RisgistionBgImg height="auto" imgUrl={Artboard12}>
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
                        {el.p.map((ele, index) => {
                          return (
                            <>
                              <ChoiceBtn
                              className={selected[el.head] === ele && 'activeButton'}
                                key={index}
                                onClick={() => selectedOptions(el.head, ele)}
                              >
                                {ele}
                              </ChoiceBtn>
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

export default ResgistPage12;
