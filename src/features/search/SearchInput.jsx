import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";

const Container = styled.div`
  position: relative;
  display: flex;
  /* width: 100%; */
  top: 20%;
  left: 100px;
  z-index: 1000;
`;

const Input = styled.input`
  border-radius: 28px;
  height: 4rem;
`;

function SearchInput() {
  return (
    <Container>
      <Input type="text" />
      <Button size="small">Search</Button>
    </Container>
  );
}

export default SearchInput;
