import React from "react";
import styled from "styled-components";
import { device } from "../../utils/mediaQueries";

const Container = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

function Filter({ label, filter }) {
  //TODO htmlFor
  return (
    <Container>
      <label htmlFor={label}>{label}</label>

      <select onChange={filter}>
        <option value="Men">Men</option>
        <option value="Kids">Kids</option>
        <option value="Women">Women</option>
      </select>
    </Container>
  );
}

export default Filter;
