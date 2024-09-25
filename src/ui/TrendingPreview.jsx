import React from "react";
import styled from "styled-components";
import TrendingList from "./TrendingList";

const StyledTrendingPreview = styled.div`
  /* background-color: #e7cfa1; */
  width: 100%;
  height: 50%;
  border-radius: 50px;
`;

function TrendingPreview() {
  return <StyledTrendingPreview>{<TrendingList />}</StyledTrendingPreview>;
}

export default TrendingPreview;
