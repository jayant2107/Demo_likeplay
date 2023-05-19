import React from "react";
import styled from "styled-components";

const Notfound = () => {
  return (
    <>
      <NotfoundPage>
        <div>404!Not Found Page</div>
      </NotfoundPage>
    </>
  );
};

export default Notfound;
const NotfoundPage = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-size: 4rem;
  }
`;
