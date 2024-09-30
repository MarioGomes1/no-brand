import React from "react";
import styled from "styled-components";
import Header from "./Header";
import RatingStars from "./RatingStars";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledTrendingItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 #625f61;
  transition: 0.3s;
  height: 100%;
  width: 95%;
  /* text-align: center; */

  &:hover {
    box-shadow: 10px 20px 10px 0px #424042;
    cursor: pointer;
    width: 100%;
  }
`;

const ButtonContainer = styled.button``;

const Img = styled.img``;

function TrendingItem({ product }) {
  return (
    <Container>
      <Header as="h2">{product.category}</Header>
      <StyledTrendingItem>
        <Img src={product.imageURL} alt="" />
        <Header as="h1">Price:{product.price}</Header>
        <RatingStars />
        <ButtonContainer>
          <Button variation="primary">Add to Cart</Button>
          <Button variation="secondary">Buy now</Button>
        </ButtonContainer>
      </StyledTrendingItem>
    </Container>
  );
}

export default TrendingItem;
