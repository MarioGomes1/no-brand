import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { CiHome } from "react-icons/ci";

const StyledNav = styled.ul`
  background-color: #f1eeee;
  color: #444136;
  /* border-radius: 20px; */
  height: 5rem;
  padding: 2rem 3rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
`;

const StyledNavLink = styled(NavLink)`
  /* display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between; */
  &hover {
    background-color: red;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

function Nav() {
  return (
    <StyledNav>
      <StyledNavLink to="/home">Home</StyledNavLink>
      <StyledNavLink to="/categories">Categories</StyledNavLink>
      <StyledNavLink to="/trending">Trending</StyledNavLink>
      <StyledNavLink to="/cart">Cart</StyledNavLink>
      <ButtonContainer>
        <Button>Login</Button>
        <Button>Sign up</Button>
      </ButtonContainer>
    </StyledNav>
  );
}

export default Nav;
