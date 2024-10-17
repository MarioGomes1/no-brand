import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "../ui/Nav";
import { useSelector } from "react-redux";
import CategorySidebar from "../features/categories/CategorySidebar";
import Footer from "../ui/Footer";
import MainNav from "./MainNav";

const StyledAppLayout = styled.main`
  background-color: var(--color-white-main);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function AppLayout() {
  // const showSideBar = useSelector((state) => state.categories.showSideBar);
  const showSideBar = useSelector((state) => state.categories.showSidebar);
  return (
    <StyledAppLayout>
      <MainNav />
      <Nav />
      <Outlet />
      {/* <CategorySidebar /> */}
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
