import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { BiCart } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import logo from "../assets/image4.webp";
import { device } from "../utils/mediaQueries";
import { useSelector } from "react-redux";

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

const CartContainer = styled.div`
  position: relative;
`;
const CartSize = styled.span`
  font-size: 1.5;
  position: absolute;
  bottom: 15px;
  left: 18px;
  background-color: blue;
  color: white;
  border-radius: 21px;
  width: 2rem;
  text-align: center;
`;

function MainNav() {
  const cartSize = useSelector((state) => state.cart.cart.length);
  return (
    <StyledMainNav>
      <Container>
        <ButtonContainer>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
          <CartContainer>
            <BiCart size={20} />
            {cartSize > 0 && <CartSize>{cartSize}</CartSize>}
          </CartContainer>
        </ButtonContainer>
      </Container>
    </StyledMainNav>
  );
}

export default MainNav;
