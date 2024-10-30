import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { BiCart } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import logo from "../assets/image4.webp";
import { device } from "../utils/mediaQueries";

const StyledMainNav = styled.nav`
  padding: 0.5rem;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    display: none;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

function MainNav() {
  return (
    <StyledMainNav>
      <Container>
        <ButtonContainer>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
          <BiCart size={20} color={"blue"} />
        </ButtonContainer>
      </Container>
    </StyledMainNav>
  );
}

export default MainNav;
