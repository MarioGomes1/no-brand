import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/apiUsers";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const {
    data,
    mutate: attemptLogin,
    error,
    loading,
  } = useMutation({
    mutationFn: (user) => loginUser(user),
    onSuccess: (data) => {
      localStorage.setItem("token", data?.data.accessToken);
      navigate(-1);
    },
    onError: (error) => {
      console.error("Login error", error);
    },
  });
  return { attemptLogin, error, data, loading };
}
