import { useSelector } from "react-redux";
import ShowCase from "../ui/ShowCase";
import TrendingPreview from "../ui/TrendingPreview";

import styled, { css } from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.2rem;
  /* height: 90vh; */
  ${(props) =>
    !props.shrink &&
    css`
      grid-area: 3/1/3/3;
      transition: grid-area 2s linear;
    `}
  ${(props) =>
    props.shrink &&
    css`
      grid-area: 3/2/3/3;
      transition: grid-area 2s linear;
    `}
`;

function Home() {
  const shrink = useSelector((state) => state.categories.showSidebar);
  return (
    <StyledHome shrink={shrink}>
      <ShowCase />
      <TrendingPreview />
    </StyledHome>
  );
}

export default Home;
