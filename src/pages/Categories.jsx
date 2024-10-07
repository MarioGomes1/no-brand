import React from "react";
import styled from "styled-components";
import CategorySidebar from "../features/categories/CategorySidebar";
import Product from "../ui/Product";
import Filter from "../features/filter/Filter";

/* //TODO
Header
1. Category sidebar,
2. Filter component/ Sort Component
3. Product display
*/

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 15% 1fr 10%;
  grid-template-rows: 5% 1fr 10% 10%;
`;

function Categories() {
  return (
    <>
      <h1>Shirts</h1>
      <Container>
        <CategorySidebar />
        <Product />
        <Filter label={"Filter Product:"} />
        <div>Sort By:</div>
      </Container>
    </>
  );
}

export default Categories;

function Title() {}
// function Title() {}
