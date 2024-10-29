import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import styled, { css, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

import { IoPersonOutline } from "react-icons/io5";
import { IoBasketOutline } from "react-icons/io5";
import Modal from "./Modal";
import Subcribe from "./Subcribe";

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
    console.log("clicked");
  };
  return (
    <Div>
      {!isOpen && (
        <>
          <IoBasketOutline size={"25px"} />
          <IoPersonOutline size={"25px"} />
          <RxHamburgerMenu size={"30px"} onClick={toggleMenu} />
        </>
      )}

      <HambugerOptions show={isOpen} onClose={toggleMenu} />
    </Div>
  );
}

export default HamburgerMenu;

const slideIn = keyframes`
    from {
        transform:translateY(-800px)
  }

  to{
    transform:translateY(40px)
  
    };
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const MenuModal = styled.div`
  position: fixed;
  top: -40px;
  right: 0;
  width: 80%;
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

const CategoryLinks = styled.ul`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  padding: 5rem 5rem;
  font-size: 2rem;
  gap: 4rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 3rem;

  /* justify-content: space-evenly; */
`;

const Button = styled(NavLink)`
  text-align: center;
  border-radius: 10px;
  padding: 0.5rem;
  width: 50%;
  background-color: ${(props) => (props.black ? "black" : "white")};
  color: ${(props) => (props.black ? "white" : "black")};
  border: 1px solid grey;
`;

const Li = styled(NavLink)`
  display: flex;
`;

const P = styled.p`
  padding: 5rem 5rem;
`;

function HambugerOptions({ show, onClose }) {
  return (
    <Modal onClose={onClose} isOpen={show}>
      <MenuModal open={show}>
        <CategoryLinks>
          <Li onClick={onClose} to="products/Men">
            Men
          </Li>
          <Li onClick={onClose} to="products/Women">
            Women
          </Li>
          <Li onClick={onClose} to="products/Kids">
            Kids
          </Li>
          <Li onClick={onClose} to="products/Accessories">
            Accessories
          </Li>
        </CategoryLinks>
        <P>
          Become a member today for the best products, inspiration and stories
          in fashion
        </P>
        <ButtonContainer>
          <Button black to="/login">
            Sign In
          </Button>
          <Button to="/signup">Join Us</Button>
        </ButtonContainer>
        <Subcribe />
      </MenuModal>
    </Modal>
  );
}
