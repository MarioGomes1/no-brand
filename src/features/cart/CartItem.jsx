import React from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
import { motion } from "framer-motion";

const ProductContainer = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
  padding: 10px;
`;

const Image = styled.img`
  width: 30%;
  max-height: 100px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:nth-child(3) {
    justify-content: space-evenly;
    margin-left: auto;
  }
`;
const Heading = styled.p`
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 1.2rem;
      font-weight: 500;
    `}
`;

const Button = styled(motion.button)`
  background: black;
  color: white;
  width: 100%;
  font-size: 1rem;
  padding: 8px;
  border-radius: 5px;
`;

const Span = styled(motion.span)`
  cursor: pointer;
  font-size: 2rem;
  /* border: 0.5px solid red; */
`;
const QuantityContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;
function CartItem({ item }) {
  const { img, title, price, _id: id } = item;
  console.log(id);

  const dispatch = useDispatch();
  return (
    <ProductContainer>
      <Image src={img} alt="" />
      <Div>
        <Heading as="h2">{title}</Heading>
        <Heading as="h1">Size: S</Heading>
        <QuantityContainer>
          <Span
            whileTap={{ scale: 1.5 }}
            onClick={() => dispatch(increaseQuantity(id))}
          >
            +
          </Span>
          <span>1</span>
          <Span
            whileTap={{ scale: 1.5 }}
            onClick={() => dispatch(decreaseQuantity(id))}
          >
            -
          </Span>
        </QuantityContainer>
      </Div>
      <Div>
        <Heading as="h2">${price}</Heading>
        <Button
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 1.1 }}
        >
          Remove
        </Button>
      </Div>
    </ProductContainer>
  );
}

export default CartItem;
