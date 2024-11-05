import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getProduct } from "../services/product";
import { useParams, useSearchParams } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import Size from "../ui/Size";

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
  /* border: 1px solid black; */
  height: 50%;
`;
const MainImage = styled.img`
  width: 450px;
  height: auto;
  overflow: hidden;
  border-radius: 10px;
`;
const SideImageContainer = styled.div`
  width: 10em;
  /* border: 1px solid black; */
  overflow: scroll;
  scrollbar-color: none;
  scrollbar-width: none;
`;

const SideImagePreview = styled.img`
  display: flex;
  width: 80px;
  height: 80px;
  margin-bottom: 2rem;
  border-radius: 10px;
  /* border: 1px solid black; */
`;

const RightPanel = styled.div`
  /* border: 1px solid red; */
  padding: 20px;
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid #23dc2c; */
  height: 25%;
  gap: 0.5rem;
`;

// const Description = styled.div`
//     display:flex;
//     flex-direction:column;
// `

const ColorContainer = styled.div`
  /* border: 1px solid #dddd26; */
  height: 33%;
`;
const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20%;
  width: 100%;
  gap: 2rem;
`;

const size = styled.span``;

const Header = styled.header`
  width: 100%;
  height: 5em;
  /* border: 1px solid yellowgreen; */
`;

const Span = styled.span`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontSize};
`;

const Button = styled.button`
  background-color: #1868d1;
  color: #fff;
  border-radius: 100px;
  padding: 10px;
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
              <Span weight="500">{title}</Span>
              <Span weight="100" fontSize=".8em">
                {categories.toString().split(", ")}
              </Span>
              <Span>${price}</Span>
              <Span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                iusto et eius delectus expedita dolore tempore corrupti. Quod
                nulla quibusdam maiores laudantium, alias accusamus nisi amet,
                consequuntur iste, natus distinctio?
              </Span>
            </TitleContainer>
            <SizeContainer>
              <Size type="rounded" availableSize={size} />
              <Button>Get it before it's gone!</Button>
            </SizeContainer>

            <ColorContainer>Color</ColorContainer>
          </RightPanel>
        </Container>
      )}
    </StyledProductPage>
  );
}

export default ProductPage;
