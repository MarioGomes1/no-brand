import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import styled, { css, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

import { IoPersonOutline } from "react-icons/io5";
import { IoBasketOutline } from "react-icons/io5";
import Modal from "./Modal";
import Subcribe from "./Subcribe";
import HambugerOptions from "./HamburgerOptions";
import { device } from "../utils/mediaQueries";

const Div = styled.div`
  display: none;

  justify-content: flex-end;
  align-items: flex-start;
  gap: 2rem;

  @media ${device.tablet} {
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
