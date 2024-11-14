import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../services/apiUsers";

export function useLogin() {
  console.log("test");
  const queryClient = useQueryClient();
  const {
    data,
    mutate: attemptLogin,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: (user) => loginUser(user),
    onSuccess: () => console.log(data),
    // onSuccess: () => localStorage.setItem("tok", data.data.accessToken),
  });
  console.log(data);
  return { attemptLogin, error, data, isSuccess };
}
