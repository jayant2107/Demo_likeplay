const { default: styled } = require("styled-components");

export const NoRecords = styled.div`
  height: ${(props)=>props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
