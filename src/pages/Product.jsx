import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategorySidebar from "../features/categories/CategorySidebar";
import Products from "../ui/Products";
import Filter from "../features/filter/Filter";
import { getAllProducts } from "../services/product";
import Subcribe from "../ui/Subcribe";

import {
  useParams,
  useNavigate,
  useSearchParams,
  replace,
} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

/* //TODO
Header
1. Category sidebar,
2. Filter component/ Sort Component
3. Product display
*/
const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr 10%;
  grid-template-rows: 5% auto;
  min-height: 70vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Product() {
  const navigate = useNavigate();
  const { category } = useParams();

  const [newCategory, setNewCategory] = useState(category);
  console.log(newCategory);

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", { newCategory }],
    queryFn: () => getAllProducts(newCategory),
  });

  function handleFilter(e) {
    setNewCategory(e.target.value);
    navigate(`/products/${e.target.value}`);
  }

  //Will refetch
  useEffect(() => {
    setNewCategory(category);
  }, [category]);
  return (
    <>
      <h1>{category || "All"}</h1>
      <Container>
        <ProductContainer>
          <Filter
            filter={handleFilter}
            label={"Filter Product:"}
            defaultValue={category}
          />
          <div>Sort By:</div>
          <CategorySidebar />
          <Products products={products} />
        </ProductContainer>
        <Subcribe />
      </Container>
    </>
  );
}

export default Product;

function Title() {}
// function Title() {}
