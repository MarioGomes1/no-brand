import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import styled, { css, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

import { IoPersonOutline } from "react-icons/io5";
import { IoBasketOutline } from "react-icons/io5";

const Div = styled.div`
  display: none;

  justify-content: flex-end;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 480px) {
    display: flex;
  }
`;

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Div>
      <RxHamburgerMenu size={"30px"} onClick={toggleMenu} />
      {!isOpen && (
        <>
          <IoBasketOutline size={"25px"} />
          <IoPersonOutline size={"25px"} />
        </>
      )}

      {isOpen && <HambugerOptions show={isOpen} />}
    </Div>
  );
}

export default HamburgerMenu;

const slideIn = keyframes`
    from {
        width:0;
        height:0;
  }

  to{
    width:50%;
  
    };
`;
const slideOut = keyframes`
    from {
       
    transform:translateX(300px);
  }

  to{
    
    transform: translateX(0)
    };
`;

const MenuModal = styled.div`
  width: ${(props) => (props.open ? "50%" : "0")};
  height: ${(props) => (props.open ? "100vh" : "0")}; /* Open height */
  padding: ${(props) => (props.open ? "25px 0" : "0")};
  background: #f8f3f3;
  top: 100%;
  box-shadow: 0 10px 15px -3px rgb(46 41 51 / 8%),
    0 4px 6px -2px rgb(71 63 79 / 16%);
  /* transition: all 10s; */

  z-index: 1000;
  position: absolute;
  animation: ${(props) =>
    props.open &&
    css`
      ${slideIn} 1s;
    `};
  animation: ${(props) =>
    !props.open &&
    css`
      ${slideOut} 1s;
    `};
`;

const CategoryLinks = styled.div``;

const ButtonContainer = styled.div``;

const Button = styled(NavLink)`
  background-color: black;
  color: #b84b4b;
`;

function HambugerOptions({ show }) {
  return (
    <MenuModal open={show}>
      <CategoryLinks>
        <li>Men</li>
        <li>sdfdsf</li>
        <li>sdfds</li>
      </CategoryLinks>
      <ButtonContainer>
        <Button to="/login">Login</Button>
        <Button to="/signup">Sign up</Button>
      </ButtonContainer>
    </MenuModal>
  );
}
