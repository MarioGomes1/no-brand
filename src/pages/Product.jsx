import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategorySidebar from "../features/filter/CategorySidebar";
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
import PromotionBanner from "../ui/PromotionBanner";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  filterByCategory,
  getProducts,
} from "../features/filter/productSlice";

/* //TODO
Header
1. Category sidebar,
2. Filter component/ Sort Component
3. Product display
*/
const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 18% 1fr 10%;
  grid-template-rows: 7vh auto;
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
  const dispatch = useDispatch();

  const [newCategory, setNewCategory] = useState(category);

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", { newCategory }],
    queryFn: () => getAllProducts(newCategory),
  });

  useEffect(() => {
    if (products && !newCategory) {
      dispatch(addProducts(products));
    }
  }, [products, dispatch, newCategory]);

  function handleFilter(e) {
    setNewCategory(e.target.value);
    navigate(`/products/${e.target.value}`);
  }

  const p = useSelector(getProducts);
  const filteredProducts = useSelector(filterByCategory);

  console.log(p);
  console.log(filteredProducts);
  //Will refetch
  useEffect(() => {
    setNewCategory(category);
  }, [category]);
  return (
    <>
      <Container>
        <PromotionBanner />
        <h1>{category || "All"}</h1>
        <ProductContainer>
          <Filter
            filter={handleFilter}
            label={"Filter Product:"}
            defaultValue={category}
          />
          <div>Sort By:</div>
          <CategorySidebar products={products} />
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
