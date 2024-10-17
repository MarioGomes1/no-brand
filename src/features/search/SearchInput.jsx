import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";

import { CiSearch } from "react-icons/ci";

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  border-radius: 28px;
  height: 3rem;
  width: 80%;
  padding-left: 3rem;
  border: none;
  color: black;
`;

const SearchIcon = styled(CiSearch)`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
`;

function SearchInput() {
  return (
    <Container>
      <SearchIcon />
      <Input type="text" placeholder="Search" />
      {/* <Button size="small">Search</Button> */}
    </Container>
  );
}

export default SearchInput;
