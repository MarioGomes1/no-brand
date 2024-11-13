import { useState } from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.disabled ? "#797474" : "#fff")};
  text-decoration: ${(props) => props.disabled && "line-through"};
  text-align: center;
  width: 3rem;
  border: 2px inset black;
  padding: 1px;
  margin: 2px;
  ${(props) =>
    props.type === "rounded" &&
    css`
      width: 3em;
      height: 100%;
      border-radius: 100px;
    `}
  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        cursor: pointer;
        border: 2px solid black;
        background-color: ${(props) => !props.disabled && "#373232"};
        color: #fff;
        transition: background-color 0.5s;
      }
    `}
    
    ${(props) =>
    props.children === props.$selectedSize &&
    css`
      background-color: #433f3f;
      color: white;
    `}
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1.5rem;
`;

const size = ["S", "M", "L", "XL"];

function Size({ availableSize, selectedSize, onSelect }) {
  function handleClick(e) {
    onSelect(e);
  }
  return (
    <>
      {size.map((el) => (
        <Button
          $selectedSize={selectedSize}
          onClick={() => handleClick(el)}
          disabled={!availableSize.includes(el)}
          key={el}
        >
          {el}
        </Button>
      ))}
    </>
  );
}

export default Size;
