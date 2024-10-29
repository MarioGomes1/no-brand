import React from "react";
import styled, { css } from "styled-components";
import Header from "./Header";
import { NavLink } from "react-router-dom";
const StyledCategoryItem = styled.div`
  height: 40vh;
  display: flex;
  position: relative;
  &:nth-child(1) {
    left: 20%;
  }
  &:nth-child(2) {
    right: 5%;
    flex-direction: row-reverse;
  }
  &:nth-child(3) {
    left: 15%;
  }
  &:nth-child(4) {
    right: 20%;
    flex-direction: row-reverse;
  }
  > * img {
    /* width: 50%; */
    height: 100%;
    position: absolute;
  }
`;

const Div = styled.div`
  /* height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center; */
`;

const Img = styled.img`
  height: 100%;
  width: 30%;
`;

// ${(props) =>
//   //     props.show &&
//   //     css`
//   //       visibility: visible;
//   //       opacity: 1;

const TitleContainer = styled.div`
  ${(props) =>
    props.$position &&
    css`
      align-items: flex-end;
      margin-right: 2rem;
    `}
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 2rem;
  width: 25%;
`;

const Title = styled.h1``;

const Button = styled.button`
  background-color: black;
  color: white;
  width: 20%;
`;

const Description = styled.div``;

function CategoryItem({ category }) {
  const { image, title, description, reversedPosition } = category;

  //TODO Change to Button Component
  return (
    <StyledCategoryItem>
      <Img src={image} alt="" />
      <TitleContainer $position={reversedPosition ? 1 : 0}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button>
          <NavLink
            to={`/products/${title}
        `}
          >
            Shop
          </NavLink>
        </Button>
      </TitleContainer>
    </StyledCategoryItem>
  );
}

export default CategoryItem;
