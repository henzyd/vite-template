import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { REFRESH_TOKEN_KEY } from "~/utils/constants";
import { notifySuccess } from "~/utils/toast";

export default function useGoogleAuth() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async function withGoogle(data: { auth_token: string }) {
      const { data: response } = await axios.post("auth/google/", data);

      return response as User & {
        access: string;
        refresh: string;
      };
    },
    onSuccess: (data) => {
      localStorage.setItem(REFRESH_TOKEN_KEY, JSON.stringify(data.refresh));
      axios.defaults.headers.common["Authorization"] = "Bearer " + data.access;
      queryClient.setQueriesData({ queryKey: ["auth/users/me/"] }, data);
      notifySuccess("Login successfully!");
    },
  });
}
