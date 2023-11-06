import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { axios as api } from '@/utils/api'

async function forgotPassword(data: Record<string, any>) {
  const { data: response } = await axios.post('auth/reset-password/verify/', data)

  return response.data
}

export default function useForgotPassword() {
  return useMutation(forgotPassword)
}

async function changePassword(data: Record<string, any>) {
  const { data: response } = await api.post('auth/users/set_password/', data)

  return response.data
}

export function useChangePassword() {
  return useMutation(changePassword)
}
