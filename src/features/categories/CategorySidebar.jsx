import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

const StyledSidebar = styled.aside`
  grid-area: 1/1/3/1;
  /* background-color: #b86262; */
  /* height: 0%; */
  width: 100%;
  /* opacity: 0; */
  ${(props) =>
    props.show &&
    css`
      /* grid-area: 3/1/3/-1;
      z-index: 1;
      transition: height 0.25s ease-in-out;
      transition: opacity 0.25s ease-in;
      opacity: 1;
      height: 50%; */
    `}
`;

function CategorySidebar() {
  // const showSidebar = useSelector((state) => state.categories.showSidebar);
  return <StyledSidebar>CategorySidebar</StyledSidebar>;
}

export default CategorySidebar;

// const StyledSidebar = styled.aside`
//   background-color: red;
//   width: 100%;
//   visibility: hidden;
//   opacity: 0;

//   ${(props) =>
//     props.show &&
//     css`
//       visibility: visible;
//       opacity: 1;
//     `};
//   ${(props) =>
//     !props.show &&
//     css`
//       transition: visibility 2s, opacity 0s linear;
//       visibility: hidden;
//     `};
//   transition: visibility 2s, opacity 0.5s linear;
// `;
