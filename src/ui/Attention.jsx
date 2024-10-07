import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Button from "./Button";

const StyledAttention = styled.div`
  height: 25vh;
  background-color: var(--color-white-main);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

function Attention() {
  //TODO add dynamic content to the header
  return (
    <StyledAttention>
      <Header as="h3">Go beyond the basics</Header>
      <Button size="medium" variation="primary">
        Shop
      </Button>
    </StyledAttention>
  );
}

export default Attention;
