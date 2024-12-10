import { useMutation } from "@tanstack/react-query";
import { saveCart } from "../../services/apiCart";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";

export function useCreateCart() {
  const cart = useSelector(getCart);
  const { data, mutate: saveUserCart } = useMutation({
    mutationFn: () => saveCart(cart),
    onSuccess: (data) => {
      localStorage.setItem("cartId", data.data._id);
    },
  });
  return { data, saveUserCart };
}
