import React, { useState } from "react";
import ResHeaderComponent from "./ResHeader";

import { Artboard7 } from "../../Utils/RegistrationImg/Registrationflie";
import { heartIcon } from "../../Utils/RegistrationImg/Registrationflie";
import PlusUpload from "Assets/Images/PlusUpload.png";
import removeImg from "Assets/Images/removeUpload.png";

import {
  RisgistionBgImg,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";

import { UpdateMediaApi, DeleteMediaApi } from "Services/collection";
import { useSelector, useDispatch } from "react-redux";
import { LoaderWrapper } from "Auth/LoginPage";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import {
  countAdd,
  countMinus,
} from "../../Redux/SliceOfRedux/RegistrationSlice";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const userImg = [
  {
    p: "Please upload as many pictures that is minimum of 1 and  maximum of 5 pictures. Be sure that the pictures you upload are your best pictures to put your best self forward. The pictures should be current, as it helps any match to see you as you currently look. Your pictures should show your face clearly. No face mask, no sunglasses. No face cap. Hijab is well allowed. Please do not post picture with face facing sideways,all pictures should be directly facing the camera.",
  },
  {
    p: "Its important to note that violating the rules below may result in a disabled account or discontinued use, without warning. Photos that are not allowed are as follows:",
  },
  {
    p: "Any photos that dont feature yourself. This includes stock/celebrity photos.",
  },
  {
    p: " Extreme Closeup photos- photos focused solely on lips/hands/ feet/chest will be denied.",
  },
  { p: " Photos including children." },
  { p: "Nude or sexually explicit photos." },
  { p: " Photos containing or depicting illegal content." },
  { p: " Duplicate photos." },
  { p: "Photos from other members on LikePlay-LikePlay" },
  { p: "Copyrighted photos from any website." },
  { p: "Improperly rotated or cropped images." },
  { p: "Contact information or logos" },
];

const imageBaseUrl = process.env.REACT_APP_BASEURL_IMAGE;

const ResgistPage7 = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state?.RegistrationSlice?.count);

  const navigate = useNavigate();
  const location = useLocation();

  const Next = () => {
    dispatch(countAdd(count + 1));
    if (location.pathname !== "/Registration") navigate("/Registration");
  };
  const Back = () => {
    dispatch(countMinus(count - 1));
    if (location.pathname !== "/Registration") navigate("/Registration");
  };

  let percentage = "56%";
  const user_id = useSelector((state) => state.UserId.id);
  const [loading, setloading] = useState(false);

  const [imgpre, setImgpre] = useState();

  const handleFileChange = async (e) => {
    setloading(true);
    let userImg = e.target.files;
    uploadImage(userImg);
  };

  const uploadImage = async (userImg) => {
    let fromData = new FormData();

    fromData.append("image_url", userImg?.[0], userImg?.[0]?.name);
    fromData.append("user_id", user_id);

    let res = await UpdateMediaApi(fromData);

    if (res?.status === 200) {
      setloading(false);
      setImgpre(imageBaseUrl + res?.data?.image_url);
    } else {
      toast.error(res?.message || "something went wrong");
    }
  };
  console.log(user_id);

  const removeUpload = async () => {
    // let fromDelete = new FormData();
    // fromDelete.append("id", user_id);
    // let res = await DeleteMediaApi(fromDelete);
    // if(res?.status === 200){
    //   setImgpre(null);
    // }else{
    //   console.log('error :',res?.message)
    // }
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  return (
    <>
      <RisgistionBgImg height="auto" imgUrl={Artboard7}>
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
                    <b>Welcome!</b>
                  </h3>
                  <p>
                    <span>Step 6/6</span>
                  </p>
                </div>

                <div className="contantdata" style={{ color: "#7B7F91" }}>
                  {userImg.map((el) => (
                    <p>
                      <img
                        style={{ marginRight: "5px" }}
                        src={heartIcon}
                        alt=""
                      ></img>
                      {el.p}
                    </p>
                  ))}
                </div>
                <lable>
                  Upload Images<span>*</span>
                </lable>
                <div className="imgUpload">
                  <div className="frame">
                    <label htmlFor="uploadImg" className="fileLable">
                      {loading ? (
                        <LoaderWrapper>
                          <Spin indicator={antIcon} />
                        </LoaderWrapper>
                      ) : (
                        <>
                          {imgpre ? (
                            <img
                              className="selectedImg2"
                              src={imgpre}
                              alt="upload"
                            />
                          ) : (
                            <img
                              className="selectedImg"
                              src={PlusUpload}
                              alt="upload"
                            />
                          )}
                        </>
                      )}
                    </label>
                    {imgpre && (
                      <img
                        className="removeUpload"
                        src={removeImg}
                        alt="cross btn"
                        onClick={removeUpload}
                      />
                    )}
                  </div>

                  <input
                    type="file"
                    className="inputFile"
                    name="uploadImg"
                    id="uploadImg"
                    onChange={handleFileChange}
                    // disabled={selectFiles}
                  />
                </div>

                <div className="btn">
                  <ButtonStyle
                    onClick={() => {
                      Back();
                    }}
                    bgcolour="#e5e5e5"
                    color="black"
                  >
                    {" "}
                    Back{" "}
                  </ButtonStyle>
                  <ButtonStyle onClick={Next}> Next </ButtonStyle>
                </div>
              </div>
            </FromStyleDiv>
          </div>
        </RisgistationPage1>
      </RisgistionBgImg>
    </>
  );
};

export default ResgistPage7;
