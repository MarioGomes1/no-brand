import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategories } from "../features/categories/categorySlice";
import SearchInput from "../features/search/SearchInput";
import { device } from "../utils/mediaQueries";
import { motion } from "framer-motion";

const tempHeaders = [
  {
    to: "New",
    title: "New",
  },
  {
    to: "Men",
    title: "Men",
  },
  {
    to: "Women",
    title: "Women",
  },
  {
    to: "Kids",
    title: "kids",
  },
  {
    to: "Home",
    title: "Home",
  },
  {
    to: "Beauty",
    title: "Beauty",
  },
];

const StyledNav = styled(motion.ul)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  gap: 2rem;
`;

const Container = styled.div`
  /* background-color: #e6e0d7; */
  /* background-color: #e5ecf0; */
  color: #51493a;
  padding: 1rem 1rem;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  transition: 0.3s;
  /* grid-column: 1/-1;
  grid-row: 2/3; */

  @media ${device.tablet} {
    display: none;
  }
`;

//Will come from api
const SectionHeaders = styled(NavLink)`
  &:active,
  &.active:link,
  &.active:visited {
    border-bottom: 1px solid black;
    cursor: pointer;
  }

  &:hover {
    scale: 1.2;
    color: #ede7e7;
    transition: all 1;
  }
`;

//TODO Create headers table

function Nav() {
  return (
    <Container>
      <StyledNav layoutId="underline">
        {tempHeaders.map((el) => (
          <SectionHeaders key={el.title} to={`/products/${el.to}`}>
            {el.title}
          </SectionHeaders>
        ))}
      </StyledNav>
      <SearchInput />
    </Container>
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
