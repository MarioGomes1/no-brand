import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,

  medium: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
};

const variations = {
  primary: css`
    color: #cbced7;
    background-color: #758ac9;
    border-radius: 15px;

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: black;
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: black;

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};
const StyledButton = styled.button`
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

function Button({ children, size, variation }) {
  return (
    <StyledButton variation={variation} size={size}>
      {children}
    </StyledButton>
  );
}

export default Button;
