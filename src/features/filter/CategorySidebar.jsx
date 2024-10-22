import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { getProducts, setCategoryFilter, setPriceFilter } from "./productSlice";

const StyledSidebar = styled.aside`
  grid-area: 2/1/2/1;
  padding: 12px;
  width: 100%;
  /* margin-right: 20px; */
`;

const subCategoryTitles = ["Categories", "Price", "Size"];

function CategorySidebar({ products }) {
  const [selected, setSelected] = useState("");
  const [showSub, setShowSub] = useState(false);

  const dispatch = useDispatch();

  function handleToggleSub() {
    setShowSub((showSub) => !showSub);
  }

  // const price = useSelector(getProductByPrice(60));
  // const p = useSelector(getProducts);

  // console.log(price);

  const filteredSection = {
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

    if (!filteredSection.categories.includes(category)) {
      filteredSection.categories.push(product.categories[0]);
    }

    if (product.price <= 20) {
      filteredSection.price.under20 += 1;
    } else if (product.price <= 50) {
      filteredSection.price.between20and50 += 1;
    } else if (product.price <= 100) {
      filteredSection.price.between50and100 += 1;
    } else {
      filteredSection.price.over100 += 1;
    }
  });

  useEffect(() => {
    filteredSection.categories.length &&
      dispatch(setCategoryFilter(filteredSection.categories));
    dispatch(setPriceFilter(filteredSection.price));
  }, [filteredSection.categories, filteredSection.price, dispatch]);

  return (
    <StyledSidebar>
      {subCategoryTitles.map((el) => (
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
      ))}
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
function SubCategories({
  filtered,
  title,
  children,
  setSelected,
  selected,
  showSub,
  onToggle,
}) {
  //   <div>
  //   <input type="checkbox" id="scales" name="scales" checked />
  //   <label for="scales">Scales</label>
  // </div>
  function showOptions() {
    console.log(selected);
    let options;
    if (title === "price") {
      console.log(filtered);
      options = (
        <>
          <Li>Under $20 ({filtered.under20})</Li>
          <Li>$20 - $50 ({filtered.between20and50})</Li>
          <Li>$50 - $100 ({filtered.between50and100})</Li>
          <Li>Over $100 ({filtered.over100})</Li>
        </>
      );
    } else {
      console.log(filtered);
      options = filtered.map((el) => (
        <div key={el}>
          <input type="checkbox" id={el} name={el} />
          <label htmlFor={el}>{el}</label>
        </div>
      ));
    }
    return options;
  }

  return (
    <ul>
      <Div>
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
      </Div>
    </ul>
  );
}

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
