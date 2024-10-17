import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const StyledAttention = styled.div`
  background-color: var(--color-white-main);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

function Attention() {
  //TODO add dynamic content to the header
  return (
    <StyledAttention>
      <Header as="h3">Go beyond the basics</Header>
      <NavLink to="/products">Shop</NavLink>
    </StyledAttention>
  );
}

export default Attention;
