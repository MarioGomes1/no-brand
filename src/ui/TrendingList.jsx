import React from "react";
import TrendingItem from "./TrendingItem";
import styled from "styled-components";

const trendingProducts = [
  {
    name: "Camera",
    imageURL: "",
    price: 50,
  },
  {
    name: "Camera",
    imageURL: "",
    price: 50,
  },
  {
    name: "Camera",
    imageURL: "",
    price: 50,
  },
  {
    name: "Camera",
    imageURL: "",
    price: 50,
  },
  {
    name: "Camera",
    imageURL: "",
    price: 50,
  },
];

const StyledTrendingList = styled.ul`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  height: 100%;
`;

function TrendingList() {
  return (
    <StyledTrendingList>
      {trendingProducts.map((product) => (
        <TrendingItem product={product} />
      ))}
    </StyledTrendingList>
  );
}

export default TrendingList;
