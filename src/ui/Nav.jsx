import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategories } from "../features/categories/categorySlice";

const StyledNav = styled.ul`
  background-color: #f1eeee;
  color: #444136;
  padding: 2rem 3rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  grid-column: 1/-1;
  grid-row: 2/3;
`;

const StyledNavLink = styled(NavLink)`
  &hover {
    background-color: red;
  }
`;

function Nav() {
  const dispatch = useDispatch();

  //temporary to display down/up arrow beside Categories
  const showCategories = useSelector((state) => state.categories.showSidebar);

  function HandleToggleSidebar() {
    dispatch(toggleCategories());
  }
  return (
    <StyledNav>
      <StyledNavLink to="/home">Home</StyledNavLink>
      <div>
        Categories
        {!showCategories && (
          <MdOutlineKeyboardArrowDown onClick={HandleToggleSidebar} />
        )}
        {showCategories && (
          <MdOutlineKeyboardArrowUp onClick={HandleToggleSidebar} />
        )}
      </div>
      <StyledNavLink to="/trending">Trending</StyledNavLink>
      <StyledNavLink to="/cart">Cart</StyledNavLink>
    </StyledNav>
  );
}

export default Nav;
