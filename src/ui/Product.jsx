import { getRandomProducts } from "../../throw_away/data";
import ProductItem from "./ProductItem";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  grid-area: 2/2/3/3;
`;
function Product() {
  const products = getRandomProducts();
  return (
    <Container>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Container>
  );
}

export default Product;
