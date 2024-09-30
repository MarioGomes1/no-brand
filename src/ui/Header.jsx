import styled, { css } from "styled-components";

const Header = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 1rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
    `} //TO DO anchor tag as props but needs to be a react router link to specific category
`;

export default Header;
