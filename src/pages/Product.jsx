import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategorySidebar from "../features/filter/CategorySidebar";
import Products from "../ui/Products";
import Filter from "../features/filter/Filter";
import { getAllProducts } from "../services/product";
import Subcribe from "../ui/Subcribe";

import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import PromotionBanner from "../ui/PromotionBanner";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  filterByCategory,
  setAllFilters,
  setFilteredProducts,
} from "../features/filter/productSlice";
import { device } from "../utils/mediaQueries";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 18% 1fr 10%;
  grid-template-rows: 7vh auto;
  min-height: 70vh;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function Product() {
  const navigate = useNavigate();
  const { category } = useParams();
  const dispatch = useDispatch();

  const [newCategory, setNewCategory] = useState(category);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("");
  const [filterName, setFilterName] = useState();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", { newCategory }],
    queryFn: () => getAllProducts(newCategory),
  });

  useEffect(() => {
    if (products) {
      dispatch(addProducts(products));
    }
  }, [products, dispatch, newCategory]);

  function handleFilter(e) {
    setNewCategory(e.target.value);
    navigate(`/products/${e.target.value}`);
  }
  const filteredProducts = useSelector(filterByCategory());

  function handleFilterChange(filter) {
    setFilterName(filter);
    if (filter === selectedCategoryFilter) {
      setSelectedCategoryFilter("");
    } else {
      setSelectedCategoryFilter(filter);
    }
  }

  useEffect(() => {
    dispatch(setFilteredProducts(filteredProducts));
    dispatch(setAllFilters({ name: "categories", value: filterName }));
  }, [selectedCategoryFilter, dispatch, filterName]);

  //Will refetch
  useEffect(() => {
    setNewCategory(category);
  }, [category]);
  return (
    <>
      <Container>
        <PromotionBanner />
        <ProductContainer>
          <Div>
            <h2>{category || "All"}</h2>
            <Filter
              filter={handleFilter}
              label={"Filter Product:"}
              defaultValue={category}
            />
          </Div>

          {/* <div>Sort By:</div> */}
          <CategorySidebar onChange={handleFilterChange} products={products} />
          <Products
            products={
              !selectedCategoryFilter && category ? products : filteredProducts
            }
          />
        </ProductContainer>
        <Subcribe />
      </Container>
    </>
  );
}

export default Product;

function Title() {}
// function Title() {}
