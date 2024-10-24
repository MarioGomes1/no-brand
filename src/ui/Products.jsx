import ProductItem from "./ProductItem";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { filterByCategory, getProducts } from "../features/filter/productSlice";
import { getFilteredProduct } from "../services/product";

const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-area: 2;
  overflow: hidden;
  padding-left: 5rem;
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
