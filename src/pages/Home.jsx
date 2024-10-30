import ShowCase from "../ui/ShowCase";
import TrendingPreview from "../ui/TrendingPreview";
import Attention from "../ui/Attention";

import styled, { css, keyframes } from "styled-components";
import { useEffect } from "react";
import Category from "../ui/Category";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.2rem;
`;

const slide = keyframes`
  from {
    transform:translateX(-300px)
  }

  to{transform: translateX(0)}
`;

const H1 = styled.div`
  /* animation: */
  animation-name: ${slide};
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
`;

function Home() {
  useEffect(function () {
    const testConnection = async () => {
      const res = await fetch(
        "http://localhost:8000/api/products?category=man"
      );
      const data = await res.json();
    };
    testConnection();
  }, []);
  return (
    <StyledHome>
      <ShowCase />
      <Attention />
      <Category />
    </StyledHome>
  );
}

export default Home;
