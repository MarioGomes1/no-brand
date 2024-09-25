import React from "react";
import styled from "styled-components";

const StyledShowCase = styled.div`
  background-color: #38362f;
  width: 100%;
  height: 50%;
  border-radius: 50px;
  padding: 2rem 3rem 4rem;
`;

function ShowCase() {
  return <StyledShowCase>ShowCase</StyledShowCase>;
}

export default ShowCase;
