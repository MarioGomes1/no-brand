import axios from "./axiosConfig";

const token = localStorage.getItem("token");
console.log(token);
export async function saveCart(cart) {
  console.log(cart);
  try {
    const data = await axios.post(
      "/cart",
      { products: cart },

      {
        headers: {
          token: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateCart(id, products) {
  id;
  try {
    const data = await axios.put(`/cart/${id}`, products, {
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// check if the cart len is <1 or empty. If so, make a request to the backend to createCart.
// So the above only happens when the user adds to cart the first time.
// Once the cart is created and id is returned..

//All other times the request is made, make a put request to update the cart, params = cartId

//If cart is empty, should a request be sent to delete the cartId? //TODO To decide

// export async function saveCart(cart) {
//     try {
//       const data = await axios.post(
//         `/cart/${"673674b28fd2a5e5bac42a0f"}`,
//         { products: [{ productId: "670555124178e117607ceb1f", quantity: 1 }] },
//         {
//           headers: {
//             token: `Bearer ${token}`,
//           },
//         }
//       );
//       return data;
//     } catch (err) {
//       throw new Error(err);
//     }
//   }
