import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { API_TOKEN } from '../../app-constants'
import { toast } from 'react-hot-toast'

async function withGoogle(data: { auth_token: string }) {
  const { data: response } = await axios.post('auth/google/', data)

  return response as User & {
    access: string
    refresh: string
  }
}

export default function useGoogleAuth() {
  const queryClient = useQueryClient()

  return useMutation(withGoogle, {
    onSuccess(data) {
      localStorage.setItem(API_TOKEN, data.refresh)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access
      queryClient.setQueriesData(['auth/users/me/'], data)
      toast.success('Login successful!')
    },
  })
}
