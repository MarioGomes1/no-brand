import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { BiCart } from "react-icons/bi";
import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.webp";
// import logo from "../assets/image3.webp";
import logo from "../assets/image4.webp";

const StyledMainNav = styled.nav`
  /* background-color: var(--color-grey-0); */
  /* grid-area: 1/1/1/-1; */
  padding: 0.5rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;
const Logo = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;

function MainNav() {
  return (
    <StyledMainNav>
      <Container>
        <NavLink to="/">
          <Logo src={logo} alt="" />
        </NavLink>
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
