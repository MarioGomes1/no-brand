import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "../ui/Nav";

const StyledAppLayout = styled.main`
  background: linear-gradient(to bottom, #9a8b65, #b4aa90);

  height: 100vh;
  padding: 4rem 5rem 0;
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
