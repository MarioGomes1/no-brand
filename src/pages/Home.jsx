import React from "react";
import ShowCase from "../ui/ShowCase";
import TrendingPreview from "../ui/TrendingPreview";
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0.2rem;
  /* background-color: white; */
  height: 85vh;
`;

function Home() {
  return (
    <StyledHome>
      <ShowCase />
      <TrendingPreview />
    </StyledHome>
  );
}

export default Home;
