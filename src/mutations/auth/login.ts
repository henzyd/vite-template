import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { API_TOKEN } from '../../app-constants'
import { toast } from 'react-hot-toast'

async function login(data: { email: string; password: string }) {
  const { data: response } = await axios.post<{
    data: {
      access: string
      refresh: string
    } & User
  }>('auth/login/', data)

  return response.data
}

export default function useLogin() {
  const queryClient = useQueryClient()

  return useMutation(login, {
    onSuccess(data) {
      localStorage.setItem(API_TOKEN, data.refresh)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access
      queryClient.setQueriesData(['auth/users/me/'], data)
      toast.success('Login successful!')
    },
  })
}
