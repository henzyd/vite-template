import { useQuery } from '@tanstack/react-query'

export function useUser() {
  return useQuery<User>(['auth/users/me/'])
}

export const useLoggedInUser = useUser as () => ReturnType<typeof useUser> & {
  data: User
}
