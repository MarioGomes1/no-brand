import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const StyledMainNav = styled.nav`
  grid-area: 1/1/1/-1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

function MainNav() {
  return (
    <StyledMainNav>
      <ButtonContainer>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </ButtonContainer>
    </StyledMainNav>
  );
}

export default MainNav;
