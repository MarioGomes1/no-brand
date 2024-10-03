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
  justify-content: center;
  align-items: flex-start;
  gap: 2.5rem;
  transition: 0.3s;
  grid-column: 1/-1;
  grid-row: 2/3;
  /* align-items: end; */
`;

//Will come from api
const SectionHeaders = styled(NavLink)`
  &:hover {
    border-bottom: 1px solid black;
    cursor: pointer;
  }
`;

//TODO Create headers table

const tempHeaders = [
  {
    to: "new",
    title: "New",
  },
  {
    to: "men",
    title: "Men",
  },
  {
    to: "women",
    title: "Women",
  },
  {
    to: "kids",
    title: "Kids",
  },
  {
    to: "home",
    title: "Home",
  },
  {
    to: "beauty",
    title: "Beauty",
  },
];

function Nav() {
  const dispatch = useDispatch();

  //temporary to display down/up arrow beside Categories
  const showCategories = useSelector((state) => state.categories.showSidebar);

  function HandleToggleSidebar() {
    dispatch(toggleCategories());
  }
  return (
    <StyledNav>
      {tempHeaders.map((el) => (
        <SectionHeaders
          onMouseEnter={HandleToggleSidebar}
          onMouseLeave={HandleToggleSidebar}
          key={el.title}
          to={el.to}
        >
          {el.title}
        </SectionHeaders>
      ))}
    </StyledNav>
  );
}

export default Nav;

// return (
//   <StyledNav>
//     <StyledNavLink to="/home">Home</StyledNavLink>
//     <div>
//       Categories
//       {!showCategories && (
//         <MdOutlineKeyboardArrowDown onClick={HandleToggleSidebar} />
//       )}
//       {showCategories && (
//         <MdOutlineKeyboardArrowUp onClick={HandleToggleSidebar} />
//       )}
//     </div>
//     <StyledNavLink to="/trending">Trending</StyledNavLink>
//     <StyledNavLink to="/cart">Cart</StyledNavLink>
//   </StyledNav>
// );
