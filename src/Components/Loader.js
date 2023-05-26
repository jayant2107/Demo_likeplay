import { Spin } from "antd";
import React from "react";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loader() {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 30,
        color:'red'
      }}
      spin
    />
  );
  return (
    <LoaderWrapper>
       <Spin indicator={antIcon} />
    </LoaderWrapper>
  );
}

const LoaderWrapper = styled.div`
  height: 80%;
  width: 100%;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
