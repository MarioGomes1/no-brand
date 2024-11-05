import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { BiCart } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

import { device } from "../utils/mediaQueries";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import { GiConsoleController } from "react-icons/gi";
import { useEffect } from "react";
import Size from "./Size";

const HoverContainer = styled.div`
  opacity: 0;

  max-height: 400px;
  height: 75%;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 2rem;
  background-color: #d6cfcf;
  @media ${device.tablet} {
    gap: 0;
    /* top: 20px; */
    min-height: 300px;
    height: 100%;
  }
`;

const StyledProduct = styled.div`
  padding: 1px;
  width: 30%;
  max-height: 400px;
  margin: 5px;
  height: auto;
  position: relative;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  &:hover ${HoverContainer} {
    opacity: 0.8;
    transition: opacity 0.5s;
  }

  @media ${device.tablet} {
    width: 50%;
    height: 100%;
    max-height: 300px;
    margin: 0;
  }
`;

const Img = styled.img`
  object-fit: cover;
  min-height: 300px;
  height: 75%;
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

const ProductInfo = styled.div`
  height: 100%;
  font-size: 0.75em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const P = styled.p`
  font-weight: ${(props) => (props.$bold ? "600" : "100")};
`;
function ProductItem({ product }) {
  const { img, price, size, title, desc, _id: id } = product;

  return (
    <StyledProduct>
      <NavLink to={`/product/${id}`}>
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
      </NavLink>
      <ProductInfo>
        <P $bold>{title}</P>
        <P>{desc}</P>
        <P $bold>${price}</P>
      </ProductInfo>
    </StyledProduct>
  );
}

function Price({ price }) {
  return <div>${price}</div>;
}

export default ProductItem;
