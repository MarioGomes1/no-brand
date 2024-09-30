import React from "react";
import TrendingItem from "./TrendingItem";
import styled from "styled-components";
import shirt from "../data/shirt.png";
import electronics from "../data/electronics.png";
import sweat from "../data/sweat.png";
import accessories from "../data/accessories.png";

const trendingProducts = [
  {
    category: "Clothing",
    name: "Shirt",
    imageURL: shirt,
    price: 50,
  },
  {
    category: "Clothing",
    name: "Clothing",
    imageURL: sweat,
    price: 50,
  },
  {
    category: "Electronics",
    name: "Computer",
    imageURL: electronics,
    price: 50,
  },
  {
    category: "Home",
    picture: "",
    name: "Camera",
    imageURL: shirt,
    price: 50,
  },
  {
    category: "Accessories",
    picture: "",
    name: "Shelf",
    imageURL: accessories,
    price: 50,
  },
];

const StyledTrendingList = styled.ul`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

function TrendingList() {
  return (
    <StyledTrendingList>
      {trendingProducts.map((product) => (
        <TrendingItem product={product} key={Math.random(0, 10)} />
      ))}
    </StyledTrendingList>
  );
}

export default TrendingList;
