import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled, { css } from "styled-components";
import Nav from "../ui/Nav";
import { useSelector } from "react-redux";
import Footer from "../ui/Footer";
import MainNav from "./MainNav";
import HamburgerMenu from "./HamburgerMenu";

import logo from "../assets/image4.webp";

const StyledAppLayout = styled.main`
  background-color: var(--color-white-main);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
`;
const Div = styled.div`
  width: 100%;
  position: relative;

  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Main = styled.div`
  /* display: absolute; */
  ${(props) =>
    props.menuOpen &&
    css`
      opacity: 0.5;
      z-index: -1000;
    `}
`;

const Cover = styled.div`
  ${(props) =>
    props.menuOpen &&
    css`
      backdrop-filter: drop-shadow(4px 4px 10px blue);
    `}
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Div>
        <Container>
          <NavLink to="/">
            <Logo src={logo} alt="" />
          </NavLink>
          <MainNav />
          <HamburgerMenu />
        </Container>
        <Nav />
      </Div>
      <Cover>
        <Main>
          <Outlet />
          <Footer />
        </Main>
      </Cover>
    </StyledAppLayout>
  );
}

export default AppLayout;
