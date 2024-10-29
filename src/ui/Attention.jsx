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
  margin: 5%;
`;

const Title = styled.h3`
  font-size: 3rem;
  font-family: "Anton SC";
`;

function Attention() {
  //TODO add dynamic content to the header
  return (
    <StyledAttention>
      <Title>Shop Your Style, Find Your Perfect Fit</Title>
      <h2> – Explore Our Collections Today!</h2>
    </StyledAttention>
  );
}

export default Attention;
