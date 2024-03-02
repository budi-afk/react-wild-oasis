import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { apiLogout } from "../../services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: apiLogout,
    onSuccess: () => {
      // menghapus semua data dari cache
      queryClient.removeQueries();
      // replace untuk mencegah back button kembali ke page sebelumnya
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
