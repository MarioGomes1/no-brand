import styled from "styled-components";
import SearchInput from "../features/search/SearchInput";
import yellowhomepage from "../data/yellowhomepage.png";
import homepage2 from "../data/homepage2.png";
import { NavLink } from "react-router-dom";

const StyledShowCase = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  position: relative;
  height: 60vh;
  width: 100vw;
`;

const Img = styled.img`
  height: auto;
  width: 50%;
  max-width: 800px;
  opacity: 1;
  /* object-fit: cover; */
`;
const SidePanel = styled.div`
  background-color: #5bc49e;
  color: white;
  height: 100%;
  width: 50vw;
  font-family: "Sacramento", sans-serif;
  font-size: 3rem;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 44%;
  width: 13%;
  height: 12%;
  background-color: transparent;
  border-radius: 40px;
  text-transform: uppercase;
  color: white;
  border: 2px solid white;
  font-weight: 600;

  transition: all 0.3s;

  &:hover {
    background-color: aliceblue;
    transform: translateY(-10px);
    color: black;
  }
`;

function ShowCase() {
  return (
    <StyledShowCase>
      <Img src={yellowhomepage} alt="" />
      <SidePanel>Hello World</SidePanel>
      <NavLink to="/products">
        <Button>Shop</Button>
      </NavLink>
    </StyledShowCase>
  );
}

export default ShowCase;
