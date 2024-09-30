import ShowCase from "../ui/ShowCase";
import TrendingPreview from "../ui/TrendingPreview";
import Footer from "../ui/Footer";

import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.2rem;
  height: 100vh;
`;

function Home() {
  return (
    <StyledHome>
      <ShowCase />
      <TrendingPreview />
      <Footer />
    </StyledHome>
  );
}

export default Home;
