import React from 'react'
import styled from 'styled-components';

export default function Admirers() {
  return (
    <div>
            <AdmirerHeader>
        <header>Admirers</header>
        <span>Clear</span>
      </AdmirerHeader>
    </div>
  )
}


const AdmirerHeader = styled.div`
  width: 100%;
  height: 88px;
  background: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 20px;

  header {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #242424;

    @media (max-width: 800px) {
      color: red;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4.5px 20px;
    background: #ffffff;
    border-radius: 6px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #242424;
  }
`;
