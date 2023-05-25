import React from "react";
import { Artboard13 } from "../../Utils/RegistrationImg/Registrationflie";
import ResHeaderComponent from "./ResHeader";

import { RisgistionBgImg } from "./style";
import styled from "styled-components";

const Completeform = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: cursive;
  line-height: 24px;

  .completeFormcontent p {
    color: #f5f3f4;
  }
  .completeFormcontent {
    width: 50%;
  }
  .thankheaging {
    padding: 1rem;
  }
`;

const ResgistPage15 = () => {
  return (
    <>
      <RisgistionBgImg height="auto" imgUrl={Artboard13}>
        <ResHeaderComponent />
        <Completeform>
          <div className="completeFormcontent">
            <h1 className="thankheaging">Thank you for completing the form.</h1>
            <p>
              The maximum period for review of your profile is 12 hours. Any
              delays could be as a result of issues with the Profile form, and
              you can contact us on hello@likeplaylikeplay.com with your
              concern.
            </p>
          </div>
        </Completeform>
      </RisgistionBgImg>
    </>
  );
};

export default ResgistPage15;
