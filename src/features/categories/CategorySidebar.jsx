import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

const StyledSidebar = styled.aside`
  background-color: red;
  width: 100%;
  visibility: hidden;
  opacity: 0;

  ${(props) =>
    props.show &&
    css`
      visibility: visible;
      opacity: 1;
    `};
  ${(props) =>
    !props.show &&
    css`
      transition: visibility 2s, opacity 0s linear;
      visibility: hidden;
    `};
  transition: visibility 2s, opacity 0.5s linear;
`;

function CategorySidebar() {
  const showSidebar = useSelector((state) => state.categories.showSidebar);
  return <StyledSidebar show={showSidebar}>CategorySidebar</StyledSidebar>;
}

export default CategorySidebar;
