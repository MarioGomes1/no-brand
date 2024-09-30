import styled from "styled-components";
import SearchInput from "../features/search/SearchInput";
import mainSection2 from "../data/mainSection2.jpg";

const StyledShowCase = styled.div``;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

function ShowCase() {
  return (
    <StyledShowCase>
      {/* <SearchInput /> */}
      <Img src={mainSection2} alt="" />
      {/* <Container>
        <GridItem1>
          <div style={{ display: "flex" }}>
            <h1>Sample text here</h1>
            <h1>an image here</h1>
            <h1>another image here</h1>
          </div>
        </GridItem1>
        <GridItem2>
          <div>one</div>
          <div>two</div>
          <div>three</div>
        </GridItem2>
        <GridItem3>
        
        </GridItem3>
      </Container> */}
    </StyledShowCase>
  );
}

export default ShowCase;
