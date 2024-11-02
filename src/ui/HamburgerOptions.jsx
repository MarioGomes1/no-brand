import styled, { css, keyframes } from "styled-components";
import Subcribe from "./Subcribe";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";

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
    <Modal onClose={onClose} isOpen={show} open={show} width="80%">
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
        Become a member today for the best products, inspiration and stories in
        fashion
      </P>
      <ButtonContainer>
        <Button black="true" to="/login">
          Sign In
        </Button>
        <Button to="/signup">Join Us</Button>
      </ButtonContainer>
      <Subcribe />
    </Modal>
  );
}

export default HambugerOptions;
