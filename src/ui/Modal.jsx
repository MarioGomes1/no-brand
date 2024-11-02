import React from "react";
import styled, { css, keyframes } from "styled-components";
import { IoMdClose } from "react-icons/io";

const slideIn = keyframes`
    from {
        transform:translateY(-100px)
  }

  to{
    transform:translateY(40px)
  
    };
`;

const slideOut = keyframes`
  from {
    /* transform: translateX(0); */
  }
  to {
    /* transform: translateX(100%); */
  }
`;

const MenuModal = styled.div`
  position: fixed;
  top: -40px;
  right: 0;
  width: ${(props) => props.width};
  height: 100vh;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgb(46 41 51 / 8%),
    0 4px 6px -2px rgb(71 63 79 / 16%);
  z-index: 3;
  overflow: hidden;

  transition: transform 0.5s ease;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};

  animation: ${(props) =>
    props.open
      ? css`
          ${slideIn} 0.5s forwards;
        `
      : css`
          ${slideOut} 0.5s forwards;
        `};
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  position: absolute;
  z-index: 4;
  top: 0;
  left: 90%;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) =>
    props.$isOpen ? "visible" : "hidden"}; /* Hide overlay when closed */
  transition: opacity 0.5s, visibility 0.5s;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* background-color: #ffff; */
  z-index: 2;
  overflow-y: auto;
  transition: transform 0.5s ease-in-out, opacity 0.5s;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
`;

function Modal({ children, isOpen, onClose, open, type, width }) {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <StyledModal $isOpen={isOpen}>
        <Button onClick={onClose}>
          <IoMdClose size={"30px"} />
        </Button>
        <MenuModal width={width} open>
          {children}
        </MenuModal>
      </StyledModal>
    </>
  );
}

export default Modal;
