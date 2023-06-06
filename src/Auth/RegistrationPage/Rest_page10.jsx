import React, {useState} from "react";
import ResHeaderComponent from "./ResHeader";
import { Artboard10 } from "../../Utils/RegistrationImg/Registrationflie";

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
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  countAdd,
} from "../../Redux/SliceOfRedux/RegistrationSlice";
import { updateusersQuestionsApi } from "Services/collection";
import { toast } from "react-toastify";
const data = [
  { head: "Size", p: ["Big", "Medium", "Small"] },
  { head: "Back End", p: ["BackEnd", "Normal", "Comfortable", "Flat"] },
  {
    head: "Facial",
    p: ["Beautiful", "Good -looking", "okay", "Not my strong suit"],
  },
  { head: "Height", p: ["Tall", "Medium", "Short"] },
  { head: "Front", p: ["Well endowed", "Normal", "Small"] },
  { head: "Glasses", p: ["Yes", "No"] },
];
const ResgistPage10 = () => {
  let percentage = "75%";
     const [selected, setSelected] = useState({
      "Size": "",
      "Back End": "",
      "Facial": "",
      "Height": "",
      "Front": "",
      "Glasses": "",
  });

  const dispatch = useDispatch();
  const count = useSelector((state) => state?.RegistrationSlice?.count);
   const attStatus = useSelector((state) => state?.RegistrationSlice?.attributestatus);
  const navigate = useNavigate();
  let location = useLocation();

   const selectedOptions = (head, val) => {
    setSelected({ ...selected, [head]: val });
  };

  const Next = () => {
    if(attStatus === 1){
        dispatch(countAdd(14))
    }else{
        dispatch(countAdd(count + 1));
    }
    if (location.pathname !== "/Registration") navigate("/Registration");
  };

  const handleSubmit = async () => {
    let req = {
      user_physical_size: selected.Size,
      user_physical_backend: selected['Back End'],
      user_physical_facial: selected.Facial,
      user_physical_height: selected.Height,
      user_physical_front: selected.Front,
      user_physical_glasses: selected.Glasses,
      profile_status: 6,
    };

    const res = await updateusersQuestionsApi(req);
    console.log(res);
    if(res?.status === 200){
        Next();
    }else{
        toast.error(res?.message || 'something went wrong')
    }
  };

  return (
    <>
      <RisgistionBgImg height="auto" imgUrl={Artboard10}>
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
                <h1>Let us get to know you</h1>
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
                    <b>Your Physical Attributes</b>
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
                              <ChoiceBtn className={selected[el.head] === ele && 'activeButton'} key={index} onClick={()=>{selectedOptions(el.head,ele)}} >{ele}</ChoiceBtn>
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                })}

                <div className="btn">
                  <ButtonStyle
                    onClick={handleSubmit}
                    height="3rem"
                    padding="0"
                  >
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

export default ResgistPage10;
