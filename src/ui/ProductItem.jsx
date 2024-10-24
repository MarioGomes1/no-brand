import React from "react";
import styled, { css } from "styled-components";
import { BiCart } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BsListNested } from "react-icons/bs";

const HoverContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 2rem;
  background-color: #d6cfcf;
`;

const StyledProduct = styled.div`
  width: 23.5rem;
  margin: 5px;
  height: 30rem;
  position: relative;
  &:hover ${HoverContainer} {
    opacity: 0.8;
    transition: opacity 0.5s;
  }
`;

const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const Emoji = styled.div`
  display: flex;
  gap: 1rem;
`;

//TODO move these to a reusable component.
const CartEmoji = styled(BiCart)`
  padding: 5px;
  cursor: pointer;
  border-radius: 20px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;
const HeartEmoji = styled(BiHeart)`
  padding: 5px;
  cursor: pointer;
  border-radius: 20px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;
const ArrowEmoji = styled(BiRightArrow)`
  padding: 5px;
  cursor: pointer;
  border-radius: 20px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const BuyButton = styled.button`
  margin-top: 20%;
  width: 100%;
  background-color: #00ffff;
  border-radius: 5px;
  &:hover {
    background-color: #189d9d;
    color: white;
    transition: background-color 0.5s;
  }
`;
function ProductItem({ product }) {
  // console.log(product);
  const { img, price, size } = product;

  return (
    <StyledProduct>
      <Img src={img} alt="" />
      <HoverContainer>
        <Emoji>
          <CartEmoji onClick={() => console.log("test")} size={35} />
          <HeartEmoji size={35} />
          <ArrowEmoji size={35} />
        </Emoji>
        <Price price={price} />
        <Size availableSize={size} />
        <BuyButton>Buy Now</BuyButton>
      </HoverContainer>
    </StyledProduct>
  );
}

function Price({ price }) {
  return <div>${price}</div>;
}

const Button = styled.button`
  background-color: ${(props) => (props.disabled ? "#797474" : null)};
  display: inline-block;
  text-align: center;
  width: 3rem;
  border: 2px inset black;
  padding: 1px;
  margin: 2px;

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        cursor: pointer;
        border: 2px solid black;
        background-color: #69a1d9;
        transition: background-color 0.5s;
      }
    `}
`;

const size = ["S", "M", "L", "XL"];

function Size({ availableSize }) {
  console.log(size.map((el) => availableSize.includes(el)));
  return (
    <div>
      {size.map((el) => (
        <Button disabled={!availableSize.includes(el)} key={el}>
          {el}
        </Button>
      ))}
    </div>
  );
}

export default ProductItem;
