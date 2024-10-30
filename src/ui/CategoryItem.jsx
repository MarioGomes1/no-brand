import React from "react";
import styled, { css } from "styled-components";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import { device } from "../utils/mediaQueries";
const StyledCategoryItem = styled.div`
  width: auto;
  height: 40vh;
  flex: 1;
  display: flex;
  justify-content: space- space-between;
  position: relative;
  &:nth-child(1) {
    width: 100%;
    left: 10%;
    margin-right: auto;
  }
  &:nth-child(2) {
    width: 100%;
    right: 10%;
    margin-left: auto;
    flex-direction: row-reverse;
    > * {
      text-align: end;
    }
  }
  &:nth-child(3) {
    margin-right: auto;
    width: 100%;
    left: 15%;
  }
  &:nth-child(4) {
    width: 100%;
    right: 15%;
    margin-left: auto;
    flex-direction: row-reverse;
    > * {
      text-align: end;
    }
  }

  @media ${device.tablet} {
    p,
    h1,
    button {
      font-size: 1.2rem;
    }
  }
`;

const Img = styled.img`
  width: 50%;
  max-width: 300px;
  height: auto;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s;
  }

  @media ${device.tablet} {
    width: 50%;
    min-width: 250px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 2rem;
  width: 25%;
  ${(props) =>
    props.$position &&
    css`
      align-items: flex-end;
      margin-right: 2rem;
    `}
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #444; /* Added hover effect */
  }
`;

const Description = styled.p`
  word-wrap: break-word;
  font-size: 80%;
`;

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
          <NavLink to={`/products/${title} `}>Shop</NavLink>
        </Button>
      </TitleContainer>
    </StyledCategoryItem>
  );
}

export default CategoryItem;
