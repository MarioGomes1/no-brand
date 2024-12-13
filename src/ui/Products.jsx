import ProductItem from "./ProductItem";

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { filterByCategory, getProducts } from "../features/filter/productSlice";
import { getFilteredProduct } from "../services/product";
import { device } from "../utils/mediaQueries";

const StyledProducts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-area: 2;
  overflow: hidden;
  padding-left: 5rem;

  @media ${device.tablet} {
    padding-left: 0;
    justify-content: space-between;
  }
  @media ${device.mobileL} {
    padding-left: 0;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

function Products({ products }) {
  return (
    <StyledProducts>
      {products?.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </StyledProducts>
  );
}

export default Products;
