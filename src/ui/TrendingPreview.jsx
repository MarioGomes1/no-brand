import React from "react";
import styled from "styled-components";
import TrendingList from "./TrendingList";

const StyledTrendingPreview = styled.div`
  background-color: #f1eeee;
  height: 40%;
`;

function TrendingPreview() {
  return <StyledTrendingPreview>{<TrendingList />}</StyledTrendingPreview>;
}

export default TrendingPreview;
