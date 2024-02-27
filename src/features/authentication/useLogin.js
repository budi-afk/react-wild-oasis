import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { apiLogin } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isLogin, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),

    onSuccess: () => {
      toast.success("Login successfully");
      queryClient.invalidateQueries({ active: true });
      navigate("/dashboard");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLogin, login };
}
