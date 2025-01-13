import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/apiUsers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserCredentials } from "./userSlice";
import { fetchCart } from "../cart/cartSlice";

export function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    data,
    mutate: attemptLogin,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (user) => loginUser(user),
    onSuccess: (data) => {
      const { accessToken, user } = data;
      localStorage.setItem("token", accessToken);
      dispatch(setUserCredentials(data));
      dispatch(fetchCart(accessToken));
      navigate(-1);
    },
    onError: (error) => {
      console.error("Login error", error);
    },
  });
  return { attemptLogin, error, data, isLoading };
}
