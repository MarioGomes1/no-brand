import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "../ui/Nav";

const StyledAppLayout = styled.main`
  background-color: #d2d1d1;

  height: 100vh;
  padding: 1rem 7rem 0;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Nav />
      <Outlet />
    </StyledAppLayout>
  );
}

export default AppLayout;
