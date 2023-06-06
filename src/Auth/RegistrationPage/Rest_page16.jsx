import React, { useEffect, useState } from "react";
import ResHeaderComponent from "./ResHeader";
import {
  AartboardDitals,
  Edit,
} from "../../Utils/RegistrationImg/Registrationflie";
import styled from "styled-components";
import {
  RisgistionBgImg,
  FromStyleDiv,
  ProgessStyleDiv,
  ProgessStyleDivline,
  ProgessStyleDivfilline,
  ButtonStyle,
  RisgistationPage1,
} from "./style";
import data from "./dssdd";
import { getProfileView } from "../../Services/collection";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const chage = ["end", "start", "end", "start", "end"];
const ResgistPage16 = () => {
  let percentage = "100%";

  const [userInfo, setUserInfo] = useState();
  const [swit, setSwit] = React.useState(0);
  const [switi, setSwiti] = React.useState(swit);
  function Switched() {
    setSwiti(chage[swit]);
    if (chage.length - 1 === swit) {
      setSwit(1);
    } else {
      setSwit(swit + 1);
    }
  }

  const userId = useSelector((state) => state.UserId.id);

  useEffect(() => {
    getUserDataFun();
  }, []);

  const getUserDataFun = async () => {
    let res = await getProfileView(userId);
    if (res?.status === 200) {
      setUserInfo(res.data);
    } else {
      toast.error(res.message || "something went wrong");
    }
  };
  console.log("userInfo     ", userInfo);

  return (
    <RisgistionBgImg height="auto" imgUrl={AartboardDitals}>
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
              <h1>Profile Review</h1>
              <p>
                These short, simple and fun question help use carfully create a
                list of matches you will most likely get along with in a serious
                relationship...{" "}
              </p>
              <p>
                These short, simple and fun question help use carfully create a
                list of matches you will most likely get along with in a serious
                relationship...{" "}
              </p>
            </div>
            <div className="registation_form">
              <FeedAboutMeCss>
                {/* start */}
                <div className="detailsBox">
                  <div className="boxDiv">
                    <div>
                      <lable className="nameDitals">Full name</lable>
                      <span
                        style={{ color: "#7b7f91" }}
                        className="vlauesDitals"
                      >
                        'valuse'
                      </span>
                    </div>
                    <div>
                      <lable className="nameDitals">Age</lable>
                      <span
                        style={{ color: "#7b7f91" }}
                        className="vlauesDitals"
                      >
                        'valuse'
                      </span>
                    </div>
                    <div>
                      <lable className="nameDitals">Gender</lable>
                      <span
                        style={{ color: "#7b7f91" }}
                        className="vlauesDitals"
                      >
                        'valuse'
                      </span>
                    </div>
                    <div>
                      <lable className="nameDitals">Interested In</lable>
                      <span
                        style={{ color: "#7b7f91" }}
                        className="vlauesDitals"
                      >
                        'valuse'
                      </span>
                    </div>
                  </div>

                  <img className="editImgIcon" src={Edit} alt="Edit" />
                </div>
                {/* end */}
                <div className="detailsBox">
                  <div className="imgsDitals">
                    <img className="imgsDitalstag" src={"pic"} alt=""></img>
                  </div>
                </div>

                <div className="detailsBox">
                  <div className="aboutMe">
                    <div className="edit-div">
                      <p>About me</p> <img src={Edit} alt="editicon" />
                    </div>
                    <span style={{ color: "#7b7f91" }} className="vlauesDitals">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled.
                    </span>
                  </div>
                </div>
                <div className="switchDiv">
                  <p>Introduce me on the floor Page</p>
                  <Switchbtn onClick={Switched} switches={switi}>
                    <div className="on_of"> </div>
                  </Switchbtn>
                </div>
              </FeedAboutMeCss>

              <div className="btn">
                <ButtonStyle onClick={""} height="3rem" padding="0">
                  {" "}
                  Submit{" "}
                </ButtonStyle>
              </div>
            </div>
          </FromStyleDiv>
        </div>
      </RisgistationPage1>
    </RisgistionBgImg>
  );
};

export default ResgistPage16;
const Switchbtn = styled.div`
  display: flex;
  justify-content: ${(props) => props.switches || "start"};
  width: 47px;
  height: 24px;
  background: rgb(168 88 15);
  border-radius: 13px;
  .on_of {
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 13px;
  }
`;

const FeedAboutMeCss = styled.div`
  .nameDitals {
    display: block;
  }
  .vlauesDitals {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #7b7f91;
  }

  .aboutMe {
    height: auto;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 0.05em;
  }
  .imgsDitals {
    width: 100px;
    border-radius: 10px;
    height: 100px;
    margin-right: 11px;
  }
  img.imgsDitalstag {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .switchDiv {
    border: 1px #f0f0f0 solid;
    width: 18rem;
    display: flex;
    padding: 8px;
    justify-content: space-between;
    border-radius: 12px;
    margin: 8px 0;
  }

  .edit-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .imagesDiv {
    margin: 1rem 0;
  }
  .pics {
    display: grid;
    grid-template-columns: 18.5% 18.5% 18.5% 18.5% 18.5%;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
  }
  .picsDiv {
    width: 100%;
    height: 10rem;
    img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
    }
  }

  .detailsBox {
    background: #ffffff;
    border-radius: 0.5rem;
    margin: 0.5rem 0;
    position: relative;
    padding: 0.4rem 0.8rem;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    border: 1px #f0f0f0 solid;
  }

  .boxDiv {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    margin: 10px 0;
  }

  .editImgIcon {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
  }
`;
