import ProductItem from "./ProductItem";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { filterByCategory, getProducts } from "../features/filter/productSlice";
import { getFilteredProduct } from "../services/product";
import { device } from "../utils/mediaQueries";

const StyledProducts = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-area: 2;
  overflow: hidden;
  padding-left: 5rem;

  @media ${device.tablet} {
    padding-left: 0;
    justify-content: space-between;
    row-gap: 8rem;
    height: 100vh;
    overflow: auto;
  }
`;

function Products({ products }) {
  return (
    <StyledProducts>
      {products?.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </StyledProducts>
  );
}

export default Products;
