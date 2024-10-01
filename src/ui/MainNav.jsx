import React from "react";
import styled from "styled-components";
import Button from "./Button";

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
        <Button>Login</Button>
        <Button>Sign up</Button>
      </ButtonContainer>
    </StyledMainNav>
  );
}

export default MainNav;
