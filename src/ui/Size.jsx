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
    ${(props) => console.log(props)}
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1.5rem;
`;

const size = ["S", "M", "L", "XL"];

function Size({ availableSize, type }) {
  const [selected, setSelected] = useState(false);
  let test = "";
  function handleClick() {
    test = "whatever";
    setSelected((prev) => !prev);
  }
  return (
    <>
      {size.map((el) => (
        <Button
          selected={selected}
          onClick={handleClick}
          type={type}
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
