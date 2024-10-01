import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "../ui/Nav";
import { useSelector } from "react-redux";
import CategorySidebar from "../features/categories/CategorySidebar";
import Footer from "../ui/Footer";
import MainNav from "./MainNav";

const StyledAppLayout = styled.main`
  background-color: #d2d1d1;
  /* padding: 1rem 7rem 0; */
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 3% 7% 1fr 25%;
`;

function AppLayout() {
  // const showSideBar = useSelector((state) => state.categories.showSideBar);
  const showSideBar = useSelector((state) => state.categories.showSidebar);
  console.log(showSideBar);
  return (
    <StyledAppLayout>
      <MainNav />
      <Nav />
      <Outlet />
      <CategorySidebar />
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
