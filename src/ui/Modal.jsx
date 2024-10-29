import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

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

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  position: absolute;
  z-index: 4;
  top: 0;
  /* right: 10px; */
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
  background: rgba(0, 0, 0, 0.5); /* Dark background with opacity */
  z-index: 1;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) =>
    props.$isOpen ? "visible" : "hidden"}; /* Hide overlay when closed */
  transition: opacity 0.5s, visibility 0.5s;
`;

function Modal({ children, isOpen, onClose }) {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <StyledModal $isOpen={isOpen}>
        <Button onClick={onClose}>
          <IoMdClose size={"30px"} />
        </Button>
        {children}
      </StyledModal>
    </>
  );
}

export default Modal;
