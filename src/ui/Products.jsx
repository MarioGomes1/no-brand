import { useQuery } from "@tanstack/react-query";
import { getRandomProducts, seedDB } from "../../throw_away/data";
import { getAllProducts } from "../services/product";
import ProductItem from "./ProductItem";

import styled from "styled-components";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  grid-area: 2/2/3/3;
`;
function Products({ products }) {
  //TODO invalidate queries?

  return (
    <Container>
      {products?.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </Container>
  );
}

export default Products;
