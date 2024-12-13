import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getProduct } from "../services/product";
import { useParams, useSearchParams } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import Size from "../ui/Size";
import Modal from "../ui/Modal";
import { device } from "../utils/mediaQueries";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import CartPreview from "../features/cart/CartPreview";
import { useCreateCart } from "../features/cart/useCreateCart";
import { useUpdateCart } from "../features/cart/useUpdateCart";

const StyledProductPage = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled(motion.div)`
  padding: 0 100px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 500px));
  justify-content: center;
  width: 100%;
  height: auto;

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
  }
`;

const LeftPanel = styled(motion.div)`
  display: flex;
  gap: 2rem;
  height: 75%;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    height: auto;
    width: auto;
    max-width: 300px;
  }
`;
const MainImage = styled(motion.img)`
  background-color: yellow;
  width: auto;
  height: auto;
  max-height: 500px;
  overflow: hidden;
  border-radius: 10px;
`;
const SideImageContainer = styled.div`
  width: 5em;
  height: 80%;
  /* border: 1px solid black; */
  overflow: scroll;
  scrollbar-color: none;
  scrollbar-width: none;
  @media ${device.tablet} {
    display: flex;
    width: 100%;
  }
`;

const SideImagePreview = styled.img`
  display: flex;
  width: auto;
  max-width: 100px;
  height: 80px;
  margin-bottom: 2rem;
  border-radius: 10px;
`;

const RightPanel = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5rem;
  @media ${device.tablet} {
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  width: 100%;
  gap: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dcdcdc;
  width: 100%;
  height: 3em;
  margin-bottom: 50px;

  > p {
    font-size: 1.3rem;
  }
`;

const Span = styled.span`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontSize};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Button = styled(motion.button)`
  background-color: #0a0b0b;
  color: #fff;
  border-radius: 9px;
  padding: 10px;
  width: 40%;
`;

const SizeDiv = styled.div`
  > * {
    margin-right: 20px;
  }
`;

function ProductPage() {
  const { id } = useParams();
  const [showCart, setShowCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState();

  function handleSelectedSize(selected) {
    setSelectedSize(selected);
  }

  const dispatch = useDispatch();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(id),
  });

  const { title, sizes, description, price, category, image } = product || "";
  console.log(sizes);

  function TempPreviewImages() {
    let arr = [];
    for (let index = 0; index < 8; index++) {
      arr.push(<SideImagePreview key={Math.random() * 100} src={image} />);
    }
    return arr.map((el) => el);
  }
  const { saveUserCart } = useCreateCart();
  const { tryUpdateCart } = useUpdateCart();

  function handleToggleCart() {
    setShowCart((prev) => !prev);
    const cartId = localStorage.getItem("cartId");
    saveUserCart();
    // if (!localStorage.getItem("cartId")) {
    // } else {
    //   //change function name
    //   tryUpdateCart(cartId);
    // }
  }

  useEffect(() => {
    if (showCart && selectedSize) {
      //TODO is this a duplicate?
      const { title, description, image, categories, price, id } = product;
      dispatch(
        addItem({
          title,
          description,
          image,
          categories,
          price,
          selectedSize,
          id,
        })
      );
    }
  }, [showCart, dispatch, product, selectedSize]);

  return (
    <StyledProductPage>
      {showCart && (
        <Modal
          isOpen={showCart}
          open={showCart}
          width="25%"
          onClose={handleToggleCart}
        >
          <CartPreview />
        </Modal>
      )}
      <Header>
        <p>Extra 25% Off: Use Code TREATYOURSELF</p>
      </Header>
      {!isLoading && (
        <Container>
          <LeftPanel>
            <SideImageContainer>{TempPreviewImages()}</SideImageContainer>
            <MainImage
              animate={{
                transition: { duration: 0.5 },
                initial: false,
                scale: [1, 1.5, 1],
                exit: { opacity: 0 },
              }}
              src={product.image}
            />
          </LeftPanel>
          <RightPanel>
            <TitleContainer>
              <Span weight="500" fontSize="2em">
                {title}
              </Span>
              {/* <Span weight="200" fontSize="1em">
                {categories.toString().split(", ")}
              </Span> */}
              <Span weight="600" fontSize="1.3em">
                ${price}
              </Span>
              <Span fontSize="1em">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                iusto et eius delectus expedita dolore tempore corrupti. Quod
                nulla quibusdam maiores laudantium, alias accusamus nisi amet,
                consequuntur iste, natus distinctio?
              </Span>
            </TitleContainer>
            <SizeContainer>
              <Span>Select Size</Span>
              <SizeDiv>
                <Size
                  availableSize={sizes}
                  selectedSize={selectedSize}
                  onSelect={handleSelectedSize}
                />
              </SizeDiv>
            </SizeContainer>
            <ButtonGroup>
              <Button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
              >
                Buy
              </Button>
              <Button
                onClick={handleToggleCart}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 1 }}
              >
                Add to Cart
              </Button>
            </ButtonGroup>
          </RightPanel>
        </Container>
      )}
    </StyledProductPage>
  );
}

export default ProductPage;
