import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../utils/mediaQueries";

import { GoArrowSwitch } from "react-icons/go";
import Modal from "../../ui/Modal";

const Container = styled.div`
  @media ${device.tablet} {
    /* display: none; */
  }
`;

const FilterContainer = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 10px;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  border: 1px solid #b1abab;
  color: black;
  width: 8rem;
  background-color: #ffff;
  border-radius: 20px;
  padding: 0.6rem;
`;
const Div = styled.div`
  display: flex;
`;
const P = styled.p`
  font-size: 1em;
  /* font-weight: 500; */
  /* margin-bottom: 20px; */
`;

const Section = styled.div`
  /* position: relative; */
`;
const Content = styled.fieldset`
  border-top: none;
  border-left: none;
  border-right: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* > * {
    &::before {
      content: "";
      margin: 2px;
      background-color: red;
    }
  } */
`;
const Title = styled.legend`
  margin-bottom: 20px;
  font-size: 1em;
  font-weight: 500;
`;

const Input = styled.input`
  list-style: none;
  margin-right: 10px;
  width: 20px;
`;

const Label = styled.label`
  font-size: 0.85em;
`;
function Filter({ label, filter }) {
  const [showFilters, setShowFilters] = useState(false);

  function handleShowModal() {
    setShowFilters((showFilters) => !showFilters);
  }

  return (
    <Container>
      {showFilters && (
        <Modal
          isOpen={showFilters}
          open={showFilters}
          onClose={handleShowModal}
          width="100%"
        >
          <P>Filter</P>
          <FilterContainer>
            <Section>
              <Title>Sort By </Title>
              <Content>
                <Div>
                  <Input name="sortBy" id="lowToHigh" type="radio" />
                  <Label for="lowToHigh">Price: Low to High</Label>
                </Div>
                <Div>
                  <Input name="sortBy" id="highToLow" type="radio" />
                  <Label for="highToLow">Price: High to Low</Label>
                </Div>
                <Div>
                  <Input name="sortBy" id="new" type="radio" />
                  <Label for="new">Latest</Label>
                </Div>
              </Content>
            </Section>
          </FilterContainer>
        </Modal>
      )}
      <Button onClick={handleShowModal}>
        <P>Filter</P>
        <GoArrowSwitch />
      </Button>
    </Container>
  );
}

export default Filter;

// TODO Use the reusable modal for this
// return (

// );

{
  /* <Section>
<Title>Sort By:</Title>
<Content>
  <Li>Test</Li>
  <Li>test</Li>
  <Li>test</Li>
</Content>
</Section>
<Section>
<Title>Sort By:</Title>
<Content>
  <Li>Test</Li>
  <Li>test</Li>
  <Li>test</Li>
</Content>
</Section>
<Section>
<Title>Sort By:</Title>
<Content>
  <Li>Test</Li>
  <Li>test</Li>
  <Li>test</Li>
</Content>
</Section> */
}
