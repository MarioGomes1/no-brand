import React from "react";
import styled from "styled-components";
import { device } from "../../utils/mediaQueries";

import { GoArrowSwitch } from "react-icons/go";

const Container = styled.div`
  @media ${device.tablet} {
    /* display: none; */
  }
`;

const Button = styled.button`
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
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
`;
const P = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;
function Filter({ label, filter }) {
  //TODO htmlFor
  return (
    <Container>
      <Button>
        <Div>
          <P>Filter</P> <GoArrowSwitch />
        </Div>
      </Button>
    </Container>
  );
}

export default Filter;

// TODO Use the reusable modal for this
// return (
//   <Container>
//     <label htmlFor={label}>{label}</label>

//     <select onChange={filter}>
//       <option value="Men">Men</option>
//       <option value="Kids">Kids</option>
//       <option value="Women">Women</option>
//     </select>
//   </Container>
// );
