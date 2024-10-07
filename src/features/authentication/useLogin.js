import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../services/apiUsers";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: attemptLogin, error } = useMutation({
    mutationFn: (user) => loginUser(user),
    onSuccess: () => console.log("Logged in"),
  });

  return { attemptLogin, error };
}
