import React from "react";

import { categories } from "../../throw_away/data";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const StyledCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  height: 50vh;
`;

function Category() {
  return (
    <StyledCategory>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </StyledCategory>
  );
}

export default Category;