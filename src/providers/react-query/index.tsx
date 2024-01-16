import { QueryClient } from "@tanstack/react-query";
import { axiosPrivate } from "~/utils/api";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const { data } = await axiosPrivate.get(queryKey.join("/"));

        return data;
      },
    },
  },
});
