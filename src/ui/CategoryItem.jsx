import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { NavLink } from "react-router-dom";
const StyledCategoryItem = styled.div`
  flex: 1 0 40%;
  position: relative;
  /* margin: 10px; */
  /* padding: 20px; */
`;
const Img = styled.img`
  width: 100%;
  height: 50vh;
`;

const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

function CategoryItem({ category }) {
  const { image, title } = category;

  //TODO Change to Button Component
  return (
    <StyledCategoryItem>
      <Img src={image} alt="" />
      <Div>
        <Header as="h3">{title}</Header>
        <NavLink
          to={`/products/${title}
          `}
        >
          Shop
        </NavLink>
      </Div>
    </StyledCategoryItem>
  );
}

export default CategoryItem;
