import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosPrivate } from "~/utils/api";
import { fileToBase64 } from "~/utils/helper";

export function useEditProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Record<string, any>) => {
      const { data: response } = await axiosPrivate.patch("/auth/users/me/", data);

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["/auth/users/me/"],
      });
    },
  });
}

export function useImageUpload() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Record<string, any>) => {
      if (data.image_file) {
        data.image = await fileToBase64(data.image_file);
      }

      const { data: response } = await axiosPrivate.post("/auth/image-upload", data);

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["/auth/users/me/"],
      });
    },
  });
}
