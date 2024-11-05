import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getProduct } from "../services/product";
import { useParams, useSearchParams } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

const StyledProductPage = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled(motion.div)`
  /* margin: 100px; */
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  width: 100%;
  height: 100vh;
`;

const LeftPanel = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
  grid-column: span 4;
  grid-row: 1/1;
  border: 1px solid black;
  height: 50%;
`;
const MainImage = styled.img`
  width: 450px;
  height: auto;
  overflow: hidden;
`;
const SideImageContainer = styled.div`
  width: 10em;
  border: 1px solid black;
  overflow: scroll;
  scrollbar-color: none;
  scrollbar-width: none;
`;

const SideImagePreview = styled.img`
  display: flex;
  width: 80px;
  height: 80px;
  border: 1px solid black;
`;

const RightPanel = styled.div`
  border: 1px solid red;
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #23dc2c;
  height: 33%;
`;

// const Description = styled.div`
//     display:flex;
//     flex-direction:column;
// `

const ColorContainer = styled.div`
  border: 1px solid #dddd26;
  height: 33%;
`;
const SizeContainer = styled.div`
  border: 1px solid #fdfd;
  height: 33%;
`;

const Header = styled.header`
  width: 100%;
  height: 5em;
  border: 1px solid yellowgreen;
`;

// animate={{
//     scale: [1, 2, 2, 1, 1],
//     rotate: [0, 0, 270, 270, 0],
//     // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
//   }}
function ProductPage() {
  const { id } = useParams();
  const [productId, setProductId] = useState(id);

  const { data: product, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(id),
  });

  const { title, size, desc, price, categories } = product || "";
  console.log(isLoading);

  function TempPreviewImages() {
    let arr = [];
    for (let index = 0; index < 8; index++) {
      arr.push(<SideImagePreview src={product.img} />);
    }
    return arr.map((el) => el);
  }
  return (
    <StyledProductPage>
      <Header>div</Header>
      {!isLoading && (
        <Container>
          <LeftPanel>
            <>
              <SideImageContainer>{TempPreviewImages()}</SideImageContainer>
              <MainImage src={product.img} />{" "}
            </>
          </LeftPanel>
          <RightPanel>
            <TitleContainer>
              <div>{title}</div>
              <div>{categories.toString().split(",")}</div>
              <div>${price}</div>
            </TitleContainer>
            <ColorContainer></ColorContainer>
            <SizeContainer>Else</SizeContainer>
          </RightPanel>
        </Container>
      )}
    </StyledProductPage>
  );
}

export default ProductPage;
