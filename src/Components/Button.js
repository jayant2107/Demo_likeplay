import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  background-image: ${(props)=>props.bg};
  color: ${(props)=>props.text }
`;

export default StyledButton;


