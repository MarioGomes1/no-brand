import ProductItem from "./ProductItem";

import styled from "styled-components";
import { useParams } from "react-router-dom";

const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-area: 2;
  overflow: hidden;
`;

function Products({ products }) {
  //TODO invalidate queries?

  return (
    <StyledProducts>
      {products?.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </StyledProducts>
  );
}

export default Products;
