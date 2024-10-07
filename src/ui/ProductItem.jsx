import React from "react";
import styled from "styled-components";
import { BiArrowBack, BiCart } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const StyledProduct = styled.div`
  width: 23.5rem;
  padding: 3px;
  margin: 5px;
  height: 30rem;
  position: relative;
`;

const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;

  &:hover {
    opacity: 0.5;
  }
`;

const HoverContainer = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const Emoji = styled.div`
  width: 100%;
`;
function ProductItem({ product }) {
  const { img, price, size } = product;
  size.map((el) => console.log(el));

  return (
    <StyledProduct>
      <Img src={img} alt="" />
      <HoverContainer>
        <Emoji>
          <BiCart size={35} />
          <BiHeart size={35} />
          <BiRightArrow size={35} />
        </Emoji>
        <Price price={price} />
        <Size size={size} />
      </HoverContainer>
    </StyledProduct>
  );
}

function Price({ price }) {
  return <div>${price}</div>;
}

function Size({ size }) {
  console.log(size[0]);
  return (
    <div>
      {size.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </div>
  );
}

export default ProductItem;
