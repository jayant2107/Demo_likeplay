import React, { useState } from "react";
import ResHeaderComponent from "./ResHeader";
import { Artboard11 } from "../../Utils/RegistrationImg/Registrationflie";
import {
  RisgistionBgImg,
  SelectOptionStyle,
  ChoiceDiv,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";

import {chooseAnyOneApi} from 'Services/collection';
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  countAdd,attributeStatus
} from "../../Redux/SliceOfRedux/RegistrationSlice";

const ResgistPage11 = () => {
  let percentage = "72%";
  let [active,setActive] = useState();

  const dispatch = useDispatch();
  const count = useSelector((state) => state?.RegistrationSlice?.count);
  const navigate=useNavigate()
  let location = useLocation()

  const Next = () => {
    if(active === 2){
      dispatch(countAdd(11));
    }else{
      dispatch(countAdd(count+1));
    }
    if(location.pathname !== '/Registration' ) navigate("/Registration")
  };

  const handleSubmit= async ()=>{
    dispatch(attributeStatus(active));
    let req = {
      attributeStatus: active
    }
    const res = await chooseAnyOneApi(req);
    
    if(res?.status === 200){
        Next();
    }else{
     toast.error(res?.message || 'something went wrong') 
    }
  }

  return (
    <>
      <RisgistionBgImg height="100vh" imgUrl={Artboard11}>
        <ResHeaderComponent />
        <RisgistationPage1>
          <div className="Risgistation_content2">
            <FromStyleDiv>
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
              <div className="registation_form">
                <div className="Welcome">
                  <h3>
                    <b>Choose any one</b>
                    <span>*</span>
                  </h3>
                </div>
                <ChoiceDiv className={active === 1 ? 'activeButton' : ''} onClick={()=>setActive(1)}>Physical Attributes Only</ChoiceDiv>
                <br></br>
                <ChoiceDiv className={active === 2 ? 'activeButton' : ''} onClick={()=>setActive(2)}>Character Attributes Only</ChoiceDiv>
                <br></br>
                <ChoiceDiv className={active === 3 ? 'activeButton' : ''} onClick={()=>setActive(3)}>Both Physical & Character Attributes</ChoiceDiv>
                <br></br>
                <div className="btn">
                  {/* <ButtonStyle onClick={() => { Back() }} bgcolour="#e5e5e5" color="black"> Back </ButtonStyle> */}
                  <ButtonStyle
                    onClick={handleSubmit}
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

export default ResgistPage11;
