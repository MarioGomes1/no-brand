import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import { updateCart } from "../../services/apiCart";

export function useUpdateCart(id) {
  const cart = useSelector(getCart);
  const prod = cart.map((el) => {
    return {
      productId: el.id,
      quantity: el.quantity,
      selectedSize: el.selectedSize,
    };
  });
  const { data, mutate: tryUpdateCart } = useMutation({
    mutationFn: (id) => updateCart(id, prod),
    onSuccess: (data) => {
      //   localStorage.setItem("cart", data);
    },
  });
  return { data, tryUpdateCart };
}
