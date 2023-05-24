import { Spin } from "antd";
import React from "react";
import styled from "styled-components";

export default function Loader() {
  return (
    <LoaderWrapper>
      <Spin size="large" />
    </LoaderWrapper>
  );
}

const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
