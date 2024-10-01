import React from "react";
import styled from "styled-components";
import TrendingList from "./TrendingList";

const StyledTrendingPreview = styled.div`
  /* background-color: #774343; */
`;

function TrendingPreview() {
  return <StyledTrendingPreview>{<TrendingList />}</StyledTrendingPreview>;
}

export default TrendingPreview;
