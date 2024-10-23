import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import {
  filterByCategory,
  getCategoryFilter,
  getPriceFilter,
  getSizeFilter,
  setCategoryFilter,
  setPriceFilter,
  setSizeFilter,
} from "./productSlice";

const StyledSidebar = styled.aside`
  grid-area: 2/1/2/1;
  padding: 12px;
  width: 100%;
  /* margin-right: 20px; */
`;

const subCategoryTitles = ["Categories", "Price", "Size"];

function CategorySidebar({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSub, setShowSub] = useState(false);

  const dispatch = useDispatch();

  function handleToggleSub() {
    setShowSub((showSub) => !showSub);
  }

  const filteredSection = useMemo(() => {
    const section = {
      categories: [],
      price: {
        under20: 0,
        between20and50: 0,
        between50and100: 0,
        over100: 0,
      },

      size: ["Small", "Medium", "Large", "Xlarge"],
    };

    products?.forEach((product) => {
      const category = product.categories[0];
      if (!section.categories.includes(category)) {
        section.categories.push(category);
      }

      if (product.price <= 20) {
        section.price.under20 += 1;
      } else if (product.price <= 50) {
        section.price.between20and50 += 1;
      } else if (product.price <= 100) {
        section.price.between50and100 += 1;
      } else {
        section.price.over100 += 1;
      }
    });

    return section;
  }, [products]);

  useEffect(() => {
    filteredSection.categories.length &&
      dispatch(setCategoryFilter(filteredSection.categories));
    dispatch(setSizeFilter(filteredSection.size));
  }, [filteredSection.categories, dispatch, filteredSection.size]);

  useEffect(() => {
    dispatch(setPriceFilter(filteredSection.price));
  }, [filteredSection.price, dispatch]);

  // const priceFilter = useSelector(getCategoryFilter);
  const categoryFilter = useSelector(getCategoryFilter);
  const priceFilter = useSelector(getPriceFilter);
  const sizeFilter = useSelector(getSizeFilter);

  const filteredProducts = useSelector(filterByCategory(selectedCategory));
  console.log(filteredProducts);
  function handleOnClick(e) {
    console.log(e);
    setSelectedCategory(e);
  }

  function renderOptions(filterType, filterItems) {
    let options;
    if (filterType === "price") {
      options = (
        <>
          <li>Under 20: {`(${filterItems.under20})`}</li>
          <li>$20 - $50: {`(${filterItems.between20and50})`}</li>
          <li>$50 - $100: {`(${filterItems.between50and100})`}</li>
          <li>Over $100: {`(${filterItems.over100})`}</li>
        </>
      );
    } else {
      options = filterItems?.map((el) => (
        <li key={el}>
          <input
            onClick={() => handleOnClick(el)}
            type="checkbox"
            id={el}
            name={el}
          />
          <label htmlFor={el}>{el}</label>
        </li>
      ));
    }

    return options;
  }

  return (
    <StyledSidebar>
      <SubCategories title="Category">
        {categoryFilter?.map((category) => renderOptions("category", category))}
      </SubCategories>
      <SubCategories title="Size">
        {sizeFilter?.map((size) => renderOptions("size", size))}
      </SubCategories>
      <SubCategories title="Price">
        {priceFilter?.map((price) => renderOptions("price", price))}
      </SubCategories>
      {/* {subCategoryTitles.map((el) => (
        <SubCategories
          onToggle={handleToggleSub}
          selected={selected == el.toLowerCase()}
          setSelected={setSelected}
          key={el}
          title={el.toLowerCase()}
          showSub={showSub}
          filtered={filteredSection[selected]}
        >
          {el}
        </SubCategories>
      ))} */}
    </StyledSidebar>
  );
}
const ListItem = styled.div`
  display: flex;
  padding: 10px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #afa6a6;
  &:hover {
    cursor: pointer;
  }
  height: auto;
`;
const Li = styled.li`
  &:hover {
    text-decoration: underline;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Span = styled.span``;

const SubCategoryContainer = styled.div`
  padding: 0 0 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.2rem;
`;
function SubCategories({ filtered, title, children }) {
  //   <div>
  //   <input type="checkbox" id="scales" name="scales" checked />
  //   <label for="scales">Scales</label>
  // </div>
  const categoryFilter = useSelector(getCategoryFilter);

  const [display, setDisplay] = useState();

  return (
    <Div>
      <ListItem onClick={() => setDisplay(!display)}>
        <CategoryContainer>
          {title} <Span>{display ? "-" : "+"}</Span>
        </CategoryContainer>
      </ListItem>
      <SubCategoryContainer>
        {display && <ul>{children.map((el) => el)}</ul>}
      </SubCategoryContainer>
    </Div>
  );
}

/* <Div>
<ListItem onClick={() => setSelected(title)}>
  <CategoryContainer onClick={onToggle}>
    {children} <Span>{showSub && selected ? "-" : "+"}</Span>
  </CategoryContainer>
</ListItem>
{showSub && selected && (
  <SubCategoryContainer>
    {selected && showOptions()}
  </SubCategoryContainer>
)}
</Div> */

export default CategorySidebar;

// return (
//   <StyledSidebar>
//     Total number of items
//     <Container>
//       <List>
//         <ListItem>
//           <Div>
//             Category <Span>+</Span>
//           </Div>
//           <SubCategories>
//             <List>
//               Men
//               <SubCategories>blahg</SubCategories>
//               <SubCategories>blahg</SubCategories>
//               <SubCategories>blahg</SubCategories>
//             </List>
//           </SubCategories>
//         </ListItem>
//       </List>
//       <List>
//         <ListItem>
//           <Div>
//             Category <span>+</span>
//           </Div>
//           <SubCategories>
//             <List>
//               Men
//               <SubCategories>blahg</SubCategories>
//               <SubCategories>blahg</SubCategories>
//               <SubCategories>blahg</SubCategories>
//             </List>
//           </SubCategories>
//         </ListItem>
//       </List>
//     </Container>
//   </StyledSidebar>

// const StyledSidebar = styled.aside`
//   background-color: red;
//   width: 100%;
//   visibility: hidden;
//   opacity: 0;

//   ${(props) =>
//     props.show &&
//     css`
//       visibility: visible;
//       opacity: 1;
//     `};
//   ${(props) =>
//     !props.show &&
//     css`
//       transition: visibility 2s, opacity 0s linear;
//       visibility: hidden;
//     `};
//   transition: visibility 2s, opacity 0.5s linear;
// `;

// function renderOptions(type) {
//   let options;
//   if (type === "price") {
//     console.log(filtered);
//     options = (
//       <>
//         <Li>Under $20 ({filtered.under20})</Li>
//         <Li>$20 - $50 ({filtered.between20and50})</Li>
//         <Li>$50 - $100 ({filtered.between50and100})</Li>
//         <Li>Over $100 ({filtered.over100})</Li>
//       </>
//     );
//   } else {
//     // console.log(categoryFilter);
//     options = categoryFilter.map((el) => (
//       <li key={el}>
//         <input type="checkbox" id={el} name={el} />
//         <label htmlFor={el}>{el}</label>
//       </li>
//     ));
//   }
//   return options;
// }
