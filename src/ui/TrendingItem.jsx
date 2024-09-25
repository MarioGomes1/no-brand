import React from "react";
import styled from "styled-components";

const StyledTrendingItem = styled.li`
  /* border: 2px solid white; */
  width: 25%;
  padding: 2rem;
  box-shadow: 0 4px 8px 0 #625f61;
  transition: 0.3s;
  border-radius: 40px;

  &:hover {
    box-shadow: 10px 20px 10px 0px #424042;
    cursor: pointer;
    width: 30%;
  }
`;

function TrendingItem({ product }) {
  return <StyledTrendingItem>TrendingItem</StyledTrendingItem>;
}

export default TrendingItem;
