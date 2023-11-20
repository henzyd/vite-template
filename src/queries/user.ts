import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export function useCurrentUser(options?: UseQueryOptions<User>) {
  return useQuery<User>({
    queryKey: ["/auth/users/me/"],
    ...options,
  });
}
