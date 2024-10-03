//Not needed but want to practice custom hooks

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../../services/apiUsers";

export function useCreateUser() {
  const queryClient = useQueryClient();
  const { mutate: createNewUser, isCreating } = useMutation({
    mutationFn: (newUser) => createUser(newUser),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["signup"],
      }),
  });

  return { createNewUser, isCreating };
}
