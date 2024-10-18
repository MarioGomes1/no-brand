import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TfiLocationPin } from "react-icons/tfi";
import { CiMicrophoneOn } from "react-icons/ci";
import { GrContact } from "react-icons/gr";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { LuTwitter } from "react-icons/lu";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  color: #bb9c9c;
  background-color: #4c2b36;
  padding: 15px;
  width: 100%;
  height: 25vh;
  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    padding-left: 35%;
    gap: 1.5rem;
    > * em {
      text-decoration: underline;
    }
  }
`;

const Container = styled.ul``;
const Link = styled.li`
  padding: 2px;
  font-size: 1.5rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Contact = styled.div``;
const SocialContainer = styled.div`
  padding: 2rem;
  > * {
    margin-right: 50px;
  }
`;

const Title = styled.em`
  font-weight: bold;
  font-size: 1.9rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Title>Customer</Title>
        <Link>
          <NavLink to="/home">Order Status</NavLink>
        </Link>
        <Link>
          <NavLink to="/home">Returns</NavLink>
        </Link>
        <Link>
          <NavLink to="/home">Shipping Policy</NavLink>
        </Link>
        <Link>
          <NavLink to="/home">International Shipping</NavLink>
        </Link>
        <Link>
          <NavLink to="/home">Cart</NavLink>
        </Link>
      </Container>
      <Container>
        <Title>Services</Title>
        <Link>
          <NavLink to="/home">Gift Cards</NavLink>
        </Link>
        <Link>
          <NavLink to="/home">Store Locator</NavLink>
        </Link>
        <Link>
          <NavLink to="/home">Promotions</NavLink>
        </Link>
      </Container>
      <Container>
        <Title>Find us!</Title>
        <Contact>
          <div>
            <TfiLocationPin />
            <span> P. Sherman, 42 Wallaby Way, Sydney, Australia</span>
          </div>
          <div>
            <CiMicrophoneOn />
            <span> +351 555 555 89</span>
          </div>
          <div>
            <GrContact />
            <span> justkeepswimming@squirt.com</span>
          </div>
        </Contact>
        <SocialContainer>
          <SlSocialFacebook />
          <SlSocialInstagram />
          <LuTwitter />
        </SocialContainer>
      </Container>
    </StyledFooter>
  );
}
// import { SlSocialFacebook } from "react-icons/sl";
// import { SlSocialInstagram } from "react-icons/sl";
// import { LuTwitter } from "react-icons/lu";
// import { TfiLocationPin } from "react-icons/tfi";
// import { CiMicrophoneOn } from "react-icons/ci";
// import { SiMinutemailer } from "react-icons/si";

export default Footer;
