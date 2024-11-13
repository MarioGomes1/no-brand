import React from "react";
import { useSelector } from "react-redux";
import { getCart, getCartTotal } from "./cartSlice";
import styled, { css } from "styled-components";
import CartItem from "./CartItem";

const StyledCartPreview = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* border: 1px solid black; */
  height: 90vh;
  margin: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  width: 100%;
`;
const Button = styled.button`
  background: black;
  color: white;
  width: 100%;
  font-size: 1rem;
  padding: 8px;
`;

const Title = styled.p`
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

function CartPreview() {
  const cart = useSelector(getCart);
  const cartTotal = useSelector(getCartTotal);
  // console.log(cart);

  return (
    <StyledCartPreview>
      <Title>Cart ({cart.length})</Title>
      {cart.map((item) => (
        <CartItem key={item.id && item.selectedSize} item={item} />
      ))}
      <ButtonContainer>
        <Title>Total: ${cartTotal}</Title>
        <Button>Check out</Button>
      </ButtonContainer>
    </StyledCartPreview>
  );
}

export default CartPreview;
