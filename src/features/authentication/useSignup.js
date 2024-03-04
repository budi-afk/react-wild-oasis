import { useMutation } from "@tanstack/react-query";
import { apiSignup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      apiSignup(fullName, email, password),
    onSuccess: () => {
      toast.success("Signup successfully");
    },
    omError: (err) => {
      toast.error(err.mesage);
    },
  });

  return { isLoading, signup };
}
