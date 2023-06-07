import React from "react";
import { Modal } from "antd";
import styled from "styled-components";
import { ButtonStyle } from "Auth/RegistrationPage/style";
import arrowRight from "../Assets/Registration/arrowRight.png";

const Rest_page14Modal = ({ show, changeModal}) => {
  return (
    <Modal
      open={show}
      width={400}
      centered
      onCancel={changeModal}
      footer={null}
      maskStyle={{borderRadius:'22px'}}
    >
      <ModalCss>
        <h1>Information</h1>
        <div className="info">
          <img src={arrowRight} alt="logo" />
          <span>Yeah 100% :</span>
          <span className="p">100% No questions asked</span>
        </div>
        <div className="info">
          <img src={arrowRight} alt="logo" />
          <span>Occasionally 50-50 :</span>
          <span className="p">It can be either for me no hard & fast rule</span>
        </div>
        <div className="info">
          <img src={arrowRight} alt="logo" />
          <span>No Way : </span>
          <span className="p">Never, Not me or at least not something i go for.</span>
        </div>
        <ButtonStyle onClick={changeModal} width='90%' height="3rem" padding="0">
          {" "}
          Submit{" "}
        </ButtonStyle>
      </ModalCss>
    </Modal>
  );
};

export default Rest_page14Modal;

const ModalCss = styled.div`
  font-family: "Poppins";
  font-style: normal;
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
  }
  .info {
    margin : 19px 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.05em;
    display: grid;
    grid-template-columns: 20px max-content auto;;
    align-items: unset;
    span {
      color: #a8580f;
    }
    .p {
      color: #7b7f91;
    }
  }
`;
