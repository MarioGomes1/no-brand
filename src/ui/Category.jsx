import React from "react";

import { categories } from "../../throw_away/data";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
