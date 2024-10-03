import { useSelector } from "react-redux";
import ShowCase from "../ui/ShowCase";
import TrendingPreview from "../ui/TrendingPreview";

import styled, { css } from "styled-components";
import { useEffect } from "react";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.2rem;
  /* height: 90vh; */

  grid-area: 3/1/3/3;
`;

function Home() {
  useEffect(function () {
    const testConnection = async () => {
      const res = await fetch(
        "http://localhost:8000/api/products?category=man"
      );
      const data = await res.json();
      console.log(data);
    };
    testConnection();
  }, []);
  return (
    <StyledHome>
      <ShowCase />
      <TrendingPreview />
    </StyledHome>
  );
}

export default Home;

// const StyledHome = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-top: 0.2rem;
//   /* height: 90vh; */
//   ${(props) =>
//     !props.shrink &&
//     css`
//       grid-area: 3/1/3/3;
//       transition: grid-area 2s linear;
//     `}
//   ${(props) =>
//     props.shrink &&
//     css`
//       grid-area: 3/2/3/3;
//       transition: grid-area 2s linear;
//     `}
// `;
