import styled from "styled-components";

const Button = styled.button`
  font-size: ${(props) => props.theme.buttonSizes[props.size].fontSize};
  padding: ${(props) => props.theme.buttonSizes[props.size].padding};
  border: none;
  border-radius: 10px;
  background-color: #4361ee;
  color: #fff;
  cursor: pointer;
`;

Button.defaultProps = {
  size: "md",
};

export default Button;
