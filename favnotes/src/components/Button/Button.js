import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: #ffd82b;
  width: ${({ width }) => width || "220px"};
  height: 47px;
  border: 0;
  border-radius: 50px;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
