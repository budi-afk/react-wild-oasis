import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteBooking as apiDeleteBooking } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => apiDeleteBooking(bookingId),

    onSuccess: () => {
      toast.success("Booking successfully deleted");

      queryClient.invalidateQueries({ active: true });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}
