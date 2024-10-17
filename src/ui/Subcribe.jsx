import React from "react";
import styled from "styled-components";

import Header from "./Header";

const Container = styled.div`
  display: flex;
  background-color: #8d6346;
  height: 15rem;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* background-color: #4c2b36; */
  /* grid-area: 3/1/4/-1; */
`;

const InputContainer = styled.div`
  display: flex;
  height: 3rem;
  width: 50%;
`;
const Input = styled.input`
  border: none;
  background-color: #d8a88a;
  height: 100%;
  width: 100%;
`;
const Button = styled.button`
  width: 10%;
  height: 100%;
  border: none;
  background-color: #e36414;
  color: white;
`;

const Detail = styled.div``;
function Subcribe() {
  return (
    <Container>
      <Header>NEWSLETTER</Header>
      <Detail>Sign up today to start receiving latest deals</Detail>
      <InputContainer>
        <Input />
        <Button>Go</Button>
      </InputContainer>
    </Container>
  );
}

export default Subcribe;
